import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  GraduationCap, Menu, X, ChevronDown,
  Users, CalendarDays, Star, Image, BookOpen,
  School, Trophy, Phone, UserCircle, HelpCircle,
  Layers, BookMarked, Home
} from 'lucide-react'

const menuItems = [
  { path: '/teachers', label: 'Преподаватели', icon: Users },
  { path: '/schedule', label: 'Расписание', icon: CalendarDays },
  { path: '/extra-education', label: 'Доп. образование', icon: Star },
  { path: '/events', label: 'Календарь событий', icon: CalendarDays },
  { path: '/gallery', label: 'Галерея', icon: Image },
  { path: '/subjects', label: 'Предметы', icon: BookOpen },
  { path: '/learning-process', label: 'Учебный процесс', icon: Layers },
  { path: '/about', label: 'О школе', icon: School },
  { path: '/olympiads', label: 'Олимпиады', icon: Trophy },
  { path: '/contacts', label: 'Контакты', icon: Phone },
  { path: '/cabinet', label: 'Личный кабинет', icon: UserCircle },
  { path: '/faq', label: 'Вопрос-Ответ', icon: HelpCircle },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
      {/* Top bar */}
      <div className="bg-primary-800 text-white text-xs py-1.5 px-4 hidden md:flex justify-between items-center">
        <span>Средняя общеобразовательная школа №16, г. Алмалык</span>
        <div className="flex items-center gap-4">
          <span>📞 +998 70 123-45-67</span>
          <span>✉️ school16@almalyk.edu.uz</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <div className="text-primary-800 font-bold text-base leading-tight">Школа №16</div>
            <div className="text-gray-500 text-xs">г. Алмалык</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink to="/" className={({ isActive }) =>
            `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
          }>
            <Home className="w-4 h-4" />
            Главная
          </NavLink>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
            >
              Меню
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50 animate-fade-in">
                {menuItems.map(({ path, label, icon: Icon }) => (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${isActive ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'}`
                    }
                  >
                    <Icon className="w-4 h-4 shrink-0 text-primary-500" />
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link to="/cabinet" className="hidden sm:flex btn-primary items-center gap-2 text-sm py-2 px-4">
            <UserCircle className="w-4 h-4" />
            Кабинет
          </Link>
          <button
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 grid grid-cols-1 gap-1">
            <NavLink to="/" className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}`
            }>
              <Home className="w-4 h-4 text-primary-500" />
              Главная
            </NavLink>
            {menuItems.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}`
                }
              >
                <Icon className="w-4 h-4 text-primary-500" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
