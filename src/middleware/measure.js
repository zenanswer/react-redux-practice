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

const midA = ({ pA, pB }) => next => (action) => {
  console.log(`midA:${pA}, ${pB}`);
  console.time(`midA:${pA}, ${pB}`);
  next(action);
  console.timeEnd(`midA:${pA}, ${pB}`);
};

const midB = ({ pA, pB }) => next => (action) => {
  console.log(`midB:${pA}, ${pB}`);
  console.time(`midB:${pA}, ${pB}`);
  next(action);
  console.timeEnd(`midB:${pA}, ${pB}`);
};

function handle(action) {
  console.log(`I'm handle func: ${action}`);
}

const test01 = () => {
  const midA2 = midA({ pA: 'Mid-1', pB: 'Mid-2' });
  const midB2 = midB({ pA: 'Mid-1', pB: 'Mid-2' });

  const handleEx = midA2(midB2(handle));

  handleEx('ACTION');
};

test01();

const test02 = () => {
  const mids = [midA, midB].map(mid => mid({ pA: 'Mid=1', pB: 'Mid=2' }));
  const handleEx = mids.concat(handle).flat().reduceRight(
    (accumulator, currentValue) => currentValue(accumulator),
  );
  handleEx('ACTION 2');
};

test02();
