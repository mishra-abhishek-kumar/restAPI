const express = require("express");
const app = express();

//importing dotenv to create environment variables
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

//importing body-parser to parse JSON data from a POST request
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
	console.log("Application running");
});

//accessing PORT from environment variables
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Listening on port 4000");
});
