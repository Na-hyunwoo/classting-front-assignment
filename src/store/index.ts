import { atom } from "recoil";

export const settingState = atom({
  key: "settingState",
  default: {
    category: "9",
    difficulty: "easy",
    question_type: "multiple",
    number_of_question: "10",
  }
});