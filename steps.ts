const stepSize = [1, 3, 5];
const number = 6;
let dp = [];
for (let i = 2; i <= number; i++) {
  dp[i] = 0;
}
dp[0] = 1;
for (let i = 1; i <= number; i++) {
  for (const [index, value] of stepSize.entries()) {
    if (value <= i) {
      dp[i] = dp[i] + dp[i - value];
    }
  }
}
