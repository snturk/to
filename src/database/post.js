export var userPosts = [ ];

var config = {
  apiKey: "AIzaSyDAPg6x_ORpzkF9iReHFDrox1f1y0iKWrQ",
  authDomain: "to-posts.firebaseapp.com",
  databaseURL: "https://to-posts.firebaseio.com",
  projectId: "to-posts",
  storageBucket: "to-posts.appspot.com",
  messagingSenderId: "363111437610"
};
firebase.initializeApp(config);

var database = firebase.database();
export var ref = database.ref("user-posts");

ref.on("value", getData);

function getData(data) {
  var posts = data.val();
  var keys = Object.keys(posts);

  for(var i = 0; i < keys.length; i++) {
    var id = keys[i];
    var username = posts[id].username;
    var text = posts[id].text;
    var date = posts[id].date;
    userPosts.push({
      id: id,
      username: username,
      text: text,
      date: date
    });
  }
  userPosts.reverse();
}