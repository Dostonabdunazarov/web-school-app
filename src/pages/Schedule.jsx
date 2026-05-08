import { useState } from 'react'
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react'

const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const periods = [
  { num: 1, time: '08:00 – 08:45' },
  { num: 2, time: '09:00 – 09:45' },
  { num: 3, time: '10:00 – 10:45' },
  { num: 4, time: '11:00 – 11:45' },
  { num: 5, time: '12:00 – 12:45' },
  { num: 6, time: '13:00 – 13:45' },
]

const classes = ['5А', '5Б', '6А', '6Б', '7А', '7Б', '8А', '8Б', '9А', '9Б', '10А', '10Б', '11А', '11Б']

const subjectColors = {
  'Математика': 'bg-blue-50 text-blue-700 border-blue-200',
  'Физика': 'bg-purple-50 text-purple-700 border-purple-200',
  'Химия': 'bg-green-50 text-green-700 border-green-200',
  'Биология': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'История': 'bg-orange-50 text-orange-700 border-orange-200',
  'Узбекский язык': 'bg-red-50 text-red-700 border-red-200',
  'Русский язык': 'bg-rose-50 text-rose-700 border-rose-200',
  'Английский язык': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Информатика': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Физкультура': 'bg-lime-50 text-lime-700 border-lime-200',
  'Литература': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  'Классный час': 'bg-gray-50 text-gray-600 border-gray-200',
  'Черчение': 'bg-teal-50 text-teal-700 border-teal-200',
}

// Sample schedule for class 7А
const schedule7A = {
  'Понедельник': ['Математика', 'Русский язык', 'История', 'Биология', 'Физкультура', ''],
  'Вторник': ['Узбекский язык', 'Математика', 'Физика', 'Английский язык', 'Информатика', ''],
  'Среда': ['Литература', 'Химия', 'Математика', 'Физкультура', 'История', 'Классный час'],
  'Четверг': ['Английский язык', 'Биология', 'Русский язык', 'Математика', 'Физика', ''],
  'Пятница': ['Информатика', 'История', 'Химия', 'Узбекский язык', 'Математика', ''],
  'Суббота': ['Физкультура', 'Черчение', 'Английский язык', '', '', ''],
}

// fill other classes with similar data
const generateSchedule = (shift) => {
  const subjects = Object.keys(subjectColors)
  const result = {}
  days.forEach((day, di) => {
    result[day] = periods.map((_, pi) =>
      (pi + di + shift) % 2 === 0 ? subjects[(pi + di + shift) % subjects.length] : ''
    )
  })
  return result
}

const schedules = { '7А': schedule7A }
classes.forEach((cls, i) => { if (cls !== '7А') schedules[cls] = generateSchedule(i) })

export default function Schedule() {
  const [selectedClass, setSelectedClass] = useState('7А')
  const [activeDay, setActiveDay] = useState(null)

  const classIndex = classes.indexOf(selectedClass)
  const prevClass = () => setSelectedClass(classes[Math.max(0, classIndex - 1)])
  const nextClass = () => setSelectedClass(classes[Math.min(classes.length - 1, classIndex + 1)])

  const schedule = schedules[selectedClass] || {}

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="section-title flex items-center gap-3">
          <span className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">📅</span>
          Расписание уроков
        </h1>
        <p className="section-subtitle">Недельное расписание по классам</p>
      </div>

      {/* Class selector */}
      <div className="flex items-center gap-4 mb-8 flex-wrap">
        <button onClick={prevClass} disabled={classIndex === 0}
          className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 disabled:opacity-30 transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2 flex-wrap">
          {classes.map(cls => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${selectedClass === cls ? 'bg-primary-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'}`}
            >
              {cls}
            </button>
          ))}
        </div>

        <button onClick={nextClass} disabled={classIndex === classes.length - 1}
          className="p-2 rounded-xl border border-gray-200 hover:bg-gray-50 disabled:opacity-30 transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(subjectColors).slice(0, 6).map(([subj, cls]) => (
          <span key={subj} className={`badge border ${cls} text-xs`}>{subj}</span>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary-700 text-white">
                <th className="px-4 py-3 text-left font-semibold w-32">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Урок
                  </div>
                </th>
                {days.map(day => (
                  <th key={day} className="px-4 py-3 text-center font-semibold">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {periods.map((period, pi) => (
                <tr key={period.num} className={pi % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border-r border-gray-100">
                    <div className="font-bold text-gray-800">{period.num} урок</div>
                    <div className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {period.time}
                    </div>
                  </td>
                  {days.map(day => {
                    const subj = schedule[day]?.[pi] || ''
                    const color = subjectColors[subj] || ''
                    return (
                      <td key={day} className="px-3 py-3 text-center border-r border-gray-100 last:border-0">
                        {subj ? (
                          <span className={`inline-block px-2.5 py-1.5 rounded-lg text-xs font-semibold border ${color}`}>
                            {subj}
                          </span>
                        ) : (
                          <span className="text-gray-300 text-xs">—</span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile: day tabs */}
      <div className="md:hidden">
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {days.map(day => (
            <button
              key={day}
              onClick={() => setActiveDay(activeDay === day ? null : day)}
              className={`shrink-0 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${activeDay === day ? 'bg-primary-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
            >
              {day.slice(0, 2)}
            </button>
          ))}
        </div>
        {(activeDay ? [activeDay] : days).map(day => (
          <div key={day} className="card mb-4 overflow-hidden">
            <div className="bg-primary-700 text-white px-4 py-3 font-semibold text-sm">{day}</div>
            <div className="divide-y divide-gray-100">
              {periods.map((period, pi) => {
                const subj = schedule[day]?.[pi] || ''
                const color = subjectColors[subj] || ''
                return (
                  <div key={period.num} className="flex items-center gap-3 px-4 py-3">
                    <div className="w-16 shrink-0">
                      <div className="text-xs font-bold text-gray-700">{period.num} урок</div>
                      <div className="text-xs text-gray-400">{period.time.split('–')[0].trim()}</div>
                    </div>
                    {subj ? (
                      <span className={`badge border ${color} text-xs`}>{subj}</span>
                    ) : (
                      <span className="text-gray-300 text-xs">—</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
