const { WebsocketServer } = require('y-webrtc-signaling')

const port = process.env.PORT || 4444
const server = new WebsocketServer({ port })

console.log(`Signaling server running on port ${port}`)
