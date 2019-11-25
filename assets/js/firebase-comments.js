//     // FireBase Setting은 위에서 끝냈다고 가정
//     //var rootRef = firebase.database().ref();
//     //var postComments = rootRef.child('postComments');
//     //var link = $("link[rel='canonical']").attr("href");
//     //var pathkey = decodeURI(link.replace(new RegExp('\\/|\\.', 'g'),"_"));
//     //var postRef = postComments.child(pathkey);
//       var rootRef = firebase.database().ref();
//     var rootRef = new Firebase("https://speedetail-web.firebaseio.com/")
//     var postRef = rootRef.child(slugify(window.location.pathname));
//     $("#comment").submit(function() {
//         postRef.push().set({
//             name: $("#name").val(),
//             message: $("#message").val(),
//             md5Email: md5($("#email").val()),
//             postedAt: firebase.database.ServerValue.TIMESTAMP
//         });
//         $("input[type=text], textarea").val("");
//         return false;
//     });    
  
//     postRef.on("child_added", function(snapshot) {
// //         var newComment = snapshot.val();
//         var newPost = snapshot.val();
// //         var converter = new showdown.Converter({ extensions: ['xssfilter'] });
// //         converter.setFlavor('github');
// //         var markedMessage = converter.makeHtml(newComment.message);
// //         var markedMessage = converter.makeHtml(newPost.message);
// //         var html = "<div class='comment'>";
// //         html += "<h4>" + newComment.name + "</h4>";
// //         html += "<div class='profile-image'><img src='https://www.gravatar.com/avatar/" + newComment.md5Email + "?s=100&d=retro'/></div>";
// //         html += "<span class='date'>" + jQuery.timeago(newComment.postedAt) + "</span>"
// //         html += "<p>" + markedMessage  + "</p></div>";
// //         $(".comments").prepend(html);
//         $(".comments").prepend('<div class="comment">' +
//         '<h4>' + escapeHtml(newPost.name) + '</h4>' +
//         '<div class="profile-image"><img src="http://www.gravatar.com/avatar/' + escapeHtml(newPost.md5Email) + '?s=100&d=retro"/></div> ' +
//         '<span class="date">' + moment(newPost.postedAt).fromNow() + '</span><p>' + escapeHtml(newPost.message)  + '</p></div>');

//     });

// //     postRef.on("child_added", function(snapshot) {
// //       var newPost = snapshot.val();
// //       $(".comments").prepend('<div class="comment">' +
// //         '<h4>' + escapeHtml(newPost.name) + '</h4>' +
// //         '<div class="profile-image"><img src="http://www.gravatar.com/avatar/' + escapeHtml(newPost.md5Email) + '?s=100&d=retro"/></div> ' +
// //         '<span class="date">' + moment(newPost.postedAt).fromNow() + '</span><p>' + escapeHtml(newPost.message)  + '</p></div>');
// //     });

// function slugify(text) {
//   return text.toString().toLowerCase().trim()
//     .replace(/&/g, '-and-')
//     .replace(/[\s\W-]+/g, '-')
//     .replace(/[^a-zA-Z0-9-_]+/g,'');
// }


// function escapeHtml(str) {
//     var div = document.createElement('div');
//     div.appendChild(document.createTextNode(str));
//      return div.innerHTML;
//  }
// $(function(){
//   var ref=new Firebase("https://speedetail-web.firebaseio.com/"),
  var ref=firebase.database().ref(),
      postRef=ref.child(slugify(window.location.pathname));
  
  postRef.on("child_added",function(snapshot){
    var newPost=snapshot.val();
    var converter = new showdown.Converter({ extensions: ['xssfilter'] });
    converter.setFlavor('github');
    var markedMessage = converter.makeHtml(newPost.message);
    $(".comments").prepend('<div class="comment">'+"<h4>"+escapeHtml(newPost.name)+"</h4>"+'<div class="profile-image"><img src="http://www.gravatar.com/avatar/'+escapeHtml(newPost.md5Email)+'?s=100&d=retro"/></div> '+'<span class="date">'+moment(newPost.postedAt).fromNow()+"</span><p>"+markedMessage+"</p></div>")
  });
  
  $("#comment").submit(function(){
    var a=postRef.push();
    console.log(a);
    a.set({name:$("#name").val(),
           message:$("#message").val(),
           md5Email:md5($("#email").val()),
           postedAt:Firebase.ServerValue.TIMESTAMP
          });
    
    $("input[type=text], textarea").val("");
    return false
  })
});

function slugify(text){
  return text.toString().toLowerCase().trim().replace(/&/g,"-and-").replace(/[\s\W-]+/g,"-").replace(/[^a-zA-Z0-9-_]+/g,"")
}

function escapeHtml(str){
  var div=document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML
}
