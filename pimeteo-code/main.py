#!/usr/bin/python3
import socket
import adafruit_dht      # pip3 install adafruit-circuitpython-dht
import adafruit_mpl115a2 # pip3 install adafruit-circuitpython-mpl115a2
import board
import busio
from time import sleep

i2c = busio.I2C(board.SCL, board.SDA)
mpl = adafruit_mpl115a2.MPL115A2(i2c)
dht = adafruit_dht.DHT22(board.D4, use_pulseio=False)

url = "192.168.X.X" #The IP for the PiRitos Flask server
port = 5005 #Not the same port as socketio... this is for UDP
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sleep(2)

while True:
    try:
        humidity = dht.humidity
        temperature = dht.temperature # or mpl.temperature
        pressure = mpl.pressure
        message = str(round(temperature,2)) + "," + str(round(humidity,2)) + "," + str(round(pressure,2))
        sock.sendto(bytes(message, "utf-8"), (url, port))
        print(message)
    except RuntimeError as error:
        # Errors happen fairly often, DHT's are hard to read, just keep going
        print(error.args[0])
        sleep(2)
        continue
    except Exception as error:
        dht.exit()
        raise error
    sleep(60)
