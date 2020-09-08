// Import packages
const fastify = require('fastify')()({ logger: true })


// Routes
fastify.get('/g', async (request, reply) => {
    reply.redirect('https://www.google.com/');
  })

// Listener
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()