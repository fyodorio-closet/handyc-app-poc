import { lazy } from 'solid-js';
import { Routes, Route, NavLink } from 'solid-app-router';

const About = lazy(() => import('./pages/about'));
const Today = lazy(() => import('./pages/index'));
const Week = lazy(() => import('./pages/week'));
const Month = lazy(() => import('./pages/month'));
const NotFound = lazy(() => import('./pages/404'));

export default function App() {
  return (
    <>
      <div class="container py-3 h-100 d-flex flex-column">
        <header class="border-bottom pb-3 d-flex align-items-center justify-content-between">
          <span class="navbar-brand">
            <i class="bi bi-calendar3"></i>
            <span class="ms-2">Today</span>
          </span>

          <nav>
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
