// Making a HTTP request
import fetch from 'node-fetch';

fetch('https://api.github.com/users/github')
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(error => console.error(error));

// filtering array elements
[1, 2, 3, 4, 5].filter(element => element > 2); // [3, 4, 5]

// checking number of elements in array
[0, 1, 2].length; // 3