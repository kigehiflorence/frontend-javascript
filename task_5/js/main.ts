// Define interfaces

interface MajorCredits {
  credits: number;
  __brand: 'major'; // unique branding property
}

interface MinorCredits {
  credits: number;
  __brand: 'minor'; // unique branding property
}

// Functions to sum credits

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'major',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'minor',
  };
}

// Example Usage:

const major1: MajorCredits = { credits: 3, __brand: 'major' };
const major2: MajorCredits = { credits: 5, __brand: 'major' };

const minor1: MinorCredits = { credits: 2, __brand: 'minor' };
const minor2: MinorCredits = { credits: 4, __brand: 'minor' };

console.log(sumMajorCredits(major1, major2)); // { credits: 8, __brand: 'major' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 6, __brand: 'minor' }
