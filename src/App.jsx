import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Teachers from './pages/Teachers'
import Schedule from './pages/Schedule'
import ExtraEducation from './pages/ExtraEducation'
import EventsCalendar from './pages/EventsCalendar'
import Gallery from './pages/Gallery'
import Subjects from './pages/Subjects'
import LearningProcess from './pages/LearningProcess'
import About from './pages/About'
import Olympiads from './pages/Olympiads'
import Contacts from './pages/Contacts'
import PersonalCabinet from './pages/PersonalCabinet'
import FAQ from './pages/FAQ'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="extra-education" element={<ExtraEducation />} />
          <Route path="events" element={<EventsCalendar />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="learning-process" element={<LearningProcess />} />
          <Route path="about" element={<About />} />
          <Route path="olympiads" element={<Olympiads />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="cabinet" element={<PersonalCabinet />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
