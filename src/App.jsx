import { lazy } from 'solid-js';
import { Routes, Route, NavLink } from 'solid-app-router';

const About = lazy(() => import('./pages/about'));
const Home = lazy(() => import('./pages/index'));
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
                  Home
                </NavLink>
              </li>
              <li class="ms-2">
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
            <Route path="/" element={<Home />} />
            <Route path="**" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
