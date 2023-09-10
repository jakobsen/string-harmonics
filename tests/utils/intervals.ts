import { test } from "uvu";
import * as assert from "uvu/assert";

import { closestNote } from "../../src/utils";

test("Closest note at frequency with A=440", () => {
  // Frequencies sorted from https://pages.mtu.edu/~suits/notefreqs.html
  assert.is(closestNote(440), "A");
  assert.is(closestNote(880), "A");
  assert.is(closestNote(493.88), "B");
  assert.is(closestNote(46.25), "F#/Gb");
  assert.is(closestNote(155), "D#/E♭");
  assert.is(closestNote(1975), "B");
  assert.is(closestNote(2790), "F");
});

test.run();
