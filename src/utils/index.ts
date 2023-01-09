export const DIFFICULTIES = [
  {id: "easy", name: "Easy"},
  {id: "medium", name: "Medium"},
  {id: "hard", name: "Hard"},
];

export const TYPES = [
  {id: "multiple", name: "Multiple Choice"},
  {id: "boolean", name: "True/False"},
]

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};