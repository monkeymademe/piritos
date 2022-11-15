 #!/usr/bin/python

from flask import Flask, request, render_template, jsonify, json
 #, session, copy_current_request_context
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.executors.pool import ThreadPoolExecutor, ProcessPoolExecutor
from flask_socketio import SocketIO, emit
import time, random, socket
from sense_hat import SenseHat
sense = SenseHat()
from mote import Mote
mote = Mote()
mote.configure_channel(1, 16, False)
mote.configure_channel(2, 16, False)
mote.configure_channel(3, 16, False)
mote.configure_channel(4, 16, False)

# Create an instance of flask called "app" and setup socketio
app = Flask(__name__, static_url_path='/static')
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

# Setup apscheduler job pools
executors = {'default': ThreadPoolExecutor(16), 'processpool': ProcessPoolExecutor(4)}
sched = BackgroundScheduler(timezone='Asia/Seoul', executors=executors)

# Set ritos defaults for server this could save and load json from a file later
shipName = "USS Cerritos"
shipClass = "California"
shipRegistry = "NCC-75567"
colorSchemeName = "Ritos Yellow"

# Below is the list of possible color schemes available in the Ritos LCARS. For a little fun uncomment both lines if you want to set the theme randomly when the server boots
#possibleColorScheme = ["Ritos Yellow", "Sickbay Aqua", "Picard Gray", "Nemesis Cyan", "Padd Blue", "Titan PurpleHead", "Vancouver Orange", "Merced Green", "Oakland Glory", "Inglewood Violet", "Carlsbad Nature", "Prodigy Blast", "Ketracel White", "Disco Beige", "Shipyard Blueprint", "Shipyard Blueprint II", "Red Alert"]
#colorSchemeName = random.choice(possibleColorScheme)

# Merge Above defaults into JSON
serverstatus = {"alertStatus":"normal", "colorSchemeName":colorSchemeName, "shipName":shipName, "shipClass":shipClass, "shipRegistry":shipRegistry, "themeColor":"rgb(255, 211, 0)", "themeColorR":255, "themeColorG":211, "themeColorR":0}

# Pulling Sensor data from sensehat
sensordata = {"Temperature":round(sense.temp, 2) , "Humidity":round(sense.humidity, 2) , "Pressure":round(sense.pressure, 2)}

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
    emit('remoteLogMsg', remoteLogMsg)
    socketio.emit('updateSensorData', sensordata, broadcast=True)
    print(serverstatus)
    return serverstatus

# Client sending a change so update server settings
@socketio.on('setStatus')
def setStatus(data):
    clientstatus = fixjson(data)
    global serverstatus
    serverstatus = serverstatus | clientstatus
    emit('updateState', serverstatus, broadcast=True)

# Default handler, if no path is given
@app.route("/")
def my_form():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    text = request.form['testing']
    print(text)
    return jsonify({'error' : 'Missing data!'})

# Function for the lights - Using Pimoroni mote sticks
def lights():
    global redalertstatus
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
    socketio.emit('updateSensorData', sensordata, broadcast=True)

# If you have a pico w this little gem receives the data from the pico temp sensor and formats it and pushes it to all clients
def getpicowudp():
    udp_ip = '0.0.0.0'
    udp_port = 5005

    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.bind((udp_ip, udp_port))

    while True:
        data, addr = sock.recvfrom(1024)
        temprature = data.decode('utf-8')
        msg = "Recived remote sensor data from Pico W: " + temprature + "C"
        data = {"message": msg, "showTimePrefix": True, "playSound": True}
        print(msg)
        socketio.emit('remoteLogMsg', data, broadcast=True)

# Adding functions as a scheduled jobs because its a while loop running forever it should run in its own thread
sched.add_job(lights)
# Comment out the next line if you don't need the sensehat data
sched.add_job(getsensordata, 'interval', minutes=2)
# Comment out the next line if you don't have a Pico W sending temperture data
sched.add_job(getpicowudp)

# If we're running this script directly, this portion executes. The Flask
#  instance runs with the given parameters. Note that the "host=0.0.0.0" part
#  is essential to telling the system that we want the app visible to the
#  outside world.
if __name__ == "__main__":
    # Start all jobs
    sched.start()
    # Run server on host pi's IP and hostname so it can be accessed on the local network
    socketio.run(app, host='0.0.0.0', port=5000)
