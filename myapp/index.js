var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

app.get('/testGet', function (req, res) {
	console.log("body:"+JSON.stringify(req.body));
  var result=new Object();
  result.code=1;
  result.msg="呵呵";
  result.time=new Date();
  result.postinfo=JSON.stringify(req.body);
  res.json(result);
});

app.post('/testPost', function (req, res) {
	console.log("body:"+JSON.stringify(req.body));
  var result=new Object();
  result.code=1;
  result.msg="呵呵";
  result.time=new Date();
  result.postinfo=JSON.stringify(req.body);
  res.json(result);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});