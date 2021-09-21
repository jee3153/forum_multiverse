const Text = require('./Text');
const User = require('./User');

class Comment extends Text {
    constructor(author, content, forumName) {
        super(author, content);
        this.forumName = forumName;
    }
}
// const user = new User('ji')
// const cmm = new Comment(user, '11content', 'forumname');
// console.log(cmm);
module.exports = Comment;