import { Trophy, Medal, Star, Calendar, Users, ChevronRight } from 'lucide-react'

const winners = [
  { name: 'Алишер Каримов', subject: 'Математика', place: 1, level: 'Городской', year: '2025', grade: '9А', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop' },
  { name: 'Малика Юсупова', subject: 'Математика', place: 2, level: 'Городской', year: '2025', grade: '9Б', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
  { name: 'Жасурбек Тошев', subject: 'Физика', place: 1, level: 'Районный', year: '2025', grade: '11А', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
  { name: 'Нилуфар Исмоилова', subject: 'Биология', place: 3, level: 'Городской', year: '2025', grade: '10Б', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop' },
  { name: 'Сардор Рахимов', subject: 'Информатика', place: 1, level: 'Республиканский', year: '2024', grade: '11А', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop' },
  { name: 'Ойдин Назарова', subject: 'Английский язык', place: 2, level: 'Городской', year: '2024', grade: '10А', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop' },
]

const upcoming = [
  { date: '15 мая 2025', subject: 'Физика', level: 'Районный', location: 'Школа №1, Алмалык', deadline: '10 мая' },
  { date: '22 мая 2025', subject: 'Химия', level: 'Городской', location: 'ДТМ Алмалык', deadline: '18 мая' },
  { date: '1 июня 2025', subject: 'История', level: 'Республиканский', location: 'Ташкент', deadline: '25 мая' },
  { date: '10 июня 2025', subject: 'Информатика', level: 'Международный', location: 'Онлайн', deadline: '5 июня' },
]

const placeConfig = {
  1: { icon: '🥇', color: 'bg-amber-100 text-amber-700 border-amber-300', label: 'I место' },
  2: { icon: '🥈', color: 'bg-gray-100 text-gray-600 border-gray-300', label: 'II место' },
  3: { icon: '🥉', color: 'bg-orange-100 text-orange-700 border-orange-300', label: 'III место' },
}

const levelColor = {
  'Городской': 'bg-blue-100 text-blue-700',
  'Районный': 'bg-green-100 text-green-700',
  'Республиканский': 'bg-purple-100 text-purple-700',
  'Международный': 'bg-red-100 text-red-700',
}

const stats = [
  { icon: Trophy, value: '47', label: 'Призёров в 2025 г.', color: 'text-amber-500 bg-amber-50' },
  { icon: Medal, value: '12', label: 'Побед на городском', color: 'text-blue-500 bg-blue-50' },
  { icon: Star, value: '3', label: 'Республиканских', color: 'text-purple-500 bg-purple-50' },
  { icon: Users, value: '120+', label: 'Участников', color: 'text-green-500 bg-green-50' },
]

export default function Olympiads() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="section-title flex items-center gap-3">
          <span className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">🏆</span>
          Олимпиады
        </h1>
        <p className="section-subtitle">Достижения наших учеников на олимпиадах разного уровня</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {stats.map(({ icon: Icon, value, label, color }) => (
          <div key={label} className="card p-5 text-center">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 ${color}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
            <div className="text-xs text-gray-500">{label}</div>
          </div>
        ))}
      </div>

      {/* Winners */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-amber-500" /> Наши призёры
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {winners.map((w, i) => {
            const pc = placeConfig[w.place]
            return (
              <div key={i} className="card p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                <div className="relative shrink-0">
                  <img src={w.img} alt={w.name} className="w-16 h-16 rounded-2xl object-cover" />
                  <div className="absolute -top-2 -right-2 text-xl">{pc.icon}</div>
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-gray-900 truncate">{w.name}</div>
                  <div className="text-primary-600 text-sm font-medium">{w.subject}</div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span className={`badge border text-xs ${pc.color}`}>{pc.label}</span>
                    <span className={`badge text-xs ${levelColor[w.level]}`}>{w.level}</span>
                    <span className="badge bg-gray-100 text-gray-500 text-xs">{w.grade} • {w.year}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Upcoming */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-primary-600" /> Предстоящие олимпиады
        </h2>
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-700 text-white">
                  <th className="px-5 py-3 text-left font-semibold">Дата</th>
                  <th className="px-5 py-3 text-left font-semibold">Предмет</th>
                  <th className="px-5 py-3 text-left font-semibold">Уровень</th>
                  <th className="px-5 py-3 text-left font-semibold">Место проведения</th>
                  <th className="px-5 py-3 text-left font-semibold">Заявки до</th>
                </tr>
              </thead>
              <tbody>
                {upcoming.map((ev, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-4 font-medium text-gray-800">{ev.date}</td>
                    <td className="px-5 py-4 font-semibold text-primary-700">{ev.subject}</td>
                    <td className="px-5 py-4">
                      <span className={`badge ${levelColor[ev.level]}`}>{ev.level}</span>
                    </td>
                    <td className="px-5 py-4 text-gray-600">{ev.location}</td>
                    <td className="px-5 py-4 text-red-600 font-medium">{ev.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 p-5 bg-blue-50 rounded-2xl border border-blue-200">
          <p className="text-blue-800 text-sm">
            <strong>Хотите участвовать?</strong> Обратитесь к своему учителю или в учебную часть школы.
            Регистрация для участия в олимпиадах открыта за 2 недели до мероприятия.
          </p>
        </div>
      </div>
    </div>
  )
}
