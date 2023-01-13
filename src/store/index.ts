import { atom } from "recoil";

export const settingState = atom({
  key: "settingState",
  default: {
    category: "General Knowledge",
    difficulty: "Easy",
    question_type: "Multiple Choice",
    number_of_question: 10,
  }
});