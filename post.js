var express = require('express')
var multer = require('multer')

var file = {}
file.upload = {}
file.upload.destination = 'uploads/'

var upload = multer({ dest: file.upload.destination })


//const express = require('express')
//const multer  = require('multer')
//const upload = multer({ dest: 'uploads/' })

//const app = express()

var application = express()

application.get('/', function(request, response) { 

	var page = 
	
	response.send('') 
})

app.post('/profile', upload.single('avatar'), function (req, res, next) {res.send('hello')})

//app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {res.send('hello2')})

//const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
//app.post('/cool-profile', cpUpload, function (req, res, next) {res.send('hello3')})

app.listen(3000)