import { add } from "./firebase_init";

jest.setTimeout(15000) 

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('adding doc to db', async () => {
    await add()
});