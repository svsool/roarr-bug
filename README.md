# For bug repro run this:

```
npm i
npm start
```

It will print

```
{"context":{"logLevel":20,"error":{}},"message":"bar","sequence":0,"time":1549300751178,"version":"1.0.0"}
{"context":{"logLevel":20,"error":{}},"message":"bar","sequence":1,"time":1549300751181,"version":"1.0.0"}
```

instead of

```
// {"context":{"logLevel":20,"error":{}},"message":"bar","sequence":0,"time":1531918373676,"version":"1.0.0"}
// {"context":{"logLevel":20,"error":{"name":"Error","message":"foo","stack":"[REDACTED]"}},"message":"bar","sequence":1,"time":1531918373678,"version":"1.0.0"}
```
