import fastfy from 'fastify'

const app = fastfy();

// HTTP Method: GET, POST, PUT, PATCH, DELETE
// API RESTful

app.get('/hello', () => {
  return 'Hello World'
});

app.listen({
  port:3333,
}).then(() => {
  console.log('🙌 HTTP server running on http://localhost:3333')
});