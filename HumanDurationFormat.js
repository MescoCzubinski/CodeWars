function formatDuration(seconds) {
  let time = new Array(4);
  for (let i = 0; i < time.length; i++) {
    time[i] = seconds % 60;
    seconds = Math.round((seconds /= 60));
    time[i] + ", ";
    console.log(time[i]);
  }
}
let seconds = [1, 62, 120, 3600, 3662];
for (sec of seconds) {
  formatDuration(sec);
}
