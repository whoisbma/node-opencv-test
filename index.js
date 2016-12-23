var express 	= require('express')
	,	http		= require('http')
	,	async		= require('async')
	,	multer	= require('multer')
	,	upload	= multer({ dest: 'uploads/' })
	,	exphbs	= require('express-handlebars')
	,	easyimg	= require('easyimage')
	,	-			= require('lodash')
	,	cv			= require('opencv');

//MIME types for images uploads
var exts {
	'image/jpeg'	: 	'.jpg',
	'image/png'		: 	'.png',
	'image/gif'		: 	'.gif'
};

var port = 8080;
var app = express();
app.use(express.static(__dirname + '/public'))

//config handlebars
app.engine('.hbs'm, exphbs({extname: '.hbs', defaultLayout: 'default' }));
app.set('view engine', '.hbs');

//app code goes here:


http.createServer(app)
	.listen(port, function(server) {
		console.log('Listening on port %d', port);
	});

//GET route:
app.get('/', function(req, res, next) {
	return res.render('index');
});

//POST callback for the file upload form
app.post('/upload', upload.single('file'), function(req, res, next) {

});