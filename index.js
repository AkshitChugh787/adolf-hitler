let hitlerQuotes = [
  "If you win, you need not have to explain...If you lose, you should not be there to explain!",
  "Do not compare yourself to others. If you do so, you are insulting yourself.",
  "if you want to shine like sun first you have to burn like it.",
  "And I can fight only for something that I love, love only what I respect, and respect only what I at least know.",
  "Anyone can deal with victory. Only the mighty can bear defeat.",
  "Think Thousand times before taking a decision But - After taking decison never turn back even if you get Thousand difficulties!!",
  "When diplomacy ends, War begins.",
  "The man who has no sense of history, is like a man who has no ears or eyes",
  "The leader of genius must have the ability to make different opponents appear as if they belonged to one category.",
  "I use emotion for the many and reserve reason for the few.",
  "To conquer a nation, first disarm its citizens.",
  "The victor will never be asked if he told the truth.",
];

function hitler() {
  let num = Math.floor(Math.random() * hitlerQuotes.length);
  console.log(hitlerQuotes[num]);
}

module.exports = hitler;
