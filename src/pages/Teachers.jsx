import { useState } from 'react'
import { Search, Mail, Phone, Award, BookOpen, Filter } from 'lucide-react'

const teachers = [
  {
    id: 1, name: 'Нилуфар Рашидова', subject: 'Математика', experience: '18 лет',
    category: 'Высшая категория', phone: '+998 90 123-45-67', email: 'rashidova@school16.uz',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&faces',
    awards: ['Лучший учитель 2023', 'Грамота Министерства'],
    dept: 'Точные науки',
  },
  {
    id: 2, name: 'Бобур Юсупов', subject: 'Физика', experience: '12 лет',
    category: 'Первая категория', phone: '+998 90 234-56-78', email: 'yusupov@school16.uz',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    awards: ['Наставник года 2022'],
    dept: 'Точные науки',
  },
  {
    id: 3, name: 'Зулфия Хасанова', subject: 'Узбекский язык и литература', experience: '22 года',
    category: 'Высшая категория', phone: '+998 90 345-67-89', email: 'hasanova@school16.uz',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    awards: ['Заслуженный учитель', 'Лучший урок'],
    dept: 'Гуманитарные науки',
  },
  {
    id: 4, name: 'Санжар Ахмедов', subject: 'История', experience: '9 лет',
    category: 'Первая категория', phone: '+998 90 456-78-90', email: 'ahmedov@school16.uz',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    awards: ['Грамота хокима'],
    dept: 'Гуманитарные науки',
  },
  {
    id: 5, name: 'Дилрабо Камилова', subject: 'Биология', experience: '15 лет',
    category: 'Высшая категория', phone: '+998 90 567-89-01', email: 'kamilova@school16.uz',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop',
    awards: ['Лучший учитель 2021', 'Олимпиадный наставник'],
    dept: 'Естественные науки',
  },
  {
    id: 6, name: 'Ойдин Мирзаева', subject: 'Химия', experience: '11 лет',
    category: 'Первая категория', phone: '+998 90 678-90-12', email: 'mirzaeva@school16.uz',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop',
    awards: ['Грамота Министерства'],
    dept: 'Естественные науки',
  },
  {
    id: 7, name: 'Фаррух Тошматов', subject: 'Информатика', experience: '8 лет',
    category: 'Вторая категория', phone: '+998 90 789-01-23', email: 'toshmatov@school16.uz',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop',
    awards: ['IT-наставник года'],
    dept: 'Точные науки',
  },
  {
    id: 8, name: 'Малика Усманова', subject: 'Английский язык', experience: '14 лет',
    category: 'Высшая категория', phone: '+998 90 890-12-34', email: 'usmanova@school16.uz',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop',
    awards: ['IELTS сертификат', 'British Council Award'],
    dept: 'Иностранные языки',
  },
  {
    id: 9, name: 'Жасур Каримов', subject: 'Физическая культура', experience: '10 лет',
    category: 'Первая категория', phone: '+998 90 901-23-45', email: 'karimov@school16.uz',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    awards: ['Заслуженный тренер'],
    dept: 'Физкультура',
  },
]

const depts = ['Все', 'Точные науки', 'Гуманитарные науки', 'Естественные науки', 'Иностранные языки', 'Физкультура']

const categoryColor = {
  'Высшая категория': 'bg-amber-100 text-amber-700',
  'Первая категория': 'bg-blue-100 text-blue-700',
  'Вторая категория': 'bg-gray-100 text-gray-600',
}

export default function Teachers() {
  const [search, setSearch] = useState('')
  const [dept, setDept] = useState('Все')

  const filtered = teachers.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.subject.toLowerCase().includes(search.toLowerCase())
    const matchDept = dept === 'Все' || t.dept === dept
    return matchSearch && matchDept
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="section-title flex items-center gap-3">
          <span className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-700">👩‍🏫</span>
          Преподавательский состав
        </h1>
        <p className="section-subtitle">Профессионалы, которые вдохновляют и учат</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Поиск по имени или предмету..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-gray-400 shrink-0" />
          {depts.map(d => (
            <button
              key={d}
              onClick={() => setDept(d)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${dept === d ? 'bg-primary-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'}`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(t => (
          <div key={t.id} className="card overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="relative">
              <img src={t.img} alt={t.name} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className={`badge ${categoryColor[t.category]}`}>
                  <Award className="w-3 h-3" />
                  {t.category}
                </span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-bold text-gray-900 text-lg mb-0.5">{t.name}</h3>
              <div className="flex items-center gap-1.5 text-primary-600 text-sm font-medium mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                {t.subject}
              </div>

              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                <span>Стаж: <b className="text-gray-700">{t.experience}</b></span>
                <span>Отдел: <b className="text-gray-700">{t.dept}</b></span>
              </div>

              {t.awards.length > 0 && (
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wide">Награды</div>
                  <div className="flex flex-wrap gap-1.5">
                    {t.awards.map(a => (
                      <span key={a} className="badge bg-yellow-50 text-yellow-700 text-xs">🏅 {a}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <a href={`mailto:${t.email}`} className="flex items-center gap-2 text-xs text-gray-500 hover:text-primary-600 transition-colors">
                  <Mail className="w-3.5 h-3.5" /> {t.email}
                </a>
                <a href={`tel:${t.phone}`} className="flex items-center gap-2 text-xs text-gray-500 hover:text-primary-600 transition-colors">
                  <Phone className="w-3.5 h-3.5" /> {t.phone}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-lg">Преподаватели не найдены</p>
        </div>
      )}
    </div>
  )
}
