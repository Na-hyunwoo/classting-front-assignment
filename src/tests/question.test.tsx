import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("option중 하나를 선택하면 next버튼이 생기고 다음으로 넘어갈 수 있습니다.", async () => {
  render(<App />);

  await waitForElementToBeRemoved(screen.queryByRole("loading"));  
  userEvent.click(screen.getByRole("takeQuiz"));

  await waitForElementToBeRemoved(screen.queryByRole("loading"));  
  screen.getByRole("questionTitle");

  userEvent.click(screen.getAllByRole("button")[0]);
  userEvent.click(screen.getByText(`Next ->`));
});