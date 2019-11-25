    // FireBase Setting은 위에서 끝냈다고 가정
    var rootRef = firebase.database().ref();
    var postComments = rootRef.child('postComments');
    //var postComments = rootRef.child(slugify(window.location.pathname));
    var link = $("link[rel='canonical']").attr("href");
    var pathkey = decodeURI(link.replace(new RegExp('\\/|\\.', 'g'),"_"));
    var postRef = postComments.child(pathkey);
    $("#comment").submit(function() {
        postRef.push().set({
            name: $("#name").val(),
            message: $("#message").val(),
            md5Email: md5($("#email").val()),
            postedAt: firebase.database.ServerValue.TIMESTAMP
        });
        $("input[type=text], textarea").val("");
        return false;
    });    
  
    postRef.on("child_added", function(snapshot) {
        var newComment = snapshot.val();
        var converter = new showdown.Converter({ extensions: ['xssfilter'] });
        converter.setFlavor('github');
        var markedMessage = converter.makeHtml(newComment.message);
        var html = "<div class='comment'>";
        html += "<h4>" + newComment.name + "</h4>";
        html += "<div class='profile-image'><img src='https://www.gravatar.com/avatar/" + newComment.md5Email + "?s=100&d=retro'/></div>";
        html += "<span class='date'>" + jQuery.timeago(newComment.postedAt) + "</span>"
        html += "<p>" + markedMessage  + "</p></div>";
        $("#comments-container").prepend(html);
    });
