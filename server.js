const serverFactory = require('spa-server')
 
const server = serverFactory.create({
  path: './dist',
  port: process.env.PORT,
  fallback: '/index.html'
})
  
server.start()
