# PiRitos

PiRitos is a Raspberry Pi project that hosts the wonderful Star Trek: Lowerdecks inspired LCARS web interface created by the talented Rob [@meWho_System47](https://twitter.com/meWho_System47) on twitter. (You can also see Ritos and the rest of his work at [mewho.com](http://mewho.com)

PiRitos is using flask for hosting and socketio for websocket communication between the server and clients. What this means is anyone in the local network using their browser, can connect to the PiRitos server and interact with Robs LCARS interface. Each browser window we would refer to as the 'client'.

The magic happens with websocket communication!

SocketIO easily allows flask to talk to all the connected clients at the same time allowing the server to pass variables to the client, and the client to pass variables to the server. This 2 way communication means the all of the clients can be in sync with changes made in one of the clients since the server is the middle man.

An added bonus of having flask written in python is that we can easily add to the experience by adding LED lights or sending sensor data from the SenseHat to the clients.

Thanks to Rob [@meWho_System47](https://twitter.com/meWho_System47), he helped connecting socketio to some of the Javascript functions, when a user presses the 'Red Alert' button we have all the clients activating 'Red Alert' and also have a way to display some sensor data from the server.

## What do you need for this project:

- Raspberry Pi Zero W (any pi that can run flask should do)
- [Mote Stick LEDs from Pimoroni](https://shop.pimoroni.com/collections/mote)
- Internet connection (Some of the JS libraries are taken from a CDN for now)
- [SenseHat](https://www.raspberrypi.com/products/sense-hat/) (Optional for sensor data)
- Cables, SD Card etc

## Usage

- Install Raspberry Pi OS Lite ([How to click here](https://www.raspberrypi.com/documentation/computers/getting-started.html#installing-the-operating-system))
- Once installed connect to your Raspberry Pi
- Make sure the OS is updated
```bash
sudo apt update && sudo apt upgrade -y
```
- Install pip and flask
```bash
sudo apt-get install python3-pip python3-flask 
```
- Use the package manager [pip](https://pip.pypa.io/en/stable/) to install socketio, APScheduler and gevent-websocket
```bash
pip install flask-socketio Flask-APScheduler gevent-websocket

```
- Clone this repo
- Goto the piritos directory
- Run: 
```bash
python app.py
```
- Open your broswer and goto the ip of your raspberry pi/flask server

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
