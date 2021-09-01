console.log('hello world!');
const server = { name: 'hlamong', age: 22, type: 'job holder' };
// console.log(server);
const shop =
{
    Name: 'hlamong',
    electronic: ['computer', 'laptop', 'mobile'],
    age: 22,
    owener:
    {
        name: 'alia bhat',
        profession: 'actor'
    }
}
const shopStringified = JSON.stringify(shop);
// console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owener);
// console.log(shop);