var express = require('express');
var AWS = require('aws-sdk');
var router = express.Router();


// AWS.config = new AWS.Config();
// AWS.config.accessKeyId = "accessKey";
// AWS.config.secretAccessKey = "secretKey";
// AWS.config.region = "us-east-1";

router.get('/', function(req, res, next) {

    // var ec2 = new AWS.EC2(
    //   {
    //     region: 'us-west-2',
    //     accessKeyId: '',
    //     secretAccessKey: ''
    //   });

    // // Start the instance
    // ec2.startInstances({InstanceIds: [""]}, function(err , data ) {
    //     if (err ) console.log(err.stack); //an error occurred
    //     else console.log(data); //successful response
    //     context.done(err,data);
    // });

    res.render('tasks/list', { title: 'Express' });

  });

 module.exports = router;