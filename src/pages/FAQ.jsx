import { useState } from 'react'
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    category: 'Поступление',
    icon: '🎒',
    items: [
      { q: 'Как записать ребёнка в 1 класс?', a: 'Для записи в первый класс необходимо обратиться в учебную часть школы с паспортом родителя и свидетельством о рождении ребёнка. Запись открывается с 1 апреля текущего года. Также можно подать заявку онлайн через портал maktab.uz.' },
      { q: 'Какой возраст для поступления в 1 класс?', a: 'В первый класс принимаются дети, которым исполнилось 6 лет до 1 сентября текущего учебного года. Приём осуществляется по территориальному принципу.' },
      { q: 'Какие документы нужны для перевода из другой школы?', a: 'Для перевода необходимы: личное дело ученика, табель успеваемости за последний период, свидетельство о рождении, медицинская карта (форма 026-У) и заявление от родителей.' },
      { q: 'Есть ли подготовительные занятия для дошкольников?', a: 'Да, в нашей школе каждую субботу с сентября по апрель работают бесплатные подготовительные занятия для детей 5–6 лет. Запись осуществляется в учебной части.' },
    ],
  },
  {
    category: 'Учебный процесс',
    icon: '📚',
    items: [
      { q: 'Сколько уроков в день?', a: 'Количество уроков зависит от класса: для 1–4 классов — 4–5 уроков в день, для 5–9 классов — 5–6 уроков, для 10–11 классов — 6 уроков. Полное расписание доступно на странице «Расписание».' },
      { q: 'Как узнать оценки ребёнка?', a: 'Оценки можно узнать в электронном журнале через портал maktab.uz, в дневнике ученика, а также на родительских собраниях. Классный руководитель также информирует родителей по необходимости.' },
      { q: 'Как часто проводятся родительские собрания?', a: 'Общешкольные родительские собрания проводятся 2 раза в год (в сентябре и апреле). Классные родительские собрания — ежеквартально. По необходимости организуются внеплановые встречи.' },
      { q: 'Есть ли группы продлённого дня?', a: 'Да, для учеников 1–4 классов работает группа продлённого дня с 13:00 до 17:00. В группе дети выполняют домашние задания под руководством воспитателя и участвуют в развивающих занятиях.' },
    ],
  },
  {
    category: 'Питание и безопасность',
    icon: '🍽️',
    items: [
      { q: 'Есть ли столовая в школе?', a: 'Да, в школе работает собственная столовая. Горячее питание предоставляется для учеников 1–4 классов бесплатно (по государственной программе). Для остальных классов питание платное — 5000–8000 сум в день.' },
      { q: 'Как обеспечивается безопасность в школе?', a: 'Школа оснащена системой видеонаблюдения (32 камеры), электронной пропускной системой и охраной. На входе установлен металлодетектор. Ведётся контроль за посторонними лицами.' },
      { q: 'Что делать если ребёнок заболел?', a: 'Если ребёнок заболел, необходимо сообщить классному руководителю в первый день отсутствия. После выздоровления нужно предоставить справку от врача. Медицинский кабинет работает ежедневно с 8:00 до 16:00.' },
    ],
  },
  {
    category: 'Дополнительно',
    icon: '⭐',
    items: [
      { q: 'Как записаться в секцию или кружок?', a: 'Запись в секции и кружки проводится в начале учебного года. Полный список кружков можно узнать у классного руководителя или в учебной части. Большинство занятий бесплатны.' },
      { q: 'Как связаться с учителем?', a: 'Связаться с учителем можно через классного руководителя, электронный журнал (мессенджер), по телефону учебной части, а также лично — по расписанию приёма. Контакты есть на странице «Преподаватели».' },
      { q: 'Есть ли форма одежды?', a: 'Да, в нашей школе принята школьная форма: для мальчиков — тёмные брюки и белая рубашка, для девочек — тёмная юбка или брюки и белая блузка. В пятницу допускается национальная одежда.' },
      { q: 'Как оплачивается обучение?', a: 'Обучение в государственной школе №16 бесплатное. Некоторые дополнительные услуги (факультативы, кружки, специальные занятия) могут быть платными. Уточняйте у администрации.' },
    ],
  },
]

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-300 ${open ? 'border-primary-300 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}>
      <button
        className="w-full flex items-center justify-between p-4 text-left gap-3"
        onClick={() => setOpen(!open)}
      >
        <span className={`font-medium text-sm leading-snug ${open ? 'text-primary-700' : 'text-gray-800'}`}>
          {item.q}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-primary-500 shrink-0" />
          : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
        }
      </button>
      {open && (
        <div className="px-4 pb-4 pt-1 text-sm text-gray-600 leading-relaxed bg-primary-50/30 border-t border-primary-100">
          {item.a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [search, setSearch] = useState('')

  const filtered = faqs.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="section-title justify-center flex items-center gap-3">
          <span className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">❓</span>
          Вопрос — Ответ
        </h1>
        <p className="section-subtitle">Ответы на часто задаваемые вопросы</p>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Поиск по вопросам..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white shadow-sm"
        />
      </div>

      {/* Categories */}
      {filtered.length > 0 ? (
        <div className="space-y-8">
          {filtered.map(cat => (
            <div key={cat.category}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl font-bold text-gray-900">{cat.category}</h2>
                <span className="badge bg-gray-100 text-gray-500 text-xs ml-1">{cat.items.length}</span>
              </div>
              <div className="space-y-3">
                {cat.items.map((item, i) => (
                  <FAQItem key={i} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400">
          <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="text-lg font-medium">Ничего не найдено</p>
          <p className="text-sm mt-1">Попробуйте изменить запрос</p>
        </div>
      )}

      {/* Contact CTA */}
      <div className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100 text-center">
        <div className="text-3xl mb-3">💬</div>
        <h3 className="font-bold text-gray-900 mb-2">Не нашли ответ на вопрос?</h3>
        <p className="text-gray-500 text-sm mb-4">Свяжитесь с нами напрямую, и мы с удовольствием поможем.</p>
        <Link to="/contacts" className="btn-primary inline-block text-sm py-2.5">
          Написать нам →
        </Link>
      </div>
    </div>
  )
}
