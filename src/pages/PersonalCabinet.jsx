import { useState } from 'react'
import {
  UserCircle, Lock, LogIn, Eye, EyeOff,
  BookOpen, ClipboardList, Calendar, Bell,
  TrendingUp, CheckCircle, AlertCircle, Clock,
  ChevronRight, Star, BarChart2, LogOut
} from 'lucide-react'

// ── Demo data ────────────────────────────────────────────────
const DEMO_USERS = [
  { login: 'ivanov_student', password: '1234', role: 'student', name: 'Иванов Алексей', class: '9 «А»' },
  { login: 'parent_ivanova', password: '1234', role: 'parent', name: 'Иванова Марина Сергеевна', child: 'Иванов Алексей, 9 «А»' },
]

const grades = [
  { subject: 'Математика',      q1: 5, q2: 4, q3: 5, year: null, teacher: 'Хасанов К.У.' },
  { subject: 'Русский язык',    q1: 4, q2: 4, q3: 4, year: null, teacher: 'Рахимова Г.Ш.' },
  { subject: 'Физика',          q1: 5, q2: 5, q3: 4, year: null, teacher: 'Назаров Б.Т.' },
  { subject: 'Химия',           q1: 4, q2: 3, q3: 4, year: null, teacher: 'Исмоилова З.А.' },
  { subject: 'История',         q1: 5, q2: 5, q3: 5, year: null, teacher: 'Юсупов Д.Н.' },
  { subject: 'Биология',        q1: 3, q2: 4, q3: 4, year: null, teacher: 'Расулова М.И.' },
  { subject: 'Информатика',     q1: 5, q2: 5, q3: 5, year: null, teacher: 'Мусаев Т.Б.' },
  { subject: 'Английский язык', q1: 4, q2: 4, q3: 5, year: null, teacher: 'Тошматов А.К.' },
]

const homework = [
  { subject: 'Математика',      task: 'Параграф 14, упр. 3–7 (стр. 89)',              due: '2026-05-09', done: false },
  { subject: 'Физика',          task: 'Задачи на закон Ньютона (карточка №12)',         due: '2026-05-09', done: true  },
  { subject: 'История',         task: 'Читать §28, ответить на вопросы 1–4',           due: '2026-05-12', done: false },
  { subject: 'Английский язык', task: 'Workbook p.56–57, написать эссе (150 слов)',    due: '2026-05-12', done: false },
  { subject: 'Химия',           task: 'Лабораторная работа №6 — оформить отчёт',      due: '2026-05-13', done: true  },
  { subject: 'Биология',        task: 'Параграф 22, заполнить таблицу сравнений',     due: '2026-05-14', done: false },
]

const notifications = [
  { type: 'info',    text: 'Родительское собрание — 15 мая в 18:00, актовый зал',        time: '2 ч. назад' },
  { type: 'success', text: 'Оценка «5» по информатике за контрольную работу',            time: '5 ч. назад' },
  { type: 'warn',    text: 'Задолженность по биологии: не сдана лабораторная №5',        time: 'вчера' },
  { type: 'info',    text: 'Олимпиада по физике — регистрация до 20 мая',                time: 'вчера' },
]

const weekSchedule = [
  { day: 'Пн', lessons: ['Математика', 'Физика', 'История', 'Английский', 'Физкультура'] },
  { day: 'Вт', lessons: ['Русский язык', 'Химия', 'Биология', 'Математика', 'Классный час'] },
  { day: 'Ср', lessons: ['Физика', 'Информатика', 'История', 'Русский язык', 'Математика'] },
  { day: 'Чт', lessons: ['Английский', 'Биология', 'Химия', 'Физкультура', 'ОБЖ'] },
  { day: 'Пт', lessons: ['Математика', 'Информатика', 'Русский язык', 'История', 'Английский'] },
]

// ── Helpers ──────────────────────────────────────────────────
function gradeColor(g) {
  if (g === 5) return 'text-green-600 bg-green-50'
  if (g === 4) return 'text-blue-600 bg-blue-50'
  if (g === 3) return 'text-amber-600 bg-amber-50'
  return 'text-red-600 bg-red-50'
}

function avg(row) {
  const vals = [row.q1, row.q2, row.q3].filter(Boolean)
  return vals.length ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1) : '—'
}

const notifIcon = { info: Bell, success: CheckCircle, warn: AlertCircle }
const notifColor = { info: 'text-blue-500', success: 'text-green-500', warn: 'text-amber-500' }

// ── Tabs ─────────────────────────────────────────────────────
const tabs = [
  { id: 'grades',   label: 'Оценки',     icon: BarChart2    },
  { id: 'homework', label: 'Д/З',        icon: ClipboardList },
  { id: 'schedule', label: 'Расписание', icon: Calendar     },
  { id: 'notif',    label: 'Уведомления',icon: Bell         },
]

// ── Login form ───────────────────────────────────────────────
function LoginForm({ onLogin }) {
  const [login, setLogin]       = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd]   = useState(false)
  const [error, setError]       = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const user = DEMO_USERS.find(u => u.login === login && u.password === password)
    if (user) { onLogin(user) } else { setError('Неверный логин или пароль') }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">Личный кабинет</h1>
          <p className="text-gray-500 text-center text-sm mb-8">Школа №16, г. Алмалык</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Логин</label>
              <input
                type="text"
                value={login}
                onChange={e => { setLogin(e.target.value); setError('') }}
                placeholder="ivanov_student"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
              <div className="relative">
                <input
                  type={showPwd ? 'text' : 'password'}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError('') }}
                  placeholder="••••••"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Войти
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400 text-center mb-3">Демо-доступ (пароль: 1234)</p>
            <div className="grid grid-cols-2 gap-2">
              {DEMO_USERS.map(u => (
                <button
                  key={u.login}
                  onClick={() => { setLogin(u.login); setPassword('1234'); setError('') }}
                  className="text-xs bg-gray-50 hover:bg-gray-100 text-gray-600 px-3 py-2 rounded-lg transition-colors text-left"
                >
                  <div className="font-medium">{u.role === 'student' ? 'Ученик' : 'Родитель'}</div>
                  <div className="text-gray-400">{u.login}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Dashboard ─────────────────────────────────────────────────
function Dashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('grades')
  const [hwDone, setHwDone]       = useState(() => homework.map(h => h.done))

  const pendingHw = hwDone.filter(d => !d).length
  const unreadNotif = notifications.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b px-4 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
              <UserCircle className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">{user.name}</div>
              <div className="text-xs text-gray-400">
                {user.role === 'student' ? user.class : user.child}
              </div>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-500 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Выйти
          </button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Star,          color: 'bg-amber-100 text-amber-600',  label: 'Средний балл', value: '4.4' },
          { icon: ClipboardList, color: 'bg-rose-100 text-rose-600',    label: 'Невыполнено Д/З', value: pendingHw },
          { icon: Bell,          color: 'bg-blue-100 text-blue-600',    label: 'Уведомлений', value: unreadNotif },
          { icon: TrendingUp,    color: 'bg-green-100 text-green-600',  label: 'Успеваемость', value: '98%' },
        ].map(c => {
          const Icon = c.icon
          return (
            <div key={c.label} className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${c.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{c.value}</div>
                <div className="text-xs text-gray-400">{c.label}</div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex gap-1 bg-white rounded-2xl border border-gray-100 p-1 mb-6 overflow-x-auto">
          {tabs.map(t => {
            const Icon = t.icon
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors flex-1 justify-center ${
                  activeTab === t.id
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {t.label}
              </button>
            )
          })}
        </div>

        {/* Tab: Grades */}
        {activeTab === 'grades' && (
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-50">
              <h2 className="font-bold text-gray-900">Оценки за год</h2>
              <p className="text-xs text-gray-400 mt-0.5">Четверти I · II · III</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-gray-400 uppercase border-b border-gray-50">
                    <th className="text-left px-6 py-3 font-medium">Предмет</th>
                    <th className="text-center px-3 py-3 font-medium">I</th>
                    <th className="text-center px-3 py-3 font-medium">II</th>
                    <th className="text-center px-3 py-3 font-medium">III</th>
                    <th className="text-center px-3 py-3 font-medium">Сред.</th>
                    <th className="text-left px-6 py-3 font-medium hidden md:table-cell">Учитель</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map(row => (
                    <tr key={row.subject} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-3 font-medium text-gray-900">{row.subject}</td>
                      {[row.q1, row.q2, row.q3].map((g, i) => (
                        <td key={i} className="px-3 py-3 text-center">
                          <span className={`inline-block w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center ${gradeColor(g)}`}>
                            {g}
                          </span>
                        </td>
                      ))}
                      <td className="px-3 py-3 text-center">
                        <span className="text-sm font-bold text-gray-700">{avg(row)}</span>
                      </td>
                      <td className="px-6 py-3 text-gray-400 text-xs hidden md:table-cell">{row.teacher}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab: Homework */}
        {activeTab === 'homework' && (
          <div className="space-y-3 mb-8">
            {homework.map((hw, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border px-5 py-4 flex items-start gap-4 transition-all ${
                  hwDone[i] ? 'border-green-100 opacity-60' : 'border-gray-100'
                }`}
              >
                <button
                  onClick={() => setHwDone(prev => prev.map((d, j) => j === i ? !d : d))}
                  className="mt-0.5 shrink-0"
                >
                  {hwDone[i]
                    ? <CheckCircle className="w-5 h-5 text-green-500" />
                    : <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                  }
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                      {hw.subject}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      до {new Date(hw.due).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}
                    </span>
                  </div>
                  <p className={`text-sm text-gray-700 ${hwDone[i] ? 'line-through' : ''}`}>{hw.task}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Schedule */}
        {activeTab === 'schedule' && (
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-50">
              <h2 className="font-bold text-gray-900">Расписание на неделю</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-xs text-gray-400 uppercase border-b border-gray-50">
                    <th className="text-left px-4 py-3 font-medium">№</th>
                    {weekSchedule.map(d => (
                      <th key={d.day} className="text-center px-4 py-3 font-medium">{d.day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[0,1,2,3,4].map(lessonIdx => (
                    <tr key={lessonIdx} className="border-b border-gray-50">
                      <td className="px-4 py-2.5 text-gray-400 font-medium">{lessonIdx + 1}</td>
                      {weekSchedule.map(d => (
                        <td key={d.day} className="px-4 py-2.5 text-center">
                          <span className="text-xs text-gray-700 bg-gray-50 px-2 py-1 rounded-lg whitespace-nowrap">
                            {d.lessons[lessonIdx] || '—'}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab: Notifications */}
        {activeTab === 'notif' && (
          <div className="space-y-3 mb-8">
            {notifications.map((n, i) => {
              const Icon = notifIcon[n.type]
              return (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 px-5 py-4 flex items-start gap-3">
                  <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${notifColor[n.type]}`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">{n.text}</p>
                    <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────
export default function PersonalCabinet() {
  const [user, setUser] = useState(null)

  if (!user) return <LoginForm onLogin={setUser} />
  return <Dashboard user={user} onLogout={() => setUser(null)} />
}
