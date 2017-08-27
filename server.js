var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
               slflaslflöasklfjkljasljfljlsklfjösaklfklösdafklöasklfjlkasjlkfjklsjdflslöjklas
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
               slflaslflöasklfjkljasljfljlsklfjösaklfklösdafklöasklfjlkasjlkfjklsjdflslöjklas
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
               slflaslflöasklfjkljasljfljlsklfjösaklfklösdafklöasklfjlkasjlkfjklsjdflslöjklas
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

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/bibbas', function(req, res){
   res.send('Bibba is you a B?'); 
});

app.get('/:sitename', function(req, res){
  var sitename = req.params.sitenames;
  res.send(createTemplate(sites[sitename]));
});

app.get('/site2', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'site2.html'));
});

app.get('/site3', function(req, res){
  res.sendFile(path.join(__dirname, 'ui', 'site3.html'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
