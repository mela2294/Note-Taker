const express = require('express');

const homeRoutes = require('./routes/homeroutes');
const apiRoutes = require('./roo=utes/apiRoutes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', homeRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));