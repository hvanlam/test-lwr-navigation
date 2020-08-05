const { log } = require('console');
const { Server } = require('@webruntime/server');

// Create a LWR Server.
const server = new Server();

// Initialize and start the Server.
server.initialize().then(() => server.start());

// Print a message on Server shutdown.
server.on('shutdown', () => log('Server is shutdown'));
