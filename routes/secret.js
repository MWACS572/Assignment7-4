/**
 * Created by Owner on 7/4/2017.
 */

var mongo = require('mongoskin');

var express = require("express");
var router = express.Router();

const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');



router.get('/', function(req, res, next) {
    let encyrpted = '';
    var db = mongo.db('mongodb://localhost:27017/homework7', {native_parser: true});
    db.collection('homework7').findOne({}, function (err, item) {
        encyrpted = item.message;
        db.close();
        let decrypted = decipher.update(encyrpted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        console.log(decrypted);
        res.send('The message is'+ decrypted);
    });

    //res.send('The message is');
});

module.exports = router;
