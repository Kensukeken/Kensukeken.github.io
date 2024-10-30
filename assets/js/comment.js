document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    var name = document.getElementById('name').value;
    var comment = document.getElementById('comment').value;

    // Create a new comment element
    var commentSection = document.getElementById('commentsSection');
    var newComment = document.createElement('div');
    newComment.innerHTML = '<p><strong>' + name + ':</strong> ' + comment + '</p>';
    commentSection.appendChild(newComment);

    // Clear the form
    document.getElementById('commentForm').reset();
});