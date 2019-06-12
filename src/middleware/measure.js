
import { compose } from 'redux';

// “Redux middleware takes a different approach and gives us the next() function.
// Calling it with an action will cause it to propagate down the middleware chain,
// calling the root reducer and updating the state of the store.
// This allows us to add code before and after passing the action to the reducers”
// Excerpt From: Ilya Gelman and Boris Dinkevich. “The Complete Redux Book.” Apple Books.

const measureMiddleware = () => next => (action) => {
  console.time(action);
  next(action);
  console.timeEnd(action);
};


export default measureMiddleware;

// Demo for Middleware funcation chain

const midA = () => next => (action) => {
  console.log(`midA:${action}`);
  console.time(`midA:${action}`);
  next(action);
  console.timeEnd(`midA:${action}`);
};

const midB = () => next => (action) => {
  console.log(`midB:${action}`);
  console.time(`midB:${action}`);
  next(action);
  console.timeEnd(`midB:${action}`);
};

function handle(action) {
  console.log(`I'm handle func: ${action}`);
}

const test01 = () => {
  const handleEx = midA()(midB()(handle));

  handleEx('ACTION');
};

test01();

const test02 = () => {
  const handleEx = [handle, midB(), midA()].flat().reduce(
    (accumulator, currentValue) => currentValue(accumulator),
  );
  handleEx('ACTION 2');
};

test02();

const fn1 = x => x + 1;
const fn2 = x => x + 2;
const fn3 = x => x + 3;

const fnEx1 = (...args) => fn3(fn2(fn1(...args)));
const fnEx = compose(fn1, fn2, fn3);
console.log(fnEx1(1), fnEx(1));
