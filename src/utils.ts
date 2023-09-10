export function gcd(a: number, b: number): number {
  if (b === 0) return a;
  return gcd(b, a % b);
}

export function centsBetweenFrequencies(
  frequencyA: number,
  frequencyB: number
): number {
  return 1200 * Math.log2(frequencyA / frequencyB);
}

export function closestNote(
  frequency: number,
  baseFrequency = 440
): { noteName: string; centsOffset: number } {
  const cents = centsBetweenFrequencies(frequency, baseFrequency);
  const steps = Math.round(cents / 100);
  const centsOffset = cents - 100 * steps;
  const noteName = noteAtStepsFromA(steps);
  return { noteName, centsOffset };
}

export function noteAtStepsFromA(steps: number): string {
  if (!Number.isInteger(steps)) {
    throw new Error(`Steps must be an integer, was ${steps}`);
  }

  const normalizedSteps = ((steps % 12) + 12) % 12; // Normalize steps to range [0, 11]

  const NOTE_AT_STEP: { [index: number]: string } = {
    0: "A",
    1: "A#/B♭",
    2: "B",
    3: "C",
    4: "C#/D♭",
    5: "D",
    6: "D#/E♭",
    7: "E",
    8: "F",
    9: "F#/Gb",
    10: "G",
    11: "G#/Ab",
  };

  const note = NOTE_AT_STEP[normalizedSteps];
  if (!note) {
    throw new Error(`No note mapping found for steps: ${normalizedSteps}`);
  }
  return note;
}
