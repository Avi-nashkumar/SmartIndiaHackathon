var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var userSchema = new Schema({
    name:  String, 
    userid: String,
    email: String,
    contact: String,
    address: String,
    nationality: String,
    batch: String,
    image: String
    
    
  });
 var userdetails = mongoose.model('UserSchema', userSchema);

 module.exports = router;
