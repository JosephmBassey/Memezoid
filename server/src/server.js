const rateLimit = require('express-rate-limit'),
mongoose = require('mongoose'),
express = require('express'),
cors = require('cors'),
logger = require('morgan'),
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
// app.use('/api/v1/feed', require('./api/v1/routes/feedRoute'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cors())
app.use(logger('dev'));
app.use('/api/v1/user', require('./api/v1/routes/userRoute'));


/* ====================
====>   Start Server
================== */
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App started on port ${ port }...`);
});
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/memezoid'
mongoose.connect(DB_URL,
  { useNewUrlParser: true,useUnifiedTopology: true,     useCreateIndex: true,
  }, () => {
  console.log('Database Started...');
});