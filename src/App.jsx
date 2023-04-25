import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routePath } from './constants/route';

// components
import Home from './Pages/Home';
import CategoryMovies from './Pages/CategoryMovies';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={routePath.home} element={<Home />} />
          <Route path={routePath.categories} element={<CategoryMovies />} />
          {/* <Route path={`${routePath.movies}/:type`} element={<Movies />} /> */}
          {/* <Route path={`${routePath.movie}/:id`} element={<Movie />} /> */}
          <Route path={routePath.invalid} element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;