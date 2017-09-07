const is = require('fs');

const png = is.readFileSync(`${__dirname}/../client/spongegar.png`);


const getPng = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(png);
  response.end();
};


module.exports.getPng = getPng;
