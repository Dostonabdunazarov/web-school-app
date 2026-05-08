import { BookOpen, Clock, Users, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const subjectGroups = [
  {
    category: 'Точные науки',
    icon: '🔢',
    color: 'bg-blue-50 border-blue-200',
    headerColor: 'bg-blue-600',
    subjects: [
      { name: 'Математика', teacher: 'Нилуфар Рашидова', hours: '5 ч/нед', grades: '1–11', desc: 'Алгебра, геометрия, анализ, теория вероятностей и математическая статистика.' },
      { name: 'Физика', teacher: 'Бобур Юсупов', hours: '3 ч/нед', grades: '7–11', desc: 'Механика, термодинамика, электродинамика, квантовая физика.' },
      { name: 'Информатика', teacher: 'Фаррух Тошматов', hours: '2 ч/нед', grades: '5–11', desc: 'Программирование, алгоритмы, информационные технологии, веб-разработка.' },
    ],
  },
  {
    category: 'Естественные науки',
    icon: '🔬',
    color: 'bg-green-50 border-green-200',
    headerColor: 'bg-green-600',
    subjects: [
      { name: 'Химия', teacher: 'Ойдин Мирзаева', hours: '3 ч/нед', grades: '7–11', desc: 'Органическая и неорганическая химия, лабораторные работы, химические реакции.' },
      { name: 'Биология', teacher: 'Дилрабо Камилова', hours: '2 ч/нед', grades: '5–11', desc: 'Анатомия, экология, генетика, эволюция, ботаника и зоология.' },
      { name: 'Экология', teacher: 'Дилрабо Камилова', hours: '1 ч/нед', grades: '9–11', desc: 'Охрана окружающей среды, экологические проблемы и пути их решения.' },
    ],
  },
  {
    category: 'Гуманитарные науки',
    icon: '📖',
    color: 'bg-orange-50 border-orange-200',
    headerColor: 'bg-orange-600',
    subjects: [
      { name: 'Узбекский язык', teacher: 'Зулфия Хасанова', hours: '4 ч/нед', grades: '1–11', desc: 'Грамматика, орфография, развитие речи, сочинения, диктанты.' },
      { name: 'Литература', teacher: 'Зулфия Хасанова', hours: '3 ч/нед', grades: '5–11', desc: 'Классическая и современная узбекская и мировая литература.' },
      { name: 'Русский язык', teacher: 'Зулфия Хасанова', hours: '3 ч/нед', grades: '1–11', desc: 'Фонетика, морфология, синтаксис, стилистика и развитие речи.' },
      { name: 'История', teacher: 'Санжар Ахмедов', hours: '2 ч/нед', grades: '5–11', desc: 'История Узбекистана, история Древнего мира, Средних веков и Новейшего времени.' },
      { name: 'Обществознание', teacher: 'Санжар Ахмедов', hours: '1 ч/нед', grades: '7–11', desc: 'Право, экономика, социология, политология и основы государства.' },
      { name: 'География', teacher: 'Санжар Ахмедов', hours: '2 ч/нед', grades: '5–11', desc: 'Физическая и социально-экономическая география, картография.' },
    ],
  },
  {
    category: 'Иностранные языки',
    icon: '🌍',
    color: 'bg-cyan-50 border-cyan-200',
    headerColor: 'bg-cyan-600',
    subjects: [
      { name: 'Английский язык', teacher: 'Малика Усманова', hours: '3 ч/нед', grades: '1–11', desc: 'Грамматика, разговорная речь, чтение, подготовка к IELTS и международным экзаменам.' },
    ],
  },
  {
    category: 'Физкультура и искусство',
    icon: '⚽',
    color: 'bg-lime-50 border-lime-200',
    headerColor: 'bg-lime-600',
    subjects: [
      { name: 'Физическая культура', teacher: 'Жасур Каримов', hours: '3 ч/нед', grades: '1–11', desc: 'Спортивные игры, лёгкая атлетика, гимнастика, здоровый образ жизни.' },
      { name: 'Музыка', teacher: 'Преподаватель', hours: '1 ч/нед', grades: '1–7', desc: 'Музыкальная грамота, хоровое пение, история музыки и узбекская народная музыка.' },
      { name: 'Изобразительное искусство', teacher: 'Преподаватель', hours: '1 ч/нед', grades: '1–7', desc: 'Рисунок, живопись, декоративно-прикладное искусство, художественный труд.' },
    ],
  },
]

function SubjectCard({ subject }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:shadow-md">
      <button
        className="w-full flex items-center justify-between p-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-primary-600" />
          </div>
          <div>
            <div className="font-semibold text-gray-900">{subject.name}</div>
            <div className="text-xs text-gray-400">{subject.teacher}</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{subject.hours}</span>
            <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{subject.grades} кл.</span>
          </div>
          {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </div>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-1 border-t border-gray-100 bg-gray-50">
          <p className="text-sm text-gray-600 leading-relaxed">{subject.desc}</p>
          <div className="flex gap-3 mt-3 text-xs text-gray-500">
            <span className="flex items-center gap-1 bg-white border border-gray-200 px-2 py-1 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-primary-400" /> {subject.hours}
            </span>
            <span className="flex items-center gap-1 bg-white border border-gray-200 px-2 py-1 rounded-lg">
              <Users className="w-3.5 h-3.5 text-primary-400" /> {subject.grades} класс
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Subjects() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="section-title flex items-center gap-3">
          <span className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">📚</span>
          Предметы
        </h1>
        <p className="section-subtitle">Учебные дисциплины, преподаваемые в нашей школе</p>
      </div>

      <div className="space-y-8">
        {subjectGroups.map(group => (
          <div key={group.category}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-bold mb-4 ${group.headerColor}`}>
              <span>{group.icon}</span>
              {group.category}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {group.subjects.map(subj => (
                <SubjectCard key={subj.name} subject={subj} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
