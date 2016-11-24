console.log('setTimeout');

function getLogger(i) {
  return () => {console.log('st:'+ i)};
}

for(var i = 0; i < 10; i++) {
  setTimeout(getLogger(i), i * 1000);
}
