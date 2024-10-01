const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

function esimeneTervitus(req, res) {
    res.end('Tere maailm');
}

app.get('/', esimeneTervitus)
app.get('/teinetervitus', (req, res) => {
    res.end(`
    <html>
        <body>
            <h1>Tere veelkord</h1>
        </body>
    </html>
    `)
})


app.listen(3000, () => console.log('Listening on port ' + PORT))