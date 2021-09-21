const Users = require('./Users');
const User = require('./User');
const Post = require('./Post')
const Posts = require('./Posts');
const Forum = require('./Forum');
const {v4} = require('uuid');
const Comments = require('./Comments');
const Comment = require('./Comment');

const UserPostCreated = (forum, fn) => {
    
    forum.createUser('Adam');
    const user = forum.users.list[0];
    fn(user, forum);  
    forum.createPost(user, 'content', 'title', forum.forumName);
}

const userComment3times = (user, forum) => {
    for (let i = 0; i < 3; i++) {
        const cmm = new Comment(user, 'comm', forum.forumName);
        forum.comments.list.push(cmm);
        
    }
}

test('Forum sets forumName properly', () => {
    const f = new Forum('Python Forum');

    expect(f.forumName).toBe('Python Forum');
});

// test('forum creates post properly', () => {
//     const f = new Forum('JS forum');
//     const forumN = f.forumName;
//     f.createUser('uzu');
//     f.createUser('admin');
//     const user = f.users.list[0];
//     const admin = f.users.list[1];
//     admin.giveAuthority();
//     f
//     post.addComment(user, 'c1');
//     post.addComment(user, 'c1');
//     post.addComment(user, 'c1');
//     f.posts.list.push(post);
//     f.createPost(user, 'post', 'sub');
//     const expectedContent = 'post';
//     const expectedTitle = 'sub';
//     const expectedUserName = 'uzu';
//     console.log(`user list ${f.users.posts[0]}`);

//     expect(f.posts.list[0].content).toBe(expectedContent);
//     expect(f.posts.list[0].title).toBe(expectedTitle);
//     expect(f.posts.list[0].author.username).toBe(expectedUserName);
// });

test('forum creates user properly', () => {
    const f = new Forum('C# Forum');

    f.createUser('Chris');

    expect(f.users.list[0].username).toBe('Chris');
});

test('forum deletes post properly', () => {
    const f = new Forum('C++ Forum');
    UserPostCreated(f, userComment3times);

    const post = f.posts.list[0];
    const user = f.users.list[0];

    f.deletePost(post, user);
    expect(f.posts.list).toHaveLength(0);
})

test('deletion & creation of post allowed if an user is admin', () => {
    const f = new Forum('Python Forum');

    f.createUser('Adam');
    const user = f.users.list[0];
    user.giveAuthority();
    
    f.createPost(user, 'content', 'title', f.forumName);
    const post = f.posts.list[0];
    f.deletePost(post, user);
    expect(f.posts.list).toHaveLength(0);
})

test('error thrown when a user without authorisation in attempt to post', () => {
    const f = new Forum('Python Forum');
    f.createUser('Adam');
    const adam = f.users.list[0];
    const expectedError = ('user does not exist, create account first.')
    expect(() => f.createPost(adam, 'content', 'title', f.forumName)).toThrow(expectedError);
})