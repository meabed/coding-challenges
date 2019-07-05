/**
 * Returns the adidas three stripes logo using `@` characters.
 * @param {number} width - Width of a stripe.
 * @returns {string} adidas logo.
 */
module.exports = function(width) {
  if (width < 2) {
    throw new Error('Error, minimum width is 2');
  }

  const AT = '@';
  const SPACE = ' ';

  const RSQRT = Math.round(Math.sqrt(width));

  // 3 stripes spaces
  const SPACE_LINE_START = [ width * 2, width, 0 ];

  const SPACE_W = RSQRT;
  const STEPS = RSQRT;
  const TOTAL_LINES = RSQRT * 3;

  // output string in array
  const outArr = [];

  for (let i = 0; i < TOTAL_LINES; i++) {
    const STRIPES_IN_LINE = Math.ceil((i + 1) / STEPS);
    const PREFIX_SPACE = SPACE_LINE_START[STRIPES_IN_LINE - 1];

    // prefix spaces for each line plus the reminder of loop over step to reset to 0 each step
    let str = SPACE.repeat(PREFIX_SPACE + (i % STEPS));

    for (let j = 1; j <= STRIPES_IN_LINE; j++) {
      str += AT.repeat(width) + SPACE.repeat(SPACE_W);
    }

    outArr.push(str.trimRight());
  }

  return outArr.join('\n');
};
