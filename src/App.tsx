import React, { ReactElement } from 'react';
import { Box, Container } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Error, Question, Result, ReviewNote, Setting } from "./pages";
import Framework from './frameworks';
import { ErrorBoundary } from 'react-error-boundary';
import { RecoilRoot } from 'recoil';

const App = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<Error />}>
      <RecoilRoot>
        <Router>
          <Routes>
            <Route path="/" element={<Framework />}>
              <Route path="/" element={<Setting />} />
              <Route path="/question" element={<Question />} />
              <Route path="/result" element={<Result />} />
              <Route path="/reviewNote" element={<ReviewNote />} />
            </Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </ErrorBoundary>
  );
}

export default App;
