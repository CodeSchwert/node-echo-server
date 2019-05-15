# Node Echo Server

Simple HTTP echo server that returns the request information.

## Getting started:

```shell
# install the server
git clone git@github.com:CodeSchwert/node-echo-server.git
cd node-echo-server
npm install

# start the server
npm start

# echo
curl localhost:6000
```

## Example

```shell
# request
curl http://localhost:6000/qux/skux?baz=unicorn

# request debug
# > GET /qux/skux?baz=unicorn HTTP/1.1
# > Host: foo.bar.com
# > User-Agent: insomnia/5.16.6
# > Content-Type: application/json
# > Accept: */*
# > Content-Length: 35
# | {
# | 	"foo": "bar",
# | 	"thing": "fing"
# | }

# response
{
	"headers": {
		"host": "foo.bar.com",
		"user-agent": "insomnia/5.16.6",
		"content-type": "application/json",
		"accept": "*/*",
		"content-length": "35"
	},
	"body": {
		"foo": "bar",
		"thing": "fing"
	},
	"cookies": {},
	"hostname": "foo.bar.com",
	"ip": "::1",
	"ips": [],
	"method": "GET",
	"params": {
		"0": "/qux/skux"
	},
	"path": "/qux/skux",
	"protocol": "http",
	"query": {
		"baz": "unicorn"
	}
}
```

Simples.

## Docker

Running the server via Docker.

```shell
# build the container
cd node-echo-server
docker build . -t echo-server

# star the container
docker run --rm -it -p 6000:6000 echo-server
```
