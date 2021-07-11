console.log('Module.js');

async function start() {
   return await Promise.resolve( 'async working 123');
}

start().then(console.log)