const http = require('http');
const os = require('os');

const port = 3001;

// Get network interfaces
const networkInterfaces = os.networkInterfaces();
let localIP = '127.0.0.1';

// Find the first non-internal IPv4 address
for (const interfaceName in networkInterfaces) {
  const interfaces = networkInterfaces[interfaceName];
  for (const iface of interfaces) {
    if (iface.family === 'IPv4' && !iface.internal) {
      localIP = iface.address;
      break;
    }
  }
  if (localIP !== '127.0.0.1') break;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <h1>Network Test Server</h1>
    <p>✅ Server is working!</p>
    <p><strong>Local IP:</strong> ${localIP}</p>
    <p><strong>Access from other devices:</strong> http://${localIP}:${port}</p>
    <style>body { font-family: Arial; padding: 20px; background: #f0f0f0; }</style>
  `);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Test server running on:`);
  console.log(`   Local:   http://localhost:${port}`);
  console.log(`   Network: http://${localIP}:${port}`);
  console.log(`\n📱 Access from other devices: http://${localIP}:${port}`);
}); 