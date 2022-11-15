# PiRitos

PiRitos is a Raspberry Pi project that hosts the wonderful Star Trek: Lowerdecks inspired LCARS web interface created by the talented Rob @mewho on twitter.

PiRitos is using flask for hosting and socketio for websocket communication between the server and clients. What this means is anyone in the local network using their browser, can connect to the PiRitos server and interact with Robs LCARS interface. Each browser window we would refer to as the 'client'.

The magic happens with websocket communication! 

SocketIO easily allows flask to talk to all the connected clients at the same time allowing the server to pass variables to the client, and the client to pass variables to the server. This 2 way communication means the all of the clients can be in sync with changes made in one of the clients since the server is the middle man.

An added bonus of having flask written in python is that we can easially add to the experiance by adding LED lights or sending sensor data from the SenseHat to the clients.

Thanks to Rob @mewho who helped connecting socketio to some of the Javascript functions, when a user presses the 'Red Alert' buttton we have all the clients activating 'Red Alert' and also have a way to display some sensor data from the server.

Whats needed this project:

* Raspberry Pi Zero W (any pi that can run flask should do)
* Mote Stick LEDs from Pimoroni
* Internet connection (Some of the JS libaries are taken from a CDN for now)
* SenseHat if you want sensor data
* Cables, SD Card etc

Clone this repo

Go into the piritos folder

Run the following command 'python app.py'

Open your browser and goto the IP of your Raspberry Pi with the port 5000 at the end. http://192.168.0.82:5000 for example
