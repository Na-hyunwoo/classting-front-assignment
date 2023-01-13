import { createMemoryHistory } from "@remix-run/router";
import { fireEvent, getByRole, render, screen, waitFor, waitForElementToBeRemoved, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("로딩 후 화면이 표시됩니다.", async () => {
  render(<App />);

  expect(screen.getByRole("loading")).toBeInTheDocument();
  await waitForElementToBeRemoved(screen.queryByRole("loading"));  
  expect(screen.getByRole("title")).toBeInTheDocument();
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