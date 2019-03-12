console.log('message');
console.warn('warning!');
console.error('error!');
console.info('info!');
console.table(tabularData);
// console.* methods accept unlimited number of parameters
console.log('message 1', 'message 2', someObject, true);

debugger; // stops code executing when launched with `--inspect` in Node.js or when DevTools are open (in web browser)

browser.debug(); // in WebDriverIO
