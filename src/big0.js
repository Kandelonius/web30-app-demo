
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log("In logAtMost10 " + i);
    }
}

function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log("In logAtLeast10 " + i);
    }
}

logAtMost10(15) // will still only print 10 times
logAtLeast10(5) // will also still print 10 times

function addUpToSlow(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
      total += 1;
    }
    return total;
  }

  function addUpToFast(n) {
    return n * (n + 1) / 2;
  }
  
  var t1 = Date.now();
//   var t1 = performance.now();
  addUpToSlow(1000000000);
  var t2 = Date.now();
//   var t2 = performance.now();
  console.log(`Time Elapsed slow: ${(t2 - t1) / 1000} seconds.`)

  var time1 = Date.now();
//   var time1 = performance.now();
  addUpToFast(1000000000);
  var time2 = Date.now();
//   var time2 = performance.now();
  console.log(`Time Elapsed fast: ${(time2 - time1) / 1000} seconds.`)
  