import { Link } from 'react-router-dom'
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-base">Школа №16</div>
                <div className="text-gray-400 text-xs">г. Алмалык</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Средняя общеобразовательная школа №16 города Алмалык — место знаний, развития и дружбы.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['/', 'Главная'],
                ['/about', 'О школе'],
                ['/teachers', 'Преподаватели'],
                ['/schedule', 'Расписание'],
                ['/gallery', 'Галерея'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Деятельность</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['/subjects', 'Предметы'],
                ['/olympiads', 'Олимпиады'],
                ['/events', 'События'],
                ['/extra-education', 'Доп. образование'],
                ['/faq', 'Вопрос-Ответ'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>г. Алмалык, ул. Примерная, 16</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <span>+998 70 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <span>school16@almalyk.edu.uz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <span>© 2025 Школа №16, г. Алмалык. Все права защищены.</span>
          <span>Разработано с ❤️ для учеников и родителей</span>
        </div>
      </div>
    </footer>
  )
}
