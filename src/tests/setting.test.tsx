import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("로딩 후 화면이 표시됩니다.", async () => {
  render(<App />);

  expect(screen.getByRole("loading")).toBeInTheDocument();
  await waitForElementToBeRemoved(screen.queryByRole("loading"));  
  expect(screen.getByRole("title")).toBeInTheDocument();
});

test("select의 옵션을 선택하고, textfiled에 값을 입력할 수 있습니다.", async () => {
  render(<App />)
  
  expect(screen.getByRole("loading")).toBeInTheDocument();
  await waitForElementToBeRemoved(screen.queryByRole("loading"));  
  expect(screen.getByRole("title")).toBeInTheDocument();

  userEvent.click(screen.getByRole("Category"));
  userEvent.click(screen.getByText("Entertainment: Books"));

  userEvent.click(screen.getByRole("Difficulty"));
  userEvent.click(screen.getByText("Medium"));

  userEvent.click(screen.getByRole("Type"));
  userEvent.click(screen.getByText("True/False"));
});

test("퀴즈 풀기 버튼을 누르면 다음 페이지로 넘어갑니다.", async () => {
  render(<App />)
  
  expect(screen.getByRole("loading")).toBeInTheDocument();
  await waitForElementToBeRemoved(screen.queryByRole("loading"));
  expect(screen.getByRole("title")).toBeInTheDocument();

  userEvent.click(screen.getByRole("takeQuiz"));

  expect(screen.getByRole("loading")).toBeInTheDocument();
  await waitForElementToBeRemoved(screen.queryByRole("loading"));  
  expect(screen.getByRole("questionTitle")).toBeInTheDocument();
});