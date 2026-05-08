import { Link } from 'react-router-dom'
import { GraduationCap, Users, Award, Calendar, CheckCircle2, ArrowRight } from 'lucide-react'

const milestones = [
  { year: '1965', title: 'Основание школы', desc: 'Школа №16 открыла свои двери для первых учеников.' },
  { year: '1985', title: 'Первый выпуск медалистов', desc: 'Три золотых и пять серебряных медалей у выпускников.' },
  { year: '2005', title: 'Компьютерный класс', desc: 'Открытие первого компьютерного класса с 20 ПК.' },
  { year: '2015', title: 'Модернизация', desc: 'Капитальный ремонт и оснащение современным оборудованием.' },
  { year: '2023', title: 'Новый кабинет', desc: 'Открытие современного кабинета информатики с 30 ПК.' },
  { year: '2025', title: 'Цифровая школа', desc: 'Запуск онлайн-платформы для учеников и родителей.' },
]

const values = [
  { icon: '🎯', title: 'Качество образования', desc: 'Высокие стандарты преподавания и индивидуальный подход к каждому ученику.' },
  { icon: '🤝', title: 'Командная работа', desc: 'Сотрудничество учителей, учеников и родителей ради общего успеха.' },
  { icon: '💡', title: 'Инновации', desc: 'Применение современных технологий и методик обучения.' },
  { icon: '🌱', title: 'Развитие личности', desc: 'Воспитание всесторонне развитой и ответственной личности.' },
]

const leadership = [
  { name: 'Умида Нарзуллаева', role: 'Директор школы', experience: '20 лет', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop' },
  { name: 'Акбар Рустамов', role: 'Завуч по учебной части', experience: '15 лет', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
  { name: 'Гулнора Исмаилова', role: 'Завуч по воспитательной работе', experience: '12 лет', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-primary-800 to-primary-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">О школе №16</h1>
          <p className="text-primary-200 text-xl max-w-2xl mx-auto leading-relaxed">
            60 лет мы воспитываем будущих лидеров, учёных и творцов — с любовью и профессионализмом.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Наша миссия</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Средняя общеобразовательная школа №16 города Алмалык — одно из ведущих учебных заведений региона.
              Основанная в 1965 году, наша школа на протяжении десятилетий остаётся центром качественного образования
              и всестороннего развития личности.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Мы создаём благоприятную образовательную среду, где каждый ребёнок может раскрыть свои способности,
              получить прочные знания и подготовиться к успешной жизни в современном обществе.
            </p>
            <ul className="space-y-3">
              {[
                'Государственная аккредитация и лицензия на образовательную деятельность',
                'Высококвалифицированный педагогический коллектив',
                'Современная материально-техническая база',
                'Активная внеурочная и спортивная жизнь',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=450&fit=crop"
              alt="School"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-bold">60+</div>
              <div className="text-primary-200 text-sm">лет истории</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-10">
            <h2 className="section-title">Наши ценности</h2>
            <p className="section-subtitle">Принципы, которыми мы руководствуемся каждый день</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="card p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="text-center mb-10">
            <h2 className="section-title">История школы</h2>
            <p className="section-subtitle">Ключевые вехи нашего пути</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="card p-5 inline-block max-w-sm">
                      <div className="text-primary-600 font-bold text-lg mb-1">{m.year}</div>
                      <div className="font-semibold text-gray-900 mb-1">{m.title}</div>
                      <div className="text-sm text-gray-500">{m.desc}</div>
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 bg-primary-600 rounded-full items-center justify-center text-white font-bold text-sm shrink-0 z-10 shadow-lg">
                    {i + 1}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div>
          <div className="text-center mb-10">
            <h2 className="section-title">Руководство школы</h2>
            <p className="section-subtitle">Люди, которые ведут нас вперёд</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {leadership.map(l => (
              <div key={l.name} className="card p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                <img src={l.img} alt={l.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary-100" />
                <h3 className="font-bold text-gray-900">{l.name}</h3>
                <div className="text-primary-600 text-sm font-medium mt-1 mb-2">{l.role}</div>
                <div className="text-xs text-gray-400">Стаж: {l.experience}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-700 to-primary-500 rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Хотите узнать больше?</h2>
          <p className="text-primary-200 mb-8 text-lg">Посетите нас или свяжитесь с администрацией школы</p>
          <Link to="/contacts" className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-3 rounded-xl font-bold hover:bg-primary-50 transition-colors shadow-lg">
            Контакты <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
