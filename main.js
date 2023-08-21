let timeout;
function startTest() {
  const round = () => {
    const startTime = Date.now();
    timeout = setTimeout(() => {
      totalTime += 1000;
      let elapsedTime = Date.now() - startTime;
      console.log('Total Drift', elapsedTime - totalTime);
      round();
    }, 1000);
  };
  round();
}
startTest();
