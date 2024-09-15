#!/usr/bin/env python

from flask import Flask, request, render_template, jsonify, json
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.executors.pool import ThreadPoolExecutor, ProcessPoolExecutor
from flask_socketio import SocketIO, emit
import time, random
from datetime import datetime

# Create an instance of flask called "app" and setup socketio
app = Flask(__name__, static_url_path='/static')
# load Production or Development config as appropriate
# app.config.from_object('config.ProductionConfig')
app.config.from_object('config.DevelopmentConfig')
socketio = SocketIO(app)

# Setup apscheduler job pool
executors = {'default': ThreadPoolExecutor(16), 'processpool': ProcessPoolExecutor(4)}
sched = BackgroundScheduler(timezone=app.config["TIME_ZONE"], executors=executors)

###
# Conditionally enable modules based on config.
# News and Weather are on by default

# Socket (not SocketIO) is used to receive TCP data from the PicoW
# Set enablePicoData to False if you wish to disable this featue
enablePicoData = app.config["ENABLE_PICO_DATA"]
if enablePicoData:
    import socket

# Feedparser is required for the bbc headline feed.
enableNews = app.config["ENABLE_NEWS"]
if enableNews:
    import feedparser

# Requests (not to be confused with flask request) is required for the weather feature.
enableWeather = app.config["ENABLE_WEATHER"]
if enableWeather:
    import requests
    weather_message = "Historical weather data not available."

# Sense hat is for the sensor data normally on the pi running the server.
# Set ENABLE_SENSE_HAT to False to disable the featue
enableSenseHat = app.config["ENABLE_SENSE_HAT"]
if enableSenseHat:
    from sense_hat import SenseHat
    sense = SenseHat()

# Mote is for the Pimoroni Mote stick LEDs.
# Set enableMotes to False or replace this code and the code in the 
# lights function with your own LED system
enableMotes = app.config["ENABLE_MOTES"]
if enableMotes:
    try:
        from mote import Mote
        mote = Mote()
        mote.configure_channel(1, 16, False)
        mote.configure_channel(2, 16, False)
        mote.configure_channel(3, 16, False)
        mote.configure_channel(4, 16, False)
    except OSError as e:
        print("Mote lights disabled due to an exception: ", e)
        enableMotes = False

# PiMeteo is like an alternative to sensehat and will send the weather sensor data of the pimeteo you link
# Set ENABLE_PIMETEO to True if you have a PiMeteo setup up and running and also running the code you can find in the pimeteo-code/ folder
enablePimeteo = app.config["ENABLE_PIMETEO"]
if enablePimeteo and not(enablePicoData):
    import socket

# All the Home Assistant Configuration 
enableHomeAssistant = app.config['ENABLE_HA']
if enableHomeAssistant:
    from homeassistant_api import Client

    # Setup HA client
    haServer        = app.config['HA_API_SERVER']
    haToken         = app.config['HA_TOKEN']
    # Set request verify to False if you're using a self signed cert
    haClient        = Client(haServer, haToken, 
                             global_request_kwargs={'verify': True}, 
                             cache_session=False)

    enableHaTemp    = app.config['ENABLE_HA_TEMP']
    if enableHaTemp:
        haConfig    = haClient.get_config()
        haLatitude  = float(haConfig.get('latitude'))
        haLongitude = float(haConfig.get('longitude'))
    
    enableHaLights  = app.config['ENABLE_HA_LIGHTS']

###
# Configure UI appearance
shipName        = app.config["SHIP_NAME"]
shipClass       = app.config['SHIP_CLASS']
shipRegistry    = app.config['SHIP_REGISTRY']
colorSchemeName = app.config['COLOR_SCHEME']

# Below is the list of possible color schemes available in the Ritos LCARS.
# For a little fun set enableRandomColorScheme to true if you want to set the theme randomly when the server boots
enableRandomColorScheme = app.config['RANDOM_COLOR_SCHEME']
if enableRandomColorScheme:
    possibleColorScheme = ["Ritos Yellow", "Sickbay Aqua", "Picard Gray", "Nemesis Cyan", "Padd Blue", "Titan PurpleHead", "Vancouver Orange", "Merced Green", "Oakland Glory", "Inglewood Violet", "Carlsbad Nature", "Prodigy Blast", "Ketracel White", "Disco Beige", "Shipyard Blueprint", "Shipyard Blueprint II", "Red Alert"]
    colorSchemeName = random.choice(possibleColorScheme)

# Merge Above defaults into JSON
serverstatus = {"alertStatus":"normal", "colorSchemeName":colorSchemeName, "shipName":shipName, "shipClass":shipClass, "shipRegistry":shipRegistry, "themeColor":"rgb(255, 211, 0)", "themeColorR":255, "themeColorG":211, "themeColorB":0}

# Pulling Sensor data from sensehat
if enableSenseHat:
    sensordata = {"Temperature":round(sense.temp, 2) , "Humidity":round(sense.humidity, 2) , "Pressure":round(sense.pressure, 2)}

# Just to set the variable if it is not set yet
if enablePimeteo and not(enableSenseHat):
    sensordata = {"Temperature":round(0, 2) , "Humidity":round(0, 2) , "Pressure":round(0, 2)}

# Had issues with JSON from clients JS so this function cleans up the JSON for Python
def fixjson(data):
    json_string = json.dumps(data)
    data = json.loads(json_string)
    return(data)

# As a client makes the attempt to connect to the websocket instance 'on connect' is triggered
@socketio.on('connect')
def connect():
    ip = request.remote_addr
    print("Client on IP " + ip + " is connected")

# Client on loading with ask server for the current variables in serverstatus JSON
@socketio.on('fetchStatus')
def fetchStatus(data):
    clientuid = fixjson(data)
    msg = "Client " + str(clientuid['clientUid']) + " requested status"
    remoteLogMsg = {"message":msg, "showTimePrefix":True}
    print(msg)
    socketio.emit('remoteLogMsg', remoteLogMsg)
    if enableSenseHat or enablePimeteo:
        socketio.emit('updateSensorData', sensordata)
    if enableWeather:
        sendmessage(weather_message, True, True)
    print(serverstatus)
    return serverstatus

# Client sending a change so update server settings
@socketio.on('setStatus')
def setStatus(data):
    clientstatus = fixjson(data)
    global serverstatus
    serverstatus = serverstatus | clientstatus
    socketio.emit('updateState', serverstatus)

# Default handler, if no path is given
@app.route("/")
def my_form():
    return render_template('index.html')

# Testing post method
@app.route('/process', methods=['POST'])
def process():
    text = request.form['testing']
    print(text)
    return jsonify({'error' : 'Missing data!'})

# Function for the lights - Using Pimoroni mote sticks
def lights():
    global serverstatus
    redalertlights = False

    if enableHaLights:
        while True:
            time.sleep(0.05)
            if serverstatus["alertStatus"] == "red" and redalertlights == False:
                scene = haClient.get_domain('scene')
                scene.turn_on(entity_id='scene.red_alert')
                print(f'Set Red Alert scene')
                redalertlights = True
                time.sleep(0.05)
            elif serverstatus["alertStatus"] == "normal" and redalertlights == True:
                scene = haClient.get_domain('scene')
                scene.turn_on(entity_id='scene.office_normal')
                print(f'Set Normal scene')
                redalertlights = False
                time.sleep(0.05)

    elif enableMotes:
        rgb = (0, 0, 0)
        r, g, b = rgb
        increment = 1
        while True:
            if serverstatus["alertStatus"] == "red":
                r += increment
                if r >= 255:
                    r = 255
                    increment = -1
                if r <= 0:
                    r = 0
                    increment = 1
                mote.set_all(r, g, b)
                mote.show()
                time.sleep(0.00005)
            if serverstatus["alertStatus"] == "normal":
                if r >= 1:
                    increment = -1
                    r += increment
                mote.set_all(r, g, b)
                mote.show()
                time.sleep(0.00005)

# Function sending sensor data to all clients
def getsensordata():
    global sensordata
    sensordata = {"Temperature":round(sense.temp, 2) , "Humidity":round(sense.humidity, 2) , "Pressure":round(sense.pressure, 2)}
    print(f"Sensorhat data sent to clients: {sensordata}")
    socketio.emit('updateSensorData', sensordata)

# If you have a pico w this little gem receives the data from the pico temp sensor and formats it and pushes it to all clients
def getpicowudp():
    udp_ip = '0.0.0.0'
    udp_port = 5005
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.bind((udp_ip, udp_port))

    while True:
        data, addr = sock.recvfrom(1024)
        temperature = data.decode('utf-8')
        msg = "Received remote sensor data from Pico W: " + temperature + "C"
        sendmessage(msg, True, True)

# If enabled you can get the last bbc headline sent to the all connected clients
def getbbcheadline():
    feed_url = app.config["NEWS_FEED_URL"]
    feed = feedparser.parse(feed_url)
    entry = feed.entries[0]
    msg = "Viewing historical news data: " + entry.title
    sendmessage(msg, True, True)

# If enabled you can get the current weather report from open-meteo.com sent to the all connected clients normally this is set to every 30 mins to prevent spam
def getweatherdata():
    global haLatitude
    global haLongitude
    # Set latitude and longitude in the config or get them from Home Assistant
    if enableHomeAssistant:
        latitude    = haLatitude
        longitude   = haLongitude
    else:
        longitude = app.config['WEATHER_LAT']
        latitude  = app.config['WEATHER_LONG']
    
    url = f'https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current_weather=true'
    response = requests.get(url)
    data = response.json()
    current_weather = data["current_weather"]
    temperature = current_weather["temperature"]
    weathercode = current_weather["weathercode"]
    weather_codes = {
    0:"Clear skies",
    1:"Mainly clear skies",
    2:"Partly cloudy",
    3:"Overcast",
    45:"Foggy",
    48:"Depositing rime fog",
    51:"Light drizzle",
    53:"Moderate drizzle",
    55:"Dense drizzle",
    56:"Light freezing drizzle",
    57:"Dense freezing drizzle",
    61:"Slight rain",
    63:"Moderate rain",
    65:"Heavy rain",
    66:"Light freezing rain",
    67:"Heavy freezing rain",
    71:"Slight snow fall",
    73:"Moderate snow fall",
    75:"Heavy snow fall",
    77:"Snow grains",
    80:"Slight rain showers",
    81:"Moderate rain showers",
    82:"Violent rain showers",
    85:"Slight snow showers",
    86:"Heavy snow showers",
    95:"Slight to moderate thunderstorm",
    96:"Thunderstorm with slight hail",
    99:"Thunderstorm with heavy hail"
    }
    # weather_message is pulled and written over to update the message for newly connected clients without having to pull from the server again
    global weather_message
    weather_description = weather_codes.get(weathercode, "Unknown weather code")
    weather_message = f"Historical weather data - Temperature:'{temperature}' Weather classification:'{weather_description}'"
    print(f"Fetched weather data from open-meteo.com - Temp: {temperature}, Weather code: {weathercode}")
    sendmessage(weather_message, True, True)

# Function that runs every 2 minutes to sent whats in weather_message to all connected clients so that we are not pulling from open-meteo too offten
def sendweatherdata():
    sendmessage(weather_message, True, True)

# Standard send message to log function
def sendmessage(msg, showTimePrefix=False, playSound=False):
    data = {"message": msg, "showTimePrefix": showTimePrefix, "playSound": playSound}
    socketio.emit('remoteLogMsg', data)
    print(f"Message sent to clients: {msg}")

# If you have a PiMeteo this little gem receives the data from the sensors and formats it and pushes it to all clients
def getpimeteostats():
    global sensordata
    udp_ip = '0.0.0.0'
    udp_port = 5006
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.bind((udp_ip, udp_port))
    sock.settimeout(5)

    while True:
        try:
            data, addr = sock.recvfrom(1024)
            if data:
                data = data.decode('utf-8')
                temp,humid,press = data.split(",")
                sensordata = {"Temperature":round(temp, 2), "Humidity":round(humid, 2), "Pressure":round(press, 2)}
                socketio.emit('updateSensorData', sensordata)
        except socket.timeout:
            continue # makes the shutting down faster because we don't have to wait 2 minutes

# Fetch sensor data from HomeAssistant, format it and push it to all clients
def getHaSensorData():
    global haClient
    global sensordata

    office_temp_entity      = haClient.get_entity(entity_id='sensor.acurite_tower_b_7114_t')
    temp_f                  = office_temp_entity.state.state
    temp                    = (float(temp_f) - 32) * 5/9


    office_humidity_entity  = haClient.get_entity(entity_id='sensor.acurite_tower_b_7114_h')
    humid                   = int(office_humidity_entity.state.state)

    # TODO: get a pressure sensor online
    # office_pressure_entity  = haClient.get_entity(entity_id='sensor.GET_A_PRESSURE_SENSOR')
    # press                   = int(office_pressure_entity.state.state)
    press                   = -1

    sensordata = {"Temperature":round(temp, 2), "Humidity":round(humid, 2), "Pressure":round(press, 2)}
    socketio.emit('updateSensorData', sensordata)
    print(f'Sent HA Sensor Data: {sensordata}')



# Adding functions as a scheduled jobs because its a while loop running forever it should run in its own thread
sched.add_job(lights)
if enableSenseHat:
    print("SenseHat enabled")
    sched.add_job(getsensordata, 'interval', minutes=2)
if enableNews:
    print("News enabled")
    sched.add_job(getbbcheadline, 'interval', minutes=10)
if enableWeather:
    print("Weather enabled")
    getweatherdata()
    sched.add_job(getweatherdata, 'interval', minutes=30)
    sched.add_job(sendweatherdata, 'interval', minutes=3)
if enablePicoData:
    print("Picodata enabled")
    sched.add_job(getpicowudp)
if enablePimeteo:
    print("Pimeteo enabled")
    sched.add_job(getpimeteostats)
if enableHaTemp:
    print("Home Assistant Sensor Data Enabled")
    sched.add_job(getHaSensorData, 'interval', seconds=10)

# If we're running this script directly, this portion executes. The Flask
#  instance runs with the given parameters. Note that the "host=0.0.0.0" part
#  is essential to telling the system that we want the app visible to the
#  outside world.
if __name__ == "__main__":
    # Start all jobs
    sched.start()
    # Run server on host pi's IP and hostname so it can be accessed on the local network
    socketio.run(app, host=app.config['APP_IP'], port=app.config['APP_PORT'], debug=app.config['DEBUG'])
