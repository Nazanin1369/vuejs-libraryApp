# Library Single page application

### Overview
This project contains of a library application with following features:
* Browse books
* Link to buy books
* Place hold on desired book(s)
* Contact information

### Tools and Libraries used
* [VueJS](https://vuejs.org/)
* [Gulp.js](http://gulpjs.com/)
* [Bootstrap](https://v4-alpha.getbootstrap.com/)
* JQuery
* [http-server](https://www.npmjs.com/package/http-server)
* Firebase as cloud database


### Steps to run the application
1- in root directory run the following command to install all dependencies
```
> npm install
```

2- Then run the gulp command to build the project:
```
> gulp build
```

3- Then start the Node server from the *build* directory:
```
> node server.js
```

4- Open the application on http://127.0.0.1:8080/