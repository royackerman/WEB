import config from './config';
import apiRouter from './api';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path, { join } from 'path';
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});
const server = express();

//........................ read scss files from the 'sass' folder and generate the related css files to the 'public' folder .................//
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),    // The src dir to read the path:join(__dirname, 'sass'), files from
  dst: path.join(__dirname, 'public')   // The dest dir to write the generated css files to
}));
//..........................................................................................................................................//


server.set('view engine', 'ejs');

server.get('/no_need_that', (req, res) => {
  res.send("no need that because we have express - put a file inside public dir instead & express will render it for us :)!")
});


server.get('/', (req, res) => {
    res.render('index', {
    content_from_server: '<br /><br /><br /><br /><br />  i am a content from <b><u>THE SERVER</b></u>'
    });
});


server.use('/api', apiRouter);
server.use(express.static('public'));


//.........................HANDLE RECIPE UPLOADS........................//
server.post('/upload', upload.single('photo'), (req, res) => { 
  if(req.file) {
      res.json(req.file);
  }
  else throw 'error';
});
//......................................................................//









server.listen(config.port, () => {
    console.info('Express listening on port:', config.port);
});

 







