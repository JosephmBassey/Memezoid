const jwt = require('jsonwebtoken');
 async function userAuth (req, res, next)  {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    req.isRiderAuth = false;
    return res.status(401).json({ error: 'Access denied. \'authorization\' header required.' });
  }
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    req.isRiderAuth = false;
  return res.status(401).json({ error: 'access denied. invalid token supplied.' });
  }
  let decodedToken;
  try {
    decodedToken = await jwt.verify(token, 'someSuperSecretKey');
  } catch (error) {
    req.isRiderAuth = false;
    return res.status(401).json({ error: 'token expired or invalid token supplied.' });
  }
  if (!decodedToken) {
    req.isRiderAuth = false;
    return res.status(401).json({ error: 'access denied. invalid token supplied.' });
  }
  req.isRiderAuth = true;
  req.app.user = decodedToken.id;
  req.app.email = decodedToken.email;
  next();
};

module.exports = userAuth
