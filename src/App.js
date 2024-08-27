import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartupViewer from './pages/StartupPage/StartupViewer.js';
import CompanyDetailPage from './pages/CompanyDetailPage/CompanyDetailPage.js';
import Layout from './components/Layout/Layout.js';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartupViewer />} />
          <Route path="/company/:id" element={<CompanyDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;