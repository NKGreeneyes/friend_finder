var mysql = require("mysql")

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
     var connection = mysql.createConnection({
        host: "localhost",
        port: 3001,
        user: "root",
        password: "root",
        database: "finder_db"
    });
}
connection.connect(function(err) {
if (err) {
  console.error("error connecting: " + err.stack);

}
});

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        connection.query ("SELECT * FROM profiles", function (err, response) {
            if (err) {
            console.log(err);
            
            }
            res.json(response)
        })
    
    })

    app.post("/api/friends", function(req, res){
        var friendsList;
        for (i = 0; i < friendsList.length; i++) { 
            text += friendsList[i] + "<br>";
          }
        connection.query ("SELECT * FROM profiles", function (err, response) {
            if (err) {
            console.log(err);
            
            }
           friendsList=response
        })
        var newFriend= req.body
        var bestMatch;
        var bestScore= 100;
