import network
import socket
import machine
from utime import sleep

from secret import ssid, password

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect(ssid, password)

print("Connecting to wifi....")
while wlan.isconnected() == False:
    pass

print("Connected")
print(wlan.ifconfig())

sensor_temp = machine.ADC(4)
conversion_factor = 3.3 / (65535)

url = "192.168.X.X" #The IP for the PiRitos Flask server
port = 5005 #Not the same port as socketio... this is for UDP
sleep(2)
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sleep(2)
while True:
    reading = sensor_temp.read_u16() * conversion_factor
    temperature = 27 - (reading - 0.706)/0.001721
    sock.sendto(bytes(str(round(temperature,2)), "utf-8"), (url, port))
    print(temperature)
    sleep(60)
