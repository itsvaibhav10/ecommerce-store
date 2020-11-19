exports.isNotAuth = (req, res, next) => {
  if (req.session.isLoggedIn) {
    return res.redirect('/home');
  }
  next();
};

exports.isAuth = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect('/login');
  }
  next();
};
