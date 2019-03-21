module.exports = function(app) {
	var userData = require('../controller/userDataController');

 // userDataList Routes
 app.route('/signup')
 .post(userData.userSignup);

 app.route('/createUser')
 .post(userData.createUser);

 app.route('/getAllUsers')
 .get(userData.getAllUsers);

 app.route('/getUser/:emailId')
 .get(userData.getUser);

 app.route('/updateUser')
 .put(userData.updateUser);

 app.route('/deleteUser/:userId')
 .delete(userData.deleteUser);

 app.route('/signin')
 .post(userData.userSignin);
 
};