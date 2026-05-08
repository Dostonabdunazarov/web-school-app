import { Link } from 'react-router-dom'
import {
  Users, BookOpen, Trophy, Star, ArrowRight, Calendar,
  ChevronRight, GraduationCap, Newspaper, Clock, MapPin
} from 'lucide-react'

const stats = [
  { icon: Users, value: '850+', label: 'Учеников', color: 'bg-blue-50 text-blue-600' },
  { icon: GraduationCap, value: '60+', label: 'Преподавателей', color: 'bg-emerald-50 text-emerald-600' },
  { icon: BookOpen, value: '25+', label: 'Предметов', color: 'bg-violet-50 text-violet-600' },
  { icon: Trophy, value: '120+', label: 'Наград', color: 'bg-amber-50 text-amber-600' },
]

const news = [
  {
    id: 1,
    tag: 'Олимпиады',
    tagColor: 'bg-amber-100 text-amber-700',
    date: '5 мая 2025',
    title: 'Наши ученики заняли призовые места на городской олимпиаде по математике',
    excerpt: 'Поздравляем Алишера Каримова и Малику Юсупову с победой на городской математической олимпиаде! Ребята заняли I и II места соответственно.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    tag: 'Мероприятия',
    tagColor: 'bg-blue-100 text-blue-700',
    date: '28 апреля 2025',
    title: 'День открытых дверей: приглашаем будущих первоклассников',
    excerpt: 'Школа №16 приглашает родителей и детей на День открытых дверей. Вы познакомитесь с педагогическим коллективом и увидите учебные классы.',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    tag: 'Спорт',
    tagColor: 'bg-green-100 text-green-700',
    date: '20 апреля 2025',
    title: 'Школьная команда по волейболу вышла в финал районных соревнований',
    excerpt: 'Юные спортсмены нашей школы достойно выступили в районном турнире по волейболу и вышли в финальный этап соревнований.',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=250&fit=crop',
  },
  {
    id: 4,
    tag: 'Наука',
    tagColor: 'bg-purple-100 text-purple-700',
    date: '15 апреля 2025',
    title: 'Открылся новый кабинет информатики с современным оборудованием',
    excerpt: 'В нашей школе торжественно открылся обновлённый кабинет информатики, оснащённый 30 современными компьютерами и интерактивной доской.',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
  },
]

const upcomingEvents = [
  { date: '12 мая', title: 'Конкурс чтецов «Слово о Родине»', icon: '🎤' },
  { date: '15 мая', title: 'Районная олимпиада по физике', icon: '⚗️' },
  { date: '20 мая', title: 'Последний звонок для выпускников', icon: '🔔' },
  { date: '25 мая', title: 'Школьный спортивный праздник', icon: '🏅' },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=900&fit=crop"
            alt="School"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/75 to-transparent" />
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-10 right-40 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              Лучшая школа г. Алмалык
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Средняя школа
              <span className="block text-accent-400">№16</span>
              г. Алмалык
            </h1>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Мы создаём среду, где каждый ученик может раскрыть свой потенциал,
              получить качественное образование и найти свой путь в жизни.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="flex items-center gap-2 bg-white text-primary-800 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
                О школе
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contacts" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all">
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50 text-xs">
          <span>Прокрутите вниз</span>
          <div className="w-0.5 h-8 bg-white/30 rounded animate-bounce" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="card p-6 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News + Sidebar */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* News feed */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="section-title flex items-center gap-2">
                  <Newspaper className="w-7 h-7 text-primary-600" />
                  Лента новостей
                </h2>
                <p className="section-subtitle">Последние события школьной жизни</p>
              </div>
            </div>

            <div className="space-y-6">
              {news.map((item) => (
                <article key={item.id} className="card overflow-hidden flex flex-col sm:flex-row group cursor-pointer">
                  <div className="sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`badge ${item.tagColor}`}>{item.tag}</span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />{item.date}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 leading-snug mb-2 group-hover:text-primary-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                    <button className="self-start text-primary-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Читать далее <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming events */}
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-600" />
                Ближайшие события
              </h3>
              <ul className="space-y-3">
                {upcomingEvents.map((ev) => (
                  <li key={ev.title} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="text-xl shrink-0">{ev.icon}</div>
                    <div>
                      <div className="text-xs text-primary-600 font-semibold mb-0.5">{ev.date}</div>
                      <div className="text-sm text-gray-700 font-medium">{ev.title}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/events" className="mt-4 btn-outline w-full text-center text-sm py-2 block">
                Все события
              </Link>
            </div>

            {/* Quick links */}
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Быстрые ссылки</h3>
              <div className="space-y-2">
                {[
                  { to: '/schedule', label: '📅 Расписание уроков' },
                  { to: '/teachers', label: '👩‍🏫 Преподаватели' },
                  { to: '/subjects', label: '📚 Предметы' },
                  { to: '/olympiads', label: '🏆 Олимпиады' },
                  { to: '/gallery', label: '🖼️ Галерея' },
                  { to: '/faq', label: '❓ Вопрос-ответ' },
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors font-medium group"
                  >
                    {label}
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Address card */}
            <div className="bg-primary-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-300" />
                Адрес школы
              </h3>
              <p className="text-primary-100 text-sm leading-relaxed mb-4">
                г. Алмалык, ул. Примерная, 16<br />
                Пн–Сб: 8:00 – 17:00
              </p>
              <Link to="/contacts" className="bg-white text-primary-700 text-sm font-semibold px-4 py-2 rounded-xl inline-block hover:bg-primary-50 transition-colors">
                Как добраться →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Motto banner */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-4xl mb-4">🎓</div>
          <h2 className="text-3xl font-bold mb-4">«Знание — сила, образование — путь к успеху»</h2>
          <p className="text-primary-200 text-lg mb-8">
            Школа №16 — это место, где рождаются мечты и строятся будущее.
          </p>
          <Link to="/about" className="bg-white text-primary-800 px-8 py-3 rounded-xl font-bold hover:bg-primary-50 transition-colors shadow-lg inline-block">
            Узнать больше о школе
          </Link>
        </div>
      </section>
    </div>
  )
}
