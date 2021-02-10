const reqEvent = (event) => require(`../events/${event}`);//codebase 
module.exports = client => {
  client.on('message', reqEvent('message'));
};
