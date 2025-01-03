#!/bin/bash

# Remove if it exists
if [ -f lab-weather.zip ]; then
  rm lab-weather.zip
fi

# And recreate
zip -j lab-weather.zip ./template/city_weather.py ./template/filter.py ./template/main.py
