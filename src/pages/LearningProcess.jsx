import { useState } from 'react'
import {
  BookOpen, Layers, FlaskConical, Users, Monitor, Award,
  ChevronDown, ChevronRight, Clock, CheckCircle, GraduationCap,
  Lightbulb, BarChart2, Globe
} from 'lucide-react'

const stages = [
  {
    id: 'primary',
    label: 'Начальная школа',
    grades: '1–4 классы',
    color: 'bg-green-500',
    lightColor: 'bg-green-50 border-green-200',
    textColor: 'text-green-600',
    description: 'Фундамент знаний, навыков чтения, письма и счёта. Развитие любознательности и учебной самостоятельности.',
    subjects: ['Русский язык', 'Математика', 'Окружающий мир', 'Литературное чтение', 'Иностранный язык', 'ИЗО', 'Музыка', 'Технология', 'Физкультура'],
    features: ['Безотметочное обучение в 1 кл.', 'Портфолио достижений', 'Внеурочная деятельность'],
  },
  {
    id: 'middle',
    label: 'Основная школа',
    grades: '5–9 классы',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-600',
    description: 'Системное изучение предметов, подготовка к ОГЭ, развитие критического мышления и исследовательских навыков.',
    subjects: ['Алгебра', 'Геометрия', 'Физика', 'Химия', 'Биология', 'История', 'География', 'Информатика', 'Обществознание', 'Иностранный язык'],
    features: ['Профильные группы по математике', 'Проектная деятельность', 'Подготовка к ОГЭ'],
  },
  {
    id: 'senior',
    label: 'Старшая школа',
    grades: '10–11 классы',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50 border-purple-200',
    textColor: 'text-purple-600',
    description: 'Углублённое изучение профильных предметов, подготовка к ЕГЭ и поступлению в вузы.',
    subjects: ['Математика (профиль)', 'Физика', 'Химия', 'Биология', 'Русский язык', 'Литература', 'Обществознание', 'Иностранный язык', 'Информатика'],
    features: ['Профильное и базовое обучение', 'Индивидуальные учебные планы', 'Подготовка к ЕГЭ'],
  },
]

const methods = [
  {
    icon: Lightbulb,
    color: 'bg-amber-100 text-amber-600',
    title: 'Проблемное обучение',
    text: 'Ученики решают реальные задачи, самостоятельно формулируют гипотезы и приходят к выводам через исследование.',
  },
  {
    icon: Users,
    color: 'bg-green-100 text-green-600',
    title: 'Групповая работа',
    text: 'Совместные проекты формируют навыки командной работы, коммуникации и взаимной ответственности.',
  },
  {
    icon: Monitor,
    color: 'bg-blue-100 text-blue-600',
    title: 'Цифровые технологии',
    text: 'Интерактивные доски, онлайн-тесты, образовательные платформы и мультимедийные материалы на каждом уроке.',
  },
  {
    icon: FlaskConical,
    color: 'bg-teal-100 text-teal-600',
    title: 'Практические занятия',
    text: 'Лабораторные опыты, полевые исследования и мастер-классы — знания закрепляются через действие.',
  },
  {
    icon: Globe,
    color: 'bg-indigo-100 text-indigo-600',
    title: 'Проектная деятельность',
    text: 'Индивидуальные и групповые проекты с публичной защитой — от идеи до готового продукта.',
  },
  {
    icon: BarChart2,
    color: 'bg-rose-100 text-rose-600',
    title: 'Диагностика и обратная связь',
    text: 'Регулярный мониторинг прогресса, индивидуальные комментарии учителей и коррекция траектории обучения.',
  },
]

const schedule = [
  { time: '08:00–08:45', label: '1-й урок' },
  { time: '08:55–09:40', label: '2-й урок' },
  { time: '09:50–10:35', label: '3-й урок' },
  { time: '10:55–11:40', label: '4-й урок' },
  { time: '12:00–12:45', label: '5-й урок' },
  { time: '13:00–13:45', label: '6-й урок' },
  { time: '14:00–14:45', label: '7-й урок' },
]

const achievements = [
  { icon: Award, value: '98%', label: 'Успеваемость по школе' },
  { icon: GraduationCap, value: '94%', label: 'Поступление в вузы' },
  { icon: CheckCircle, value: '45', label: 'Олимпиадных призёров в год' },
  { icon: BookOpen, value: '13', label: 'Образовательных программ' },
]

export default function LearningProcess() {
  const [openStage, setOpenStage] = useState('middle')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Layers className="w-4 h-4" />
            Учебный процесс
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Как мы учим
          </h1>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
            Современные методики, индивидуальный подход и сильная предметная база — основа образования в Школе №16
          </p>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {achievements.map(a => {
            const Icon = a.icon
            return (
              <div key={a.label}>
                <div className="flex justify-center mb-2">
                  <Icon className="w-6 h-6 text-indigo-500" />
                </div>
                <div className="text-3xl font-bold text-indigo-600">{a.value}</div>
                <div className="text-gray-500 text-sm mt-1">{a.label}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Stages */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Ступени обучения</h2>
        <p className="text-gray-500 mb-8">Нажмите на ступень, чтобы узнать подробности</p>

        <div className="space-y-4">
          {stages.map(stage => {
            const isOpen = openStage === stage.id
            return (
              <div key={stage.id} className={`rounded-2xl border-2 overflow-hidden transition-all ${isOpen ? stage.lightColor : 'bg-white border-gray-100'}`}>
                <button
                  onClick={() => setOpenStage(isOpen ? null : stage.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-10 rounded-full ${stage.color}`} />
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{stage.label}</div>
                      <div className={`text-sm font-medium ${stage.textColor}`}>{stage.grades}</div>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 mb-4">{stage.description}</p>
                      <div>
                        <div className="text-sm font-semibold text-gray-700 mb-2">Особенности</div>
                        <ul className="space-y-1">
                          {stage.features.map(f => (
                            <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className={`w-4 h-4 shrink-0 ${stage.textColor}`} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-700 mb-2">Предметы</div>
                      <div className="flex flex-wrap gap-2">
                        {stage.subjects.map(s => (
                          <span key={s} className={`text-xs px-3 py-1 rounded-full font-medium ${stage.lightColor} ${stage.textColor} border`}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Methods */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Методики преподавания</h2>
          <p className="text-gray-500 mb-8">Подходы, которые делают обучение эффективным и интересным</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methods.map(m => {
              const Icon = m.icon
              return (
                <div key={m.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${m.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{m.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{m.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Daily schedule */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Распорядок учебного дня</h2>
        <p className="text-gray-500 mb-8">Продолжительность урока — 45 минут, перемены — 10–20 минут</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {schedule.map((s, i) => (
            <div key={s.time} className="bg-white rounded-xl border border-gray-100 p-4 text-center hover:border-indigo-200 hover:shadow-sm transition-all">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm font-bold flex items-center justify-center mx-auto mb-3">
                {i + 1}
              </div>
              <div className="text-xs font-medium text-gray-700 mb-1">{s.label}</div>
              <div className="flex items-center justify-center gap-1 text-gray-400 text-xs">
                <Clock className="w-3 h-3" />
                {s.time}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-50 border-t border-indigo-100 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Узнать больше</h2>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          Посетите школу, пообщайтесь с педагогами и убедитесь в качестве нашего образования лично.
        </p>
        <a
          href="/contacts"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Записаться на экскурсию
          <ChevronRight className="w-4 h-4" />
        </a>
      </section>
    </div>
  )
}
