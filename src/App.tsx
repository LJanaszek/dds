import React, { Suspense } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getGamePageRoute, getHomeRoute, getPolicyRoute, getRulesPageRoute } from './routes';
import { Loader } from './molecules/loader/loader';
import GameRouter from './routes/game/router';


const HomePage = React.lazy(() => import('./routes/home'));
const GamePage = React.lazy(() => import('./routes/game'));
const RulesPage = React.lazy(() => import('./routes/rules'));
const PolicyPage = React.lazy(() => import('./routes/policy'));

function App() {
  return (
   <>
   <BrowserRouter>
                {/* <CookiesInfoComponent /> */}
                <main aria-live="polite">
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path={getHomeRoute()} element={<HomePage />} />
                            <Route path={getRulesPageRoute()} element={<RulesPage />} />
                            <Route path={getPolicyRoute()} element={<PolicyPage />} />
                            <Route element={<HomePage />} />
                            {GameRouter()}
                        </Routes>
                    </Suspense>
                    {/* <PageFooter/> */}
                </main>
            </BrowserRouter>
   </>
  );
}

export default App;
