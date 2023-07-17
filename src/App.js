import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import { FavoritesContextProvider } from "./store/favorites-context";

function App() {
  return (
    <>
      <FavoritesContextProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" exact={true} element={<AllMeetupsPage />} />
              <Route path="/new-meetup" element={<NewMeetupPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </Layout>
        </Router>
      </FavoritesContextProvider>
    </>
  );
}

export default App;
