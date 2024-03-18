import Navbar from 'components/Navbar'
import withTransition from 'components/Transition'
import Home from 'pages/Home'
import Recommended from 'pages/Recommended'
import SearchResult from 'pages/SearchResult'
import Trending from 'pages/Trending'
import { Routes, Route, useLocation } from 'react-router-dom'

export default function App() {
  const location = useLocation()
  return (
    <div>
      <Navbar />
      <main>
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route
            index
            element={withTransition(<Home />)}
          />
          <Route
            path='/recommended'
            element={<Recommended />}
          />
          <Route
            path='/trending'
            element={withTransition(<Trending />)}
          />
          <Route
            path='/search/q/:searchKey'
            element={<SearchResult />}
          />
        </Routes>
      </main>
    </div>
  )
}
