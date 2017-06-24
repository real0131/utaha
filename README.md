# utaha.moe 4

made by Cho jae ho @ 2017


## start
 1. npm install
 2. make config.json file in config/

~~~
### config.json ###

{
  "production": {
    "username" : "root",
    "password" : "yourDB password",
    "database" : "yout database",
    "host" : "localhost",
    "dialect" : "mysql"
  }
}
~~~

## run
> cd bin

> sudo node www

## API
* work description

> Type : GET

> URL : works/data:id

> Params

> id : number (required)

> withnav : boolean (T/F) (NoN-required)

> ex) /works/data/1?withnav=true