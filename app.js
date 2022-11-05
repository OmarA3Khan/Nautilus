var express    = require("express"),
	app 	   = express(),
	bodyParser = require("body-parser");


// ========= APP CONFIG ==========//
app.set("view engine", "ejs");
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));

// ============== FORM CONFIG =============== //



// ============== ROUTES ================== //
app.get("/", function(req,res){
	res.render("index");
});

app.get("/#about", function(req, res){
	res.render("/#about");
});

app.get("/services", function(req, res){
	res.render("services");
});

// app.get("/trial", function(req, res){
// 	res.render("trial");
// });

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server is running");
});