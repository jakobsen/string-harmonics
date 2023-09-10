import { test } from "uvu";
import * as assert from "uvu/assert";

import { closestNote } from "../../src/utils";

test("Closest note at frequency with A=440", () => {
  // Frequencies sorted from https://pages.mtu.edu/~suits/notefreqs.html
  assert.equal(closestNote(440), { noteName: "A", centsOffset: 0 });
  assert.equal(closestNote(880), { noteName: "A", centsOffset: 0 });
  assert.equal(closestNote(493.88), {
    noteName: "B",
    centsOffset: -0.011572098294323041,
  });
  assert.equal(closestNote(46.25), {
    noteName: "F#/Gb",
    centsOffset: 0.02609638998274022,
  });
  assert.equal(closestNote(155), {
    noteName: "D#/E♭",
    centsOffset: -6.28236990050641,
  });
  assert.equal(closestNote(1975), {
    noteName: "B",
    centsOffset: -0.4673306873983165,
  });
  assert.equal(closestNote(2790), {
    noteName: "F",
    centsOffset: -2.372368169731544,
  });
});

test.run();
