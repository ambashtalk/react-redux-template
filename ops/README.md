# Description
Here we are trying to deploy react-app and nginx on different containers, where nginx forwards the requests to the react-app server.

---
## Describing ops directory
Files structure in ops :-

- docker
    - nginx
    - node
- k8s
    - deployment.yaml
    - service.yaml

## The `docker` folder
This folder contains directories that correspond to a docker image. For example, the `nginx` directory defines the nginx.conf and a Dockerfile to build a custom nginx image with out desired configuration. Similarly the `node` directory defines a Dockerfile to create an image for our react-app.

## The `k8s` folder
This folder defines the various manifests that is used by kubernetes to create pods.

A deployment manifest defines a pod which can run multiple containers. Here it is running the nginx and node images defined above in docker folder. 

Deployments do not expose ports to external host. So we use a service manifest to define a node port to make a port accessible.

---
### NOTE
To use it locally, first we need to build the -
 - node image with name `lka12/counter-app-node` and, 
 - nginx image with name `lka12/counter-app-nginx`

as the deployment files use this image name. Also if you want to use the local build of image, you can set `ImagePullPolicy: Never` in deployment manifest. Else, it will try to pull it from a remote repo like Dockerhub.

To run the pods use command - 

`kubectl apply -f ops/k8`

To stop the pods use command -

`kubectl delete -f ops/k8`
