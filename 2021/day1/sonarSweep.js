function sonarSweep(numStr) {
  const nums = numStr.split("\n").map((str) => Number(str));

  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      counter++;
    }
  }
  return counter;
}

function part2(numStr) {
  const nums = numStr.split("\n").map((str) => Number(str));
  const threeMeasurementWindows = [];
  let counter = 0;

  for (let i = 0; i <= nums.length - 3; i++) {
    threeMeasurementWindows.push([nums[i], nums[i + 1], nums[i + 2]]);
  }

  const totals = threeMeasurementWindows.map((arr) =>
    arr.reduce((acc, curr) => acc + curr, 0)
  );

  for (let i = 0; i < totals.length; i++) {
    if (totals[i] > totals[i - 1]) {
      counter++;
    }
  }
  return counter;
}

module.exports = { sonarSweep, part2 };
