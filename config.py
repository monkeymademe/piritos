import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    ## Flask Configs
    SECRET_KEY          = "U55P1r1t0s!"
    # IP to bind to. Either 0.0.0.0 to be accessible to the network or
    # or 127.0.0.1 to limit access to localhost
    APP_IP              = "0.0.0.0" 
    APP_PORT            = 5000

    ## Pi RITOS Appearance
    SHIP_NAME           = "USS Cerritos"
    SHIP_CLASS          = "California"
    SHIP_REGISTRY       = "NCC-75567"
    COLOR_SCHEME        = "Ritos Yellow"
    RANDOM_COLOR_SCHEME = False
    TIME_ZONE           = "America/Los_Angeles"

    ## Pi RIOTS add-ons
    # News
    ENABLE_NEWS         = True
    NEWS_FEED_URL       = "http://feeds.bbc.co.uk/news/rss.xml"

    # Weather
    ENABLE_WEATHER      = True
    WEATHER_LAT         = "37.82"    # Default location is Starfleet Academy
    WEATHER_LONG        = "-122.48"  # current day Fork Baker, CA

    # PICO W temp collection (see picow-code dir)
    ENABLE_PICO_DATA    = False

    # Sense Hat
    ENABLE_SENSE_HAT    = False

    # Enable Pimoroni Mote Sticks (LED)
    ENABLE_MOTES        = False

    # PiMeteo temp collection (see pimeteo-code dir)
    ENABLE_PIMETEO      = False

    # Home Assistant Server
    ENABLE_HA           = False
    HA_API_SERVER       = 'https://homeassistant.local:8123/api'
    HA_TOKEN            = 'abc123def456'

    # Home Assistant Red Alert
    ENABLE_HA_LIGHTS    = False
    HA_ALERT_SCENE      = 'scene.red_alert'
    HA_NORMAL_SCENE     = 'scene.office_normal'

    # Home Assistant Temp/Humidity
    ENABLE_HA_TEMP      = False
    HA_TEMP_ENTITY      = 'sensor.acurite_tower_b_7114_t'
    HA_HUMID_ENTITY     = 'sensor.acurite_tower_b_7114_h'


    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG               = True
    APP_IP              = "127.0.0.1" 
    APP_PORT            = 5001
    SHIP_NAME            = "USS Devritos"
    SHIP_CLASS           = "Oberth"
    SHIP_REGISTRY        = "NCC-68443"
    COLOR_SCHEME         = "Inglewood Violet"

    # Home Assistant Server
    ENABLE_HA           = True
    HA_API_SERVER       = os.environ.get('HA_API_SERVER')
    HA_TOKEN            = os.environ.get('HA_TOKEN')
    ENABLE_HA_LIGHTS    = True
    ENABLE_HA_TEMP      = True


class ProductionConfig(Config):
    DEBUG = False

