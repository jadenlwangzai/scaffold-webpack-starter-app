require('./index.css');

if (process.env.NODE_ENV !== 'production') {
  const vConsole = new VConsole();
  console.log(vConsole);
}
