# Postman testing Node.js

This application is used for Postman testing.

- GET /
- GET /:id
- POST /
- PUT /
- DELETE /

## Install

```
npm install
```

## Run

```
npm run dev
```

## Test

#### GET /

```
curl -i http://localhost:4000/

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json
Date: Tue, 28 Feb 2017 10:38:31 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"response":"This is GET method."}
```

#### GET /:id

```
curl -i http://localhost:4000/123

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json
Date: Tue, 28 Feb 2017 10:39:04 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"response":"This is GET method with id=123."}
```

#### POST /

```
curl -i -x POST http://localhost:4000

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json
Date: Tue, 28 Feb 2017 10:38:47 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"response":"This is POST method."}
```

#### PUT /

```
curl -i -x PUT http://localhost:4000

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json
Date: Tue, 28 Feb 2017 10:40:48 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"response":"This is PUT method."}
```

#### DELETE /

```
curl -i -x DELETE http://localhost:4000

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json
Date: Tue, 28 Feb 2017 10:41:11 GMT
Connection: keep-alive
Transfer-Encoding: chunked

{"response":"This is DELETE method."}
```

#### fileupload/signle

```
post http://localhost:4000/fileupload/single

form-data :
 Key : profile

Repsonse :

{
    "fieldname": "profile",
    "originalname": "WhatsApp Image 2019-05-28 at 9.55.17 PM.jpeg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "destination": "./upload",
    "filename": "WhatsApp Image 2019-05-28 at 9.55.17 PM.jpeg",
    "path": "upload/WhatsApp Image 2019-05-28 at 9.55.17 PM.jpeg",
    "size": 47751
}
```

#### fileupload/bulk

```
post http://localhost:4000/fileupload/bulk

form-data :
 Key : profiles

Repsonse :

[
    {
        "fieldname": "profiles",
        "originalname": "IMG_8040.JPG",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "./upload",
        "filename": "IMG_8040.JPG",
        "path": "upload/IMG_8040.JPG",
        "size": 606853
    },
    {
        "fieldname": "profiles",
        "originalname": "gelSGR.jpeg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "./upload",
        "filename": "gelSGR.jpeg",
        "path": "upload/gelSGR.jpeg",
        "size": 1726696
    }
]

```
