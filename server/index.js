import express  from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public/src')));
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'html');

app.get('/',function(req,res){
    res.sendFile('index');
});

app.listen(process.env.port || port);