const express = require('express');
const connectDb = require('./config/db');
var cors = require('cors');

const app = express();
connectDb();

app.use(express.json({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send('API running'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;
app.use(cors());
// workiing
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
