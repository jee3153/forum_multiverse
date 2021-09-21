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
        user.comments.list.push(cmm);
    }
}

test('Forum sets forumName properly', () => {
    const f = new Forum('Python Forum');

    expect(f.forumName).toBe('Python Forum');
});

test('forum creates post properly', () => {
    const f = new Forum('Python Forum');
    UserPostCreated(f, userComment3times);


    const expectedContent = 'content';
    const expectedTitle = 'title';

    expect(f.posts.list[0].content).toBe(expectedContent);
    expect(f.posts.list[0].title).toBe(expectedTitle);
    expect(f.posts.list[0].author.username).toBe('Adam');
});

test('forum creates user properly', () => {
    const f = new Forum('Python Forum');

    f.createUser('Chris');

    expect(f.users.list[0].username).toBe('Chris');
});

test('forum deletes post properly', () => {
    const f = new Forum('Python Forum');
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