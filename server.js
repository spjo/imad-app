var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'jonatansprick85',
    database: 'jonatansprick85',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
}
var app = express();
app.use(morgan('combined'));

var sites = {
    'site1' : {
        title: 'Site1 | Json',
        heading: 'Site1 B',
        date: '2017, Aug 24',
        content: `
            <p>
                This is content B
                fsfasf sf asf dsfas dfas fas dfasdf dsf sdfas fasdfasff
            </p>
            <p>
                sum mo code 
               slflaslfl�asklfjkljasljfljlsklfj�saklfkl�sdafkl�asklfjlkasjlkfjklsjdflsl�jklas
            </p>
            <p>bib
            </p>
            <p>
                Last content fo now B
            </p>
        `
    },
    'site2' : {        
        title: 'Site2 | Json',
        heading: 'Site2 B',
        date: '2017, Aug 24',
        content: `
            <p>
                This is content B
                fsfasf sf asf dsfas dfas fas dfasdf dsf sdfas fasdfasff
            </p>
            <p>
                sum mo code 
               slflaslfl�asklfjkljasljfljlsklfj�saklfkl�sdafkl�asklfjlkasjlkfjklsjdflsl�jklas
            </p>
            <p>bib
            </p>
            <p>
                Last content fo now B
            </p>
        `
    },
    'site3' : {
        title: 'Site3 | Json',
        heading: 'Site3 B',
        date: '2017, Aug 24',
        content: `
            <p>
                This is content B
                fsfasf sf asf dsfas dfas fas dfasdf dsf sdfas fasdfasff
            </p>
            <p>
                sum mo code 
               slflaslfl�asklfjkljasljfljlsklfj�saklfkl�sdafkl�asklfjlkasjlkfjklsjdflsl�jklas
            </p>
            <p>bib
            </p>
            <p>
                Last content fo now B
            </p>
        `
    }
};

function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate= `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-sclae=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h5>
                        ${heading}
                    </h5>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var Pool = new Pool(config);
app.get('/test-db', function(req, res) {
    pool.query('SELET * FROM test', function (err. result) {
        if(err){
            res.status(500).send(err.toString());
        }
        else {
            res.send(JSON.stringify(result));
        }
    })
});


var counter=0;
app.get('/counter', function (req, res) {
    counter++;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/bibbas', function(req, res){
   res.send('Bibba is you a B?'); 
});

var names = [];
app.get('/submit-name', function(req, res) {
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:sitename', function(req, res){
  var sitename = req.params.sitename;
  res.send(createTemplate(sites[sitename]));
});


//###
//app.get('/site2', function(req, res){
//  res.sendFile(path.join(__dirname, 'ui', 'site2.html'));
//});
//###

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
