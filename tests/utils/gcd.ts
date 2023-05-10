import { test } from "uvu";
import * as assert from "uvu/assert";

import { gcd } from "../../src/utils";

test("gcd()", () => {
  assert.type(gcd, "function");
  assert.is(gcd(1, 2), 1);
  assert.is(gcd(2, 2), 2);
  assert.is(gcd(18, 27), 9);
  assert.is(gcd(100, 100), 100);
});

test.run();
