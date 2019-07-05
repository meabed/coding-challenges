/**
 * Returns the adidas three stripes logo using `@` characters.
 * @param {number} width - Width of a stripe.
 * @returns {string} adidas logo.
 */
module.exports = function (width) {
  if (width < 2) {
    throw new Error('Error, minimum width is 2');
  }

  const AT = '@';
  const SPACE = ' ';

  const RSQRT = Math.round(Math.sqrt(width));

  // 3 stripes spaces
  const SPACE_LINE_START = [width * 2, width, 0];

  // lines per stripes
  const STEPS = RSQRT;

  // spaces between stripes
  const SPACE_W = RSQRT;

  // total logo lines - 3 is for stripes
  const TOTAL_LINES = RSQRT * 3;

  // output string in array
  const outArr = [];

  for (let i = 0; i < TOTAL_LINES; i++) {
    const STRIPES_IN_LINE = Math.ceil((i + 1) / STEPS);

    // prefix spaces for each line plus the reminder of loop over step to reset to 0 each step
    const PREFIX_SPACE = SPACE_LINE_START[STRIPES_IN_LINE - 1] + (i % STEPS);

    let str = SPACE.repeat(PREFIX_SPACE);

    for (let j = 1; j <= STRIPES_IN_LINE; j++) {
      // @ plus spaces between stripes
      str += AT.repeat(width) + SPACE.repeat(SPACE_W);
    }

    // trim last spaces instead of doing this check in previous loop
    outArr.push(str.trimRight());
  }

  return outArr.join('\n');
};
