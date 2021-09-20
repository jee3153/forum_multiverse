const Post = require('./Post');
const Posts = require('./Posts');
const User = require('./User');
const Users = require('./Users')

class Forum {

    constructor(name) {
        this.forumName = name;
        this.users = new Users();
        this.posts = new Posts();
    }

    createPost(user, content, title) {
        const id = user.id;
        // console.log(this.users)
        // const filtered = this.users.list.filter(u => u.id === id);
        // console.log(filtered);
        if (this.users.list.filter(u => u.id === id)) {
            // const filtered = this.users.list.filter(u => u.id !== id);
            this.posts.addPost(user, content, title);
        } else {
            throw new Error('user does not exist, create account first.');
        }
        
    }

    createUser(username) {
        this.users.addNewUser(username);
    }

    reaAllPosts() {
        this.posts.list.forEach(p => {
            console.log(p.title);
        })
    }

}

// const f = new Forum();
// const u = new User('Adam');
// const u2 = new User('Mia');
// f.createUser('Adam');
// console.log(f.users)
// const u = {
//     id: '322a7828-232a-4aaf-a3cc-b2b5e62aa3f2',
//     username: 'Adam'
//   }
// f.createPost(u);
// f.createPost(u, 'content', 'title')

// console.log(f.posts);
// f.reaAllPosts();

module.exports = Forum;