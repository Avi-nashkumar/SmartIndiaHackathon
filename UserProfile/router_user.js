var express = require('express');
var userModel = require('../models/model_user')

var user = userModel.find({});
router.get('/userdetails', function(req,res){
	user.exec(function(err,data){
		if (err) throw err;
		res.render('userprofile',{title: 'user Details', records: data});


	})

	
} )