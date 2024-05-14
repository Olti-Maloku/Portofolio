const getPort = require('get-port');

async function startServer() {
  const port = await getPort({ port: 3000 }); // Specify a preferred port (fallbacks to random if unavailable)
  // Create your server and listen on the chosen port
  console.log(`Server listening on port ${port}`);
}

startServer(yarn)