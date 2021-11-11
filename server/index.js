const { server } = require('../dist/server');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server started on PORT:${PORT}`);
});
