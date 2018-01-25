
var Obniz = require("./node_modules/obniz/index-for-node6.10.js");


exports.handler = function(event, context, callback) {
  var obniz = new Obniz("7657-9440");
  obniz.onconnect = function () {

    var servo = obniz.wired("ServoMotor", 0, 1, 2);
    servo.angle(90.0);

    obniz.display.clear();
    obniz.display.print("Hello World");

    obniz.wait(500).then(function(){
      servo.angle(0.0);
      obniz.close();
      var response = {
        statusCode: 200,
        body: "success"
      };
      callback(null, response);
    });

  };
};
