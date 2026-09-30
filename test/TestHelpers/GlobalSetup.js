// Run the tests west of UTC, where a date read as UTC but shown in local time comes out a day early
module.exports = () => {
  process.env.TZ = "America/New_York";
};
