const person = "This is a imported data";
const person2 = "Second imported data";

function myName() {
  const name = "Third imported data";
  return name;
}

function myNames() {
  const names = "Fourth imported data";
  return names;
}

export default person;
export { person2, myName, myNames };
