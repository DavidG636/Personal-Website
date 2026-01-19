export const countWords = (text: string) => {
  return (text.match(/\b\w+\b/g) || []).length;
};

export const countPunctuationMarks = (text: string) => {
  return (text.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) || []).length;
};

export const countSentences = (text: string) => {
  return (text.match(/[.!?]+/g) || []).length;
};

export const countPrepositions = (text: string) => {
  const prepositions = [
    "about",
    "above",
    "across",
    "after",
    "against",
    "along",
    "among",
    "around",
    "at",
    "before",
    "behind",
    "below",
    "beneath",
    "beside",
    "between",
    "beyond",
    "by",
    "despite",
    "down",
    "during",
    "except",
    "for",
    "from",
    "in",
    "inside",
    "into",
    "like",
    "near",
    "of",
    "off",
    "on",
    "onto",
    "out",
    "outside",
    "over",
    "past",
    "since",
    "through",
    "throughout",
    "to",
    "toward",
    "under",
    "underneath",
    "until",
    "up",
    "upon",
    "with",
    "within",
    "without",
  ];
  const regex = new RegExp(`\\b(${prepositions.join("|")})\\b`, "gi");
  return (text.match(regex) || []).length;
};
