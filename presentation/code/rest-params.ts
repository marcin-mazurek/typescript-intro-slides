// full function syntax
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

// arrow function syntax
const buildName = (firstName: string, ...restOfName: string[]): string =>
  firstName + " " + restOfName.join(" ");

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
