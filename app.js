require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require("cors");

var app = express();

var db = require("./app/models");

// Sync the database
db.sequelize.sync({ alter: true }).then(() => {
  console.log("Database synchronized.");
}).catch(err => {
  console.error("Error synchronizing the database:", err);
});


const cor = cors({
  origin: function (origin, callback) {
    callback(null, true);
  },
  credentials: true,
});
app.use(cor);
app.options("*", cor);

// var corsOptions = {
//   origin: "http://localhost:8081/2024/project3/t6/",
//   credentials: true,
// };

// app.use(cors(corsOptions));
// app.options("*", cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/resumeRoutes/auth.routes")(app);
require("./app/routes/resumeRoutes/role.routes")(app);
require("./app/routes/resumeRoutes/userRole.routes")(app);
require("./app/routes/resumeRoutes/user.routes")(app);
require("./app/routes/resumeRoutes/userResumeReview.routes")(app);
require("./app/routes/resumeRoutes/student.routes")(app);
require("./app/routes/resumeRoutes/link.routes")(app);
require("./app/routes/resumeRoutes/education.routes")(app);
require("./app/routes/resumeRoutes/course.routes")(app);
require("./app/routes/resumeRoutes/experience.routes")(app);
require("./app/routes/resumeRoutes/project.routes")(app);
require("./app/routes/resumeRoutes/skill.routes")(app);
require("./app/routes/resumeRoutes/certification.routes")(app);
require("./app/routes/resumeRoutes/interest.routes")(app);

require("./app/routes/resumeRoutes/resumeReview.routes")(app);
require("./app/routes/resumeRoutes/resume.routes")(app);
require("./app/routes/resumeRoutes/resumeLink.routes")(app);
require("./app/routes/resumeRoutes/resumeEducation.routes")(app);
require("./app/routes/resumeRoutes/resumeCourse.routes")(app);
require("./app/routes/resumeRoutes/resumeExperience.routes")(app);
require("./app/routes/resumeRoutes/resumeProject.routes")(app);
require("./app/routes/resumeRoutes/resumeSkill.routes")(app);
require("./app/routes/resumeRoutes/resumeCertification.routes")(app);
require("./app/routes/resumeRoutes/resumeInterest.routes")(app);
require("./app/routes/resumeRoutes/adminRole.routes")(app);
require("./app/routes/resumeRoutes/reviewerRole.routes")(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

const PORT = process.env.PORT || 3026;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});