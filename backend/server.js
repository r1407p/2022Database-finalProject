const express = require("express");

const path = __dirname + '/app/views/'
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");
db.sequelize.sync();
 // drop the table if it already exists
//db.sequelize.sync({ force: true }).then(() => {
//  console.log("Drop and re-sync db.");
//});

// simple route
app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require("./app/routes/br_videoinfo.routes")(app);
require("./app/routes/br_videotrending.routes")(app);
require("./app/routes/ca_videoinfo.routes")(app);
require("./app/routes/ca_videotrending.routes")(app);
require("./app/routes/de_videoinfo.routes")(app);
require("./app/routes/de_videotrending.routes")(app);
require("./app/routes/fr_videoinfo.routes")(app);
require("./app/routes/fr_videotrending.routes")(app);
require("./app/routes/gb_videoinfo.routes")(app);
require("./app/routes/gb_videotrending.routes")(app);
require("./app/routes/in_videoinfo.routes")(app);
require("./app/routes/in_videotrending.routes")(app);
require("./app/routes/jp_videoinfo.routes")(app);
require("./app/routes/jp_videotrending.routes")(app);
require("./app/routes/kr_videoinfo.routes")(app);
require("./app/routes/kr_videotrending.routes")(app);
require("./app/routes/mx_videoinfo.routes")(app);
require("./app/routes/mx_videotrending.routes")(app);
require("./app/routes/ru_videoinfo.routes")(app);
require("./app/routes/ru_videotrending.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});