const Users = require('./Users');
const User = require('./User');
const Post = require('./Post')
const Posts = require('./Posts');
const Forum = require('./Forum');
const {v4} = require('uuid');
const Comments = require('./Comments');


test('Forum sets forumName properly', () => {
    const f = new Forum('Python Forum');

    expect(f.forumName).toBe('Python Forum');
});

test('forum creates post properly', () => {
    const f = new Forum('Python Forum');
    const user = new User('Adam');

    f.createPost(user, 'content', 'title');


    const expectedContent = 'content';
    const expectedTitle = 'title';

    expect(f.posts.list[0].content).toBe(expectedContent);
    expect(f.posts.list[0].title).toBe(expectedTitle);
    expect(f.posts.list[0].author.username).toBe('Adam');
});

test('forum creates user properly', () => {
    const f = new Forum('Python Forum');
    const id = v4();

    f.createUser('Chris');

    expect(f.users.list[0].username).toBe('Chris');
});
