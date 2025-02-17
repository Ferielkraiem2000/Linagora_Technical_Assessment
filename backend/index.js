const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());

app.get('/api', (req, res) => {
    res.json({ message: 'Fantasy API is running!' });
});
//test
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});