'use strict'

// Adapted from: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework

const http = require('http')
const fs = require('fs')
const path = require('path')

// Allow passing args (currently only supports `--port=`)
let envs = {}
process.argv.slice(2).forEach(arg => {
   const [key, value] = arg.split('=')
   envs[key] = value
})
const port = envs['--port'] || 8080

const server = http.createServer()

server.on('request', (request, response) => {
   let filePath = '.' + request.url
   if (filePath === './') {
      filePath = './index.html'
   }

   const extname = String(path.extname(filePath)).toLowerCase()
   const mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.wav': 'audio/wav',
      '.mp4': 'video/mp4',
      '.woff': 'application/font-woff',
      '.ttf': 'application/font-ttf',
      '.eot': 'application/vnd.ms-fontobject',
      '.otf': 'application/font-otf',
      '.wasm': 'application/wasm'
   }

   const contentType = mimeTypes[extname] || 'application/octet-stream'

   fs.readFile(filePath, function (error, content) {
      if (error) {
         if (error.code == 'ENOENT') {
            response.writeHead(404)
            response.end('404, not found', 'utf-8')
         } else {
            response.writeHead(500)
            response.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n')
         }
      } else {
         response.writeHead(200, { 'Content-Type': contentType })
         response.end(content, 'utf-8')
      }
   })

})

server.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`)
})
