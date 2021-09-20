const User = require('./User');

const adam = new User('Adam');

test('User sets username as property', () => {
    expect(adam.username).toBe('Adam');
});

test('edit username correctly', () => {
    const nameToChange = 'Jose';
    adam.editUsername(nameToChange)
    expect(adam.username).toBe(nameToChange);
})