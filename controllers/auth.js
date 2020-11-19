// ---------------   Module Imports  ---------------
const User = require('../models/user');

exports.home = (req, res, next) => {
  try {
    res.render('index', { pageTitle: 'HomePage' });
  } catch (error) {
    const err = new Error(error);
    err.httpStatusCode = 500;
    return next(err);
  }
};

/* 
## User Registering Controller Functions
  #1.getRegister = send user to registration Page 
  #2.postRegister = Validate User Inputs and Save User to Database 
*/

exports.getRegister = (req, res, next) => {
  try {
    res.render('auth/register', { pageTitle: 'Register Here' });
  } catch (error) {
    const err = new Error(error);
    err.httpStatusCode = 500;
    return next(err);
  }
};

exports.postRegister = (req, res, next) => {
  try {
    res.render('index', { pageTitle: 'HomePage' });
  } catch (error) {
    const err = new Error(error);
    err.httpStatusCode = 500;
    return next(err);
  }
};

/* 
## User Login Controller Functions
  #1.getLogin = send user to Login Page 
  #2.postLogin = Authenticate User Inputs From Database and provide access
*/

exports.getLogin = (req, res, next) => {
  try {
    res.render('auth/login', { pageTitle: 'Login' });
  } catch (error) {
    const err = new Error(error);
    err.httpStatusCode = 500;
    return next(err);
  }
};

exports.postLogin = (req, res, next) => {
  try {
    res.render('index', { pageTitle: 'HomePage' });
  } catch (error) {
    const err = new Error(error);
    err.httpStatusCode = 500;
    return next(err);
  }
};

/* 
## Reset Password Controller Functions
  #1 getForgetPass => send user to Forgot Password Page to Provide Email for Validation
  #2 postForgetPass => Authenticate User Email From Database and email the link Change Password
  #3 getResetPass => check for the Token fom Database and send to reset password page
  #4 postResetPass => remove token and Reset the password for the User
*/

exports.getForgetPass = (req, res, next) => {
  try {
    res.render('auth/forgetPass', { pageTitle: 'Forget Password' });
  } catch (error) {
    const err = new Error(error);
    err.httpStatusCode = 500;
    return next(err);
  }
};

exports.postForgetPass = (req, res, next) => {
  try {
    res.render('index', { pageTitle: 'HomePage' });
  } catch (error) {
    const err = new Error(error);
    err.httpStatusCode = 500;
    return next(err);
  }
};

exports.getResetPass = (req, res, next) => {
  try {
    res.render('auth/resetPass', { pageTitle: 'Reset' });
  } catch (error) {
    const err = new Error(error);
    err.httpStatusCode = 500;
    return next(err);
  }
};

exports.postResetPass = (req, res, next) => {
  try {
    res.render('index', { pageTitle: 'HomePage' });
  } catch (error) {
    const err = new Error(error);
    err.httpStatusCode = 500;
    return next(err);
  }
};
