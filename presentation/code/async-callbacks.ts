// Making a HTTP request
import request from 'request';

request('http://www.google.com', function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});

// Serializing JSON
JSON.stringify({ can: { i: { have: { some: { json: 'please' } } } } });

// Deserializing JSON
JSON.parse('{ "some": { "json": "object" } }');