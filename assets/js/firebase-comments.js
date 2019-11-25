//Firebase Setting 필요
//Firebase Database 쪽에서 Security Rule 지정 필요
$(function(){
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
