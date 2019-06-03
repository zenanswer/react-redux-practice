// const logMiddleware = ({ getState, dispatch }) => next => (action) => {
const logMiddleware = () => next => (action) => {
  if (action instanceof Function) {
    console.log(`Action(Function): ${action}`);
  } else {
    console.log(`Action: ${action.type}`);
  }

  next(action);
};

export default logMiddleware;
