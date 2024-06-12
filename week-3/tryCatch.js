function nameLength(name) {
  return name.length;
}

try {
  const ans = nameLength();
  console.log(ans);
} catch (err) {
  console.log("Please give a name ");
}
