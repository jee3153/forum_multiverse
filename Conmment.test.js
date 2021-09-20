const Comment = require('./Comment');
const { v4 } = require('uuid');

test('comment created properly', () => {
    const date = new Date();
    const id = v4();
    const c = new Comment('Jennifer', 'content');
    c.date = date;
    c.id = id;

    const expectedc = {
        id,
        author: 'Jennifer',
        content: 'content',
        date,
    }

    expect(c.author).toBe('Jennifer');
    expect(c.content).toBe('content');
    expect(c).toEqual(expectedc);
});

test('comment edited correctly', () => {
    const c = new Comment('Jennifer', 'content');
    const commentToChage = 'edited comment'
    c.editContent(commentToChage);

    expect(c.content).toBe('edited comment');
});