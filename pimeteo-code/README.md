# PiMeteo code

This is for people with a DHT and a MPL115A2.

This code uses a DHT22 (you can use DHT11, but you will have to edit main.py) for temperature and humidity and a MPL115A2 for the pressure.


# Usage

1. Connect the DHT to GPIO 4
2. Connect the MPL115A2
3. Use the package manager [pip](https://pip.pypa.io/en/stable/) to install the required packages: `pip3 install adafruit-circuitpython-dht adafruit-circuitpython-mpl115a2`
4. Edit the PiRitos app.py, replace the line: `#sched.add_job(getpimeteostats)` with `sched.add_job(getpimeteostats)`
5. Edit the main.py that's in this `pimeteo-code` folder and change the `ip=` value to the corresponding value
6. Run PiRitos and then run main.py


# Backstory

The name comes from a project inside a magazine called C'T [Dutch Link to the project](https://www.ct.nl/workshops/maak-een-raspberry-weerstation/) they called the weather station project PiMeteo, so that's why I refer to this as PiMeteo
