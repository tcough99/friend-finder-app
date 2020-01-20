var friends = require("../data/friends.js");
module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  // API POST Requests
  app.post("/api/friends", function(req, res) {

  //object to hold best match
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };
//results form user post
    var userData = req.body;
    var userScores = userData.scores;
    var totalDifference;

    // Loop through friends
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;
      console.log(currentFriend.name);
      // Score loop
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        //Calculate the difference between the score and the differnece. 
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }
      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
    friends.push(userData);

    // Return a JSON with the user's bestMatch.
    res.json(bestMatch);
  });
};
