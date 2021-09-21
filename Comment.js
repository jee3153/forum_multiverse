const Text = require('./Text')

class Comment extends Text {
    constructor(author, content, forumName) {
        super(author, content);
        this.forumName = forumName;
    }
}

module.exports = Comment;