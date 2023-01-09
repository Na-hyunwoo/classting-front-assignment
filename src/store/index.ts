import { atom } from "recoil";

export const settingState = atom({
  key: "settingState",
  default: {
    category: "",
    difficulty: "",
    question_type: "",
    number_of_question: 0,
  }
});