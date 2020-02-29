### CV frontend

#### Run docker container

* Build project:
```
npm run build:prod
```

* Build docker image:
```
docker build -t cv:1.0 . 
```

* Run docker container:
```
docker run -p 80:80 -d cv:1.0 
```