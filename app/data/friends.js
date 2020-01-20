//holds friends on platform data
var friends = [
    {
      name: "Thomas Coughlin",
      photo: "data:image/jpeg;base64,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",
      scores: [
        "4",
        "4",
        "4",
        "4",
        "4",
        "4",
        "4",
        "4",
        "4",
        "4"
      ]
    },
    {
      name: "Justin Beiber",
      photo: "https://media1.popsugar-assets.com/files/thumbor/NBsndw8VC2vIl0_VAZDAeuWTYY0/0x115:1964x2079/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/19/947/n/1922398/adfa915f5dd4621469eec8.45358982_/i/Justin-Bieber.jpghttps://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
      scores: [
        "4",
        "2",
        "5",
        "1",
        "3",
        "2",
        "2",
        "1",
        "3",
        "2"
      ]
    },
    {
      name: "Selena Gomez",
      photo: "https://nyppagesix.files.wordpress.com/2020/01/selena-gomez-3.jpg?quality=80&strip=all&w=618&h=410&crop=1",
      scores: [
        "5",
        "2",
        "2",
        "2",
        "4",
        "1",
        "3",
        "2",
        "5",
        "5"
      ]
    },
    {
      name: "LL Cool J",
      photo: "https://www.longislandpress.com/wp-content/uploads/2019/01/LLCOOLJ_211-1-1-e1547479599614.jpg",
      scores: [
        "3",
        "3",
        "4",
        "2",
        "2",
        "1",
        "3",
        "2",
        "2",
        "3"
      ]
    },
    {
      name: "Michael Jordan",
      photo: "https://usatftw.files.wordpress.com/2018/03/michael-jordan.jpg?w=1000&h=600&crop=1",
      scores: [
        "4",
        "3",
        "4",
        "1",
        "5",
        "2",
        "5",
        "3",
        "1",
        "4"
      ]
    },
    {
      name: "Lebron James",
      photo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Lebron_wizards_2017_%28cropped%29.jpg",
      scores: [
        "1",
        "1",
        "1",
        "1",
        "2",
        "2",
        "3",
        "2",
        "1",
        "1"
      ]
    }
  
  ];
  
  // Here we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  