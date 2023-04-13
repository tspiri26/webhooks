const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const randomAnnotation = Math.random().toString(36).substr(2, 6);
  const patches = [
    {
      op: 'add',
      path: '/metadata/annotations/random-annotation',
      value: randomAnnotation,
    },
  ];
  res.status(200).json({
    response: {
      patches,
      patchType: 'JSONPatch',
    },
  });
});

app.listen(8000, () => {
  console.log('Webhook server listening on port 8080');
});
