function generate(): string {
  const w = [...Array(10)].map(i =>
    String.fromCharCode(97+(Math.random()*26))
  ).join('');
  return `${w.charAt(0).toUpperCase()}${w.slice(1)}`;
}

console.log(`${generate()} ${generate()} ${generate()}`);
