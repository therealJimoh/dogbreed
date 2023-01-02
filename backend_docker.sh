# !bin/bash

# change directory to the backend
cd backend

# Build the docker image
docker build -t dogbreed-be .

#Run the built docker
docker run -d -p 80:80 dogbreed-be

