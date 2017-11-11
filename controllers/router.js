// 4. Create the `router` 
// for the app, and export the 
//`router` at the end of your file.
var router = express()
//Routes?
//get a list of burgers
router.get("/burgers", function(req, res) {

    res.send({ type: "GET" });
});


//////////////////////////////////////////
//add a new burger to burgers_db
router.post("/burgers_db", function(req, res) {
    // Add new burger using SQL
    // INSERT burger INTO DATABASE TABLE
    orm.create("burgers", ["burger_name", "devoured", "occurance"], [req.body.burger_name, req.body.devoured, req.body.occurance],
        function(result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });


});



//add a new burger to burgers_db
router.post("/hotdog_db", function(req, res) {
    // Add new hotdog using SQL
    // INSERT hotdog INTO DATABASE TABLE
    //orm.create(hotdog);

    res.send({ type: "POST" });
});

/////////////////////////////////////////////




//update a new burger to burgers_db. the Id sets the id
router.put("/burgers_db/:id", fucntion(req, res) {
    res.send({ type: "PUT" });
});

//delete burger from burgers_db
router.delete("/burgers_db/:id", function(req, res) {
    res.send({ type: "Delete" });
});
module.exports = router;

// what about setting this==Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");