/* 
  1. 모든 데이터가 올바르게 랜더링 되는지 
  2. loading ui가 표시 되는지 ? 
  3. 데이터가 없다면, 데이터가 없다고 뜨는지 
  4. 버튼을 누르면 클릭된 버튼이 색칠되는지. 버튼을 클릭했을 때, next 버튼이 뜨는지. 
  5. next 버튼을 누르면 modal이 열리는지. 다음 문제로 넘어가는지. 
  6. modal에 올바르게 정답, 오답이 찍히는지 
*/

import { render, screen, waitFor, within } from "@testing-library/react";
import App from "../App";

test("관광지 목록을 표시합니다.", async () => {
});