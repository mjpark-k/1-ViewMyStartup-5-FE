import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartupViewer from './pages/StartupPage/StartupViewer.js';
import CompanyDetailPage from './pages/CompanyDetailPage/CompanyDetailPage.js';
import Layout from './components/Layout/Layout.js';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.js';
import CompareCompany from './pages/CompareCompany/CompareCompany.js'
import ComparisonViewer from './pages/ComparisonPage/ComparisonViewer.js'
import InvestViewer from './pages/InvestPage/InvestViewer.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartupViewer />} />
          <Route path="/company/:id" element={<CompanyDetailPage />} />
          <Route path="/myCompany" element={<CompareCompany />}/>
          <Route path="/compare" element={<ComparisonViewer />}/>
          <Route path="/investment" element={<InvestViewer />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;