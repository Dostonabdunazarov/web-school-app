import { useState } from 'react'
import {
  Music, Palette, Cpu, FlaskConical, Trophy, BookOpen,
  Globe, Dumbbell, Camera, Theater, ChevronRight, Users, Clock, Star
} from 'lucide-react'

const categories = [
  { id: 'all', label: 'Все' },
  { id: 'sport', label: 'Спорт' },
  { id: 'art', label: 'Искусство' },
  { id: 'tech', label: 'Технологии' },
  { id: 'science', label: 'Наука' },
  { id: 'lang', label: 'Языки' },
]

const clubs = [
  {
    id: 1,
    name: 'Футбольная секция',
    category: 'sport',
    icon: Trophy,
    color: 'bg-green-100 text-green-600',
    age: '7–11 кл.',
    days: 'Вт, Чт',
    time: '15:00–16:30',
    teacher: 'Каримов А.Х.',
    students: 24,
    description: 'Обучение футбольной технике, тактике, участие в городских соревнованиях.',
    tags: ['Соревнования', 'Командная игра'],
  },
  {
    id: 2,
    name: 'Шахматный клуб',
    category: 'sport',
    icon: Star,
    color: 'bg-yellow-100 text-yellow-600',
    age: '4–9 кл.',
    days: 'Пн, Ср',
    time: '14:30–16:00',
    teacher: 'Назаров Б.Т.',
    students: 18,
    description: 'Развитие логики и стратегического мышления, подготовка к олимпиадам.',
    tags: ['Олимпиады', 'Логика'],
  },
  {
    id: 3,
    name: 'Вокальная студия',
    category: 'art',
    icon: Music,
    color: 'bg-pink-100 text-pink-600',
    age: '1–11 кл.',
    days: 'Пн, Пт',
    time: '15:00–16:30',
    teacher: 'Расулова М.И.',
    students: 20,
    description: 'Постановка голоса, сольное и хоровое пение, выступления на школьных мероприятиях.',
    tags: ['Концерты', 'Хор'],
  },
  {
    id: 4,
    name: 'Изостудия',
    category: 'art',
    icon: Palette,
    color: 'bg-orange-100 text-orange-600',
    age: '1–8 кл.',
    days: 'Вт, Пт',
    time: '14:00–15:30',
    teacher: 'Исмоилова З.А.',
    students: 16,
    description: 'Рисунок, живопись, декоративно-прикладное искусство и участие в выставках.',
    tags: ['Выставки', 'Живопись'],
  },
  {
    id: 5,
    name: 'Театральный кружок',
    category: 'art',
    icon: Theater,
    color: 'bg-purple-100 text-purple-600',
    age: '4–10 кл.',
    days: 'Ср, Сб',
    time: '15:00–17:00',
    teacher: 'Юсупов Д.Н.',
    students: 22,
    description: 'Сценическая речь, актёрское мастерство, постановка спектаклей.',
    tags: ['Спектакли', 'Творчество'],
  },
  {
    id: 6,
    name: 'Кружок фотографии',
    category: 'art',
    icon: Camera,
    color: 'bg-slate-100 text-slate-600',
    age: '6–11 кл.',
    days: 'Пт',
    time: '15:30–17:00',
    teacher: 'Холиков С.Р.',
    students: 14,
    description: 'Основы фотокомпозиции, работа с камерой, обработка снимков.',
    tags: ['Фотовыставки'],
  },
  {
    id: 7,
    name: 'Робототехника',
    category: 'tech',
    icon: Cpu,
    color: 'bg-blue-100 text-blue-600',
    age: '5–9 кл.',
    days: 'Вт, Пт',
    time: '15:00–16:30',
    teacher: 'Хасанов К.У.',
    students: 18,
    description: 'Сборка и программирование роботов, участие в региональных соревнованиях.',
    tags: ['LEGO', 'Arduino', 'Соревнования'],
  },
  {
    id: 8,
    name: 'Программирование',
    category: 'tech',
    icon: Cpu,
    color: 'bg-indigo-100 text-indigo-600',
    age: '7–11 кл.',
    days: 'Ср, Сб',
    time: '14:00–15:30',
    teacher: 'Мусаев Т.Б.',
    students: 20,
    description: 'Основы Python и веб-разработки, создание собственных проектов.',
    tags: ['Python', 'Web', 'Олимпиады'],
  },
  {
    id: 9,
    name: 'Юный химик',
    category: 'science',
    icon: FlaskConical,
    color: 'bg-teal-100 text-teal-600',
    age: '7–11 кл.',
    days: 'Чт',
    time: '14:30–16:00',
    teacher: 'Рахимова Г.Ш.',
    students: 16,
    description: 'Практические опыты, олимпиадная химия, исследовательские проекты.',
    tags: ['Опыты', 'Олимпиады'],
  },
  {
    id: 10,
    name: 'Экологический клуб',
    category: 'science',
    icon: Globe,
    color: 'bg-lime-100 text-lime-600',
    age: '5–9 кл.',
    days: 'Пн',
    time: '15:00–16:00',
    teacher: 'Абдуллаева Н.О.',
    students: 12,
    description: 'Изучение экологии, участие в акциях озеленения и природоохранных проектах.',
    tags: ['Природа', 'Проекты'],
  },
  {
    id: 11,
    name: 'Английский клуб',
    category: 'lang',
    icon: BookOpen,
    color: 'bg-cyan-100 text-cyan-600',
    age: '4–11 кл.',
    days: 'Вт, Пт',
    time: '16:00–17:00',
    teacher: 'Тошматов А.К.',
    students: 26,
    description: 'Разговорный английский, дебаты, просмотр фильмов и подготовка к экзаменам.',
    tags: ['Разговорный', 'Экзамены'],
  },
  {
    id: 12,
    name: 'ОФП (спортзал)',
    category: 'sport',
    icon: Dumbbell,
    color: 'bg-red-100 text-red-600',
    age: '5–11 кл.',
    days: 'Пн, Ср, Пт',
    time: '07:30–08:15',
    teacher: 'Эргашев Ш.М.',
    students: 30,
    description: 'Общая физическая подготовка, утренняя зарядка, укрепление здоровья.',
    tags: ['Здоровье', 'ОФП'],
  },
]

const stats = [
  { label: 'Кружков и секций', value: '12+' },
  { label: 'Учеников занимается', value: '230+' },
  { label: 'Педагогов-наставников', value: '12' },
  { label: 'Призовых мест в год', value: '25+' },
]

export default function ExtraEducation() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedId, setExpandedId] = useState(null)

  const filtered = activeCategory === 'all'
    ? clubs
    : clubs.filter(c => c.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Дополнительное образование
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Раскрой свой талант
          </h1>
          <p className="text-amber-100 text-lg max-w-2xl mx-auto">
            Кружки, секции и факультативы Школы №16 — развивайся, твори и достигай новых высот
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-amber-500">{s.value}</div>
              <div className="text-gray-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter */}
      <section className="max-w-6xl mx-auto px-4 pt-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-amber-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {filtered.map(club => {
            const Icon = club.icon
            const isOpen = expandedId === club.id
            return (
              <div key={club.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${club.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                      {club.age}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{club.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{club.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {club.tags.map(tag => (
                      <span key={tag} className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {isOpen && (
                    <div className="border-t border-gray-100 pt-4 mt-2 space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{club.days} · {club.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{club.students} учеников · {club.teacher}</span>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setExpandedId(isOpen ? null : club.id)}
                    className="mt-4 flex items-center gap-1 text-amber-600 text-sm font-medium hover:text-amber-700 transition-colors"
                  >
                    {isOpen ? 'Скрыть' : 'Подробнее'}
                    <ChevronRight className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-50 border-t border-amber-100 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Хочешь записаться?</h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          Обратись к классному руководителю или зайди в учебную часть — запись открыта в течение всего года.
        </p>
        <a
          href="/contacts"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Связаться со школой
          <ChevronRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  )
}
