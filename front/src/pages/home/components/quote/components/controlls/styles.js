function numberToColorRgb(percentage) {
  var red = Math.floor(255 - (255 * percentage) / 100);
  var green = Math.floor((255 * percentage) / 100);
  return "rgb(" + red + "," + green + ",0)";
}

export const percentageStyle = (percentage) => ({
  color: numberToColorRgb(percentage),
});

export const arrowStyle = (givenVote, voteType) => ({
  color: givenVote === voteType ? "white" : "grey",
  cursor: "pointer",
});
