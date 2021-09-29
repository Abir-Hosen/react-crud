const middleware_file = () => (next) => (action) => {
  next(action);
  console.log(action)
}
export default middleware_file;