# !/bin/bash

# UPLOAD Backend IMAGE into Dockerhub repo
# create the docker path
dockerpath=therealjimoh/dogbreed-be:latest

docker login
docker tag dogbreed-be $dockerpath
echo "Docker ID and Image: $dockerpath"

# Push image to the docker repository
docker push $dockerpath

# ----

# UPLOAD Frontend IMAGE into Dockerhub repo
create the docker path
dockerpathfe=therealjimoh/dogbreed-fe-get:latest

docker login
docker tag dogbreed-fe-get $dockerpathfe
echo "Docker ID and Image: $dockerpathfe"

# Push image to the docker repository
docker push $dockerpathfe