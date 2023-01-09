import React, { ReactElement } from "react";
import { Button, Typography } from '@mui/material';
import { SelectField, FormTextField } from "../components";
import { Box } from "@mui/system";
import { useAxios } from "../hooks";
import { Loading, Error} from "./";
import { DIFFICULTIES, TYPES } from "../utils";


const Setting = (): ReactElement => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  
  // TODO: event type 수정하기
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  if (loading) { return (<Loading />) }
  if (error) { return (<Error />) }

  return (
    <div>
      <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
      <form onSubmit={handleSubmit}>
        <SelectField options={response.trivia_categories} label="Category"/>
        <SelectField options={DIFFICULTIES} label="Difficulty"/>
        <SelectField options={TYPES} label="Type"/>
        <FormTextField />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            퀴즈 풀기
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Setting;