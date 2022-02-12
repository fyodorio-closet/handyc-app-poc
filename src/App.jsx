import { lazy } from 'solid-js';
import { Routes, Route, NavLink } from 'solid-app-router';

const About = lazy(() => import('./pages/about'));
const Home = lazy(() => import('./pages/index'));
const NotFound = lazy(() => import('./pages/404'));

export default function App() {
  return (
    <>
      <NavLink href="/" end>
        Home
      </NavLink>
      <NavLink href="/about">About</NavLink>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="**" element={<NotFound />} />
      </Routes>
    </>
  );
}
