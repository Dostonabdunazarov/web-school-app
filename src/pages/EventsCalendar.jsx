import { useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react'

const MONTHS = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']
const WEEKDAYS = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']

const events = [
  { date: '2025-05-09', title: 'День Победы — торжественная линейка', type: 'Праздник', color: 'bg-red-500' },
  { date: '2025-05-12', title: 'Конкурс чтецов «Слово о Родине»', type: 'Мероприятие', color: 'bg-blue-500' },
  { date: '2025-05-15', title: 'Районная олимпиада по физике', type: 'Олимпиада', color: 'bg-amber-500' },
  { date: '2025-05-20', title: 'Последний звонок', type: 'Праздник', color: 'bg-green-500' },
  { date: '2025-05-25', title: 'Школьный спортивный праздник', type: 'Спорт', color: 'bg-purple-500' },
  { date: '2025-06-01', title: 'День защиты детей — праздничный концерт', type: 'Праздник', color: 'bg-red-500' },
  { date: '2025-04-14', title: 'Навруз — школьный праздник', type: 'Праздник', color: 'bg-green-500' },
  { date: '2025-04-20', title: 'День открытых дверей', type: 'Мероприятие', color: 'bg-blue-500' },
  { date: '2025-05-05', title: 'Олимпиада по математике', type: 'Олимпиада', color: 'bg-amber-500' },
  { date: '2025-05-07', title: 'Родительское собрание', type: 'Собрание', color: 'bg-gray-500' },
]

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year, month) {
  let day = new Date(year, month, 1).getDay()
  return day === 0 ? 6 : day - 1 // Monday-based
}

const typeColors = {
  'Праздник': 'bg-red-100 text-red-700',
  'Мероприятие': 'bg-blue-100 text-blue-700',
  'Олимпиада': 'bg-amber-100 text-amber-700',
  'Спорт': 'bg-purple-100 text-purple-700',
  'Собрание': 'bg-gray-100 text-gray-700',
}

export default function EventsCalendar() {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selected, setSelected] = useState(null)

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1) } else setMonth(m => m - 1) }
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1) } else setMonth(m => m + 1) }

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  const getEvents = (day) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return events.filter(e => e.date === dateStr)
  }

  const selectedEvents = selected ? getEvents(selected) : []
  const allMonthEvents = events.filter(e => {
    const [y, m] = e.date.split('-').map(Number)
    return y === year && m - 1 === month
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="section-title flex items-center gap-3">
          <span className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">📆</span>
          Календарь событий
        </h1>
        <p className="section-subtitle">Важные даты и мероприятия школьной жизни</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calendar */}
        <div className="lg:col-span-2 card p-6">
          <div className="flex items-center justify-between mb-6">
            <button onClick={prevMonth} className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-gray-900">
              {MONTHS[month]} {year}
            </h2>
            <button onClick={nextMonth} className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 mb-2">
            {WEEKDAYS.map(wd => (
              <div key={wd} className={`text-center text-xs font-bold py-2 ${wd === 'Сб' || wd === 'Вс' ? 'text-red-400' : 'text-gray-500'}`}>
                {wd}
              </div>
            ))}
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const dayEvents = getEvents(day)
              const isToday = today.getDate() === day && today.getMonth() === month && today.getFullYear() === year
              const isSelected = selected === day
              const isWeekend = (firstDay + i) % 7 >= 5

              return (
                <div
                  key={day}
                  onClick={() => setSelected(isSelected ? null : day)}
                  className={`relative min-h-[60px] p-1.5 rounded-xl cursor-pointer transition-all border ${
                    isSelected ? 'border-primary-500 bg-primary-50' :
                    isToday ? 'border-primary-300 bg-blue-50' :
                    'border-transparent hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className={`text-sm font-semibold block text-center mb-1 w-7 h-7 flex items-center justify-center rounded-full mx-auto ${
                    isToday ? 'bg-primary-600 text-white' :
                    isWeekend ? 'text-red-500' : 'text-gray-700'
                  }`}>
                    {day}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    {dayEvents.slice(0, 2).map((ev, ei) => (
                      <div key={ei} className={`w-full h-1.5 rounded-full ${ev.color}`} title={ev.title} />
                    ))}
                    {dayEvents.length > 2 && <div className="text-xs text-gray-400 text-center">+{dayEvents.length - 2}</div>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Selected day events */}
          {selected && (
            <div className="card p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary-600" />
                {selected} {MONTHS[month]}
              </h3>
              {selectedEvents.length > 0 ? (
                <div className="space-y-3">
                  {selectedEvents.map((ev, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${ev.color}`} />
                      <div>
                        <div className="font-semibold text-sm text-gray-900">{ev.title}</div>
                        <span className={`badge text-xs mt-1 ${typeColors[ev.type]}`}>{ev.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">Событий нет</p>
              )}
            </div>
          )}

          {/* Month events list */}
          <div className="card p-5">
            <h3 className="font-bold text-gray-900 mb-4">События в {MONTHS[month].toLowerCase()}е</h3>
            {allMonthEvents.length > 0 ? (
              <div className="space-y-3">
                {allMonthEvents.map((ev, i) => (
                  <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${ev.color}`} />
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">{ev.date.split('-').slice(1).reverse().join('.')}</div>
                      <div className="text-sm font-medium text-gray-800">{ev.title}</div>
                      <span className={`badge text-xs mt-1 ${typeColors[ev.type]}`}>{ev.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">Событий в этом месяце нет</p>
            )}
          </div>

          {/* Legend */}
          <div className="card p-5">
            <h3 className="font-bold text-gray-900 mb-3">Обозначения</h3>
            <div className="space-y-2">
              {Object.entries(typeColors).map(([type, cls]) => (
                <div key={type} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${events.find(e => e.type === type)?.color || 'bg-gray-400'}`} />
                  <span className="text-sm text-gray-600">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
