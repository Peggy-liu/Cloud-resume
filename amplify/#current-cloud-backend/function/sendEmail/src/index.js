var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });
exports.handler =  function (event, context, callback) {
  var obj  = JSON.parse(event.body)
  var params = {
    Destination: {
      ToAddresses: ['peggylau1994@gmail.com']
    },
    Message: {
      Body: {
        Text: { Data: "Contact: "+ obj.contact +"\n Message: "+ obj.message}
      },

      Subject: { Data: 'Message from Cloud Space By '+ obj.name }
    },
    Source: 'peggylau1994@gmail.com'
  }
  ses.sendEmail(params).promise();
  const response = {
    "statusCode": 204,
    "headers": {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    }
  }
  callback(null, response);
};


