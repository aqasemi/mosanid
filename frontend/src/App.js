import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import FAQ from './scenes/faq';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import COURSES from './scenes/Courses';
import PracticeSessionQuestion from './scenes/practice-question';
import SessionComplete from './scenes/session-complete';
import Feedback from './scenes/QFeedback';
import OngoingCompetitions from './scenes/Ongoing-Competitions';
import WaitingCompetition from './scenes/Waiting-Competition';
import CompQ from './scenes/Comp-Q';
import RankList from './scenes/Rank-List';
import CalculatingResults from './scenes/Calculating-Results';
import Leaderboard from './scenes/Leader-board';
import StudentHomePage from './scenes/Student-HomePage';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();

  const shouldHideSidebarAndTopbar =
    location.pathname === '/practice-question' ||
    location.pathname === '/session-complete' ||
    location.pathname === '/QFeedback' ||
    location.pathname === '/Waiting-Competition'||
    location.pathname === '/Comp-Q'||
    location.pathname === '/Rank-List'||
    location.pathname === '/Calculating-Results'||
    location.pathname === '/Leader-board';

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!shouldHideSidebarAndTopbar && <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {!shouldHideSidebarAndTopbar && <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/courses" element={<COURSES />} />
              <Route path="/practice-question" element={<PracticeSessionQuestion />} />
              <Route path="/session-complete" element={<SessionComplete />} />
              <Route path="/QFeedback" element={<Feedback />} />
              <Route path="/Ongoing-Competitions" element={<OngoingCompetitions />} />
              <Route path="/Waiting-Competition" element={<WaitingCompetition />} />
              <Route path="/Comp-Q" element={<CompQ />} />
              <Route path="/Rank-List" element={<RankList />} />
              <Route path="/Calculating-Results" element={<CalculatingResults />} />
              <Route path="/Leader-board" element={<Leaderboard />} />
              <Route path="/Student-HomePage" element={<StudentHomePage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;