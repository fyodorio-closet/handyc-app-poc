import { lazy } from 'solid-js';
import { Routes, Route, NavLink, useLocation } from 'solid-app-router';

import { isTwentyFourMode, setIsTwentyFourMode } from './utils/hourLabels';
import { isSundayFirst, setIsSundayFirst } from './utils/weekDays';

const About = lazy(() => import('./pages/about'));
const Today = lazy(() => import('./pages/index'));
const Week = lazy(() => import('./pages/week'));
const Month = lazy(() => import('./pages/month'));
const NotFound = lazy(() => import('./pages/404'));

export default function App() {
  const location = useLocation();

  const currentTimeMode = () => (isTwentyFourMode() ? '24H' : 'AM/PM');
  const currentDayMode = () => (isSundayFirst() ? 'US weekdays' : 'ISO 8601 weekdays');

  return (
    <>
      <div class="container py-3 h-100 d-flex flex-column">
        <header class="border-bottom pb-3 d-flex align-items-center justify-content-between">
          <span class="navbar-brand">
            <i class="bi bi-calendar3"></i>
          </span>

          <span>
            <i class="bi bi-caret-left"></i>
            <span class="mx-2">
              <Switch fallback={'Today'}>
                <Match when={location.pathname === '/'}>{'Today'}</Match>
                <Match when={location.pathname === '/week'}>{'Week'}</Match>
                <Match when={location.pathname === '/month'}>{'Month'}</Match>
                <Match when={location.pathname === '/about'}>{'About'}</Match>
                <Match when={location.pathname === '**'}>{'Error'}</Match>
              </Switch>
            </span>
            <i class="bi bi-caret-right"></i>
          </span>

          <nav class="d-flex align-items-center">
            <button class="btn btn-secondary me-3" onClick={() => setIsSundayFirst(!isSundayFirst())}>
              {currentDayMode()}
            </button>

            <button class="btn btn-secondary me-3" onClick={() => setIsTwentyFourMode(!isTwentyFourMode())}>
              {currentTimeMode()}
            </button>

            <ul class="list-unstyled d-flex m-0">
              <li>
                <NavLink href="/" end class="text-decoration-none text-dark">
                  Today
                </NavLink>
              </li>
              <li class="ms-3">
                <NavLink href="/week" end class="text-decoration-none text-dark">
                  This week
                </NavLink>
              </li>
              <li class="ms-3">
                <NavLink href="/month" end class="text-decoration-none text-dark">
                  Month
                </NavLink>
              </li>
              <li class="ms-3">
                <NavLink href="/about" class="text-decoration-none text-dark">
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main class="flex-fill overflow-auto pt-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Today />} />
            <Route path="/week" element={<Week />} />
            <Route path="/month" element={<Month />} />
            <Route path="**" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
