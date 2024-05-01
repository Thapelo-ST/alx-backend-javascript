const express = require('express');

const routes = require('./routes');

const app = express();

app.use('/', routes);
app.use('/students', routes);
app.use('/students/:major', routes);

app.listen(1245, () => {
  console.log('Server running at localhost:1245');
});

export default app;
