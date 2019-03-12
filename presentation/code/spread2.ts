const baseConfig = {
  debug: true,
  local: false
};

const userConfig = {
  debug: false,
  baseUrl: 'http://google.com'
};

const finalConfig = { ...baseConfig, ...userConfig };

console.log(finalConfig); // { debug: false, local: false, baseUrl: "http://google.com" }