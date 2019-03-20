var friends = require("../data/friends.js");
module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // A POST routes /api/friends. This will be used to handle incoming survey results.
  //   This route will also be used to handle the compatibility logic.
  app.post("/api/friends", function(req, res) {
    var userData = req.body;
    var userScore = userData.scores;
    var totalDifference;

    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;
      for (var j = 0; j < currentFriend.scores.length; j++) {
        totalDifference += Math.abs(
          parseInt(userScore[j]) - parseInt(currentFriend.scores[j])
        );
      }
      res.end();
    }
  });
};
