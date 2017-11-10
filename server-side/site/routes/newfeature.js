var _ = require('underscore');

var redis = require('redis');
var array = fs.readFileSync('/home/ubuntu/redisclient').toString().split("\n");
var client = redis.createClient(6379, array[0], {});
console.log("redis client ip: " + array[0]);

exports.betafeature = function(req, res) {
    console.log('In beta feature');
    client.get("featureflag", function(err, val) {
        if(val === "true") {
            res.send({message: "Beta feature up and running!"});                
        } else {
            res.send({message: "This feature is not available in your region yet!"});
        }
    })
};
