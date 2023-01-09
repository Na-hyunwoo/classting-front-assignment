import React, { ReactElement } from "react";
import { Button, Typography } from "@mui/material";
import { decode } from "html-entities";
import { Box } from "@mui/system";

// TODO: type 변경하기 
interface Props {
  questionIndex: number;
  question: string;
  options: Array<string>;
  onClickAnswer: (e: any) => void;
}

const QuestionItem = ({
  questionIndex, 
  question, 
  options, 
  onClickAnswer
}: Props): ReactElement => {
  return (
    <>
      <Typography variant="h4">Questions {questionIndex + 1}</Typography>
      <Typography mt={5}>{decode(question)}</Typography>
      {/* TODO: type 변경하기 */}
      {options.map((option: string) => (
        <Box mt={2} key={option}>
          <Button 
            onClick={onClickAnswer} 
            variant="contained"
          >{decode(option)}</Button>
        </Box>
      ))}
    </>
  );
};

export default QuestionItem;