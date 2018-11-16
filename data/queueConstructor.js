const Queue = require('./queue');
const { dogs, cats } = require('./data');

const dogQueue = new Queue();
const catQueue = new Queue();

dogs.forEach(dog => {
  dogQueue.enqueue(dog);
});
cats.forEach(cat => {
  catQueue.enqueue(cat);
});

module.exports = { dogQueue, catQueue };
