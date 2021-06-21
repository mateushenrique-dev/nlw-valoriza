import express from 'express';

const app = express();

app.get('/test', (request, response) => {
  return response.send('Olá NLW!')
})

app.post('/test', (request, response) => {
  return response.send('OLá NLW método post')
})

app.listen(3000, () => console.log('Server is Running.'))

