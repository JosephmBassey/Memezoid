const rateLimit = require('express-rate-limit'),
mongoose = require('mongoose'),
express = require('express'),
helmet = require('helmet'),
hsts = require('hsts');
const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

/* ====================
====>   Middleware
================== */
app.use(helmet());
app.use(limiter);
app.use(hsts({ maxAge: 15552000 }));

/* ====================
====>   Routes
================== */
app.use('/api/v1/feed', require('./routes/api/v1/feed'));
app.use('/api/v1/login', require('./routes/api/v1/login'));
app.use('/api/v1/signup', require('./routes/api/v1/signup'));
app.use('/api/v1/upload', require('./routes/api/v1/upload'));
app.use('/api/v1/profile', require('./routes/api/v1/profile'));

/* ====================
====>   Start Server
================== */
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App started on port ${ port }...`);
});
mongoose.connect('MONGO_ATLAS_URI_HERE',
  { useNewUrlParser: true }, () => {
  console.log('Database Started...');
});