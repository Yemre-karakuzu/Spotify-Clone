function secondsToTime(second) {
  return new Date(1000 * second)
  .toISOString()
  .substr(14,5)
}
export { secondsToTime };
