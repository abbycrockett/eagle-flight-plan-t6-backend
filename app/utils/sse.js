const clients = [];

function addClient(res) {
  const id = Date.now();
  const client = { id, res };
  clients.push(client);

  res.on("close", () => {
    removeClient(id);
  });

  return client;
}

function removeClient(id) {
  const index = clients.findIndex(c => c.id === id);
  if (index !== -1) {
    clients.splice(index, 1);
  }
}

function broadcast(data) {
  const message = `data: ${JSON.stringify(data)}\n\n`;
  clients.forEach(client => client.res.write(message));
}

module.exports = {
  addClient,
  broadcast,
};