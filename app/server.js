var express    = require('express');
var bodyParser = require('body-parser');
var Annict     = require('annict').default;
var app        = express();
var annict     = new Annict();

app.use(bodyParser.json());

const ANNICT_CLIENT_ID     = process.env.ANNICT_CLIENT_ID;
const ANNICT_CLIENT_SECRET = process.env.ANNICT_CLIENT_SECRET;

app.post('/token', (req, res) => {
    const code = req.body.code;

    if(!code) {
        return res.sendStatus(401);
    }

    annict.OAuth.token(
        ANNICT_CLIENT_ID,
        ANNICT_CLIENT_SECRET,
        'authorization_code',
        'urn:ietf:wg:oauth:2.0:oob',
        code
    )
    .then(body => {
        return res.json({ access_token: body.access_token });
    })
    .catch(err => {
        return res.sendStatus(500);
    });
});


app.listen(process.env.PORT || 3000);
