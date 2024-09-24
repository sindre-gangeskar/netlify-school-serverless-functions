const { v4: uuidv4 } = require('uuid');
const guitars = require('../guitarData.js');
exports.handler = async (event) => {
  const { httpMethod, body } = event;
  if (httpMethod === 'GET') {
    return {
      statusCode: 200,
      body: JSON.stringify(guitars)
    }
  }

  if (httpMethod === 'POST') {
    const newGuitar = JSON.parse(body);
    newGuitar.id = uuidv4();
    guitars.push(newGuitar);

    return {
      statusCode: 201,
      body: JSON.stringify(newGuitar)
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method not allowed' })
  }
}