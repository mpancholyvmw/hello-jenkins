var request = require('supertest');
var app = require('../app.js');

describe('GET /',function(){
	it('responded with hello world',function(done){
		request(app).get('/').expect('Hello PowerSchool Team',done);
	});
});


