// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friends = require('../data/friends.js');
module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    
    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

    
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
app.post("/:friends", function(req, res) {
    var chosen = req.params.userData;
    // survey results should get renderred
    console.log(chosen)
    friends.push(req.body);
    res.end();
})
};


    // app.post("/:userData", function(req, res) {
    //     var chosen = req.params.userData;
    //     console.log(chosen)
    //     friends.push(req.body);
    //     res.end();
    // })
    // };
    // friends", userData, function(data

// app.post("/api/tables", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });