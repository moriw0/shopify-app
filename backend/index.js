const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cron = require('node-cron');

cron.schedule('* * * * * *', () => console.log('毎秒実行'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})
