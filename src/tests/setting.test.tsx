import { createMemoryHistory } from "@remix-run/router";
import { getByRole, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("폼의 Category에 데이터를 넣지 않았을 때, 다음 페이지로 넘어갈 수 없습니다.", async () => {
  render(<App />);

  const categorySelect = screen.getByRole("Difficulty");
  const typeSelect = screen.getByRole("Type");
  const questionsSelect = screen.getByRole("Number of Questions");
  const nextButton = screen.getByRole("takeQuiz");
  const history = createMemoryHistory();

  userEvent.selectOptions(categorySelect, "Easy");
  userEvent.selectOptions(typeSelect, "Multiple Choice");
  userEvent.selectOptions(questionsSelect, "10");

  await userEvent.click(nextButton);
  expect(history.location.pathname).toBe("/");

});

test("폼의 Difficulty에 데이터를 넣지 않았을 때, 다음 페이지로 넘어갈 수 없습니다.", async () => {
  render(<App />);

  const categorySelect = screen.getByRole("Category");
  userEvent.selectOptions(categorySelect, "General Knowledge")

});

test("폼의 Type에 데이터를 넣지 않았을 때, 다음 페이지로 넘어갈 수 없습니다.", async () => {
  render(<App />);

  const categorySelect = screen.getByRole("Category");
  userEvent.selectOptions(categorySelect, "General Knowledge")

});

test("폼의 Number of Questions에 데이터를 넣지 않았을 때, 다음 페이지로 넘어갈 수 없습니다.", async () => {
  render(<App />);

  const categorySelect = screen.getByRole("Category");
  userEvent.selectOptions(categorySelect, "General Knowledge")

});

test("모든 데이터를 넣었을 때, 다음 페이지로 넘어갑니다.", async () => {
});