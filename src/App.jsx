import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import TechnologyPage from './pages/TechnologyPage'
import AboutPage from './pages/AboutPage'
import ImpactPage from './pages/ImpactPage'
import ContactPage from './pages/ContactPage'
import RoadmapPage from './pages/RoadmapPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import AccessibilityPage from './pages/AccessibilityPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="roadmap" element={<RoadmapPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="accessibility" element={<AccessibilityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
