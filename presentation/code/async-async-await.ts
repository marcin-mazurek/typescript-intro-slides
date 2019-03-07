async function myFunction() {
  try {
    const response = await fetch('https://api.com/values/1');
    const body = await response.json();
    console.log(body);
  } catch (error) {
    console.error(error);
  }
}
