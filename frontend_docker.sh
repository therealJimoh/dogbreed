# !/bin/bash

# change directory to frontedn folder
cd frontend
# Build the docker image
docker build -t dogbreed-fe-get .
# Run the frontend docker image
docker run -p 3000:3000 dogbreed-fe-get

