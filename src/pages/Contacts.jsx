import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const contacts = [
  { icon: MapPin, label: 'Адрес', value: 'г. Алмалык, ул. Примерная, д. 16', color: 'text-red-500 bg-red-50' },
  { icon: Phone, label: 'Телефон', value: '+998 70 123-45-67', color: 'text-green-500 bg-green-50' },
  { icon: Mail, label: 'Email', value: 'school16@almalyk.edu.uz', color: 'text-blue-500 bg-blue-50' },
  { icon: Clock, label: 'Режим работы', value: 'Пн–Сб: 8:00 – 17:00', color: 'text-purple-500 bg-purple-50' },
]

const departments = [
  { name: 'Директор', person: 'Умида Нарзуллаева', phone: '+998 70 123-45-67', email: 'director@school16.uz' },
  { name: 'Учебная часть', person: 'Акбар Рустамов', phone: '+998 70 123-45-68', email: 'academic@school16.uz' },
  { name: 'Воспитательная работа', person: 'Гулнора Исмаилова', phone: '+998 70 123-45-69', email: 'upbringing@school16.uz' },
  { name: 'Бухгалтерия', person: 'Дильноза Юсупова', phone: '+998 70 123-45-70', email: 'finance@school16.uz' },
]

export default function Contacts() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="section-title flex items-center gap-3">
          <span className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">📞</span>
          Контакты
        </h1>
        <p className="section-subtitle">Свяжитесь с нами любым удобным способом</p>
      </div>

      {/* Info cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {contacts.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="card p-5 flex items-start gap-4">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">{label}</div>
              <div className="font-semibold text-gray-800 text-sm">{value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-10 mb-12">
        {/* Map placeholder */}
        <div className="card overflow-hidden h-96">
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-primary-100 flex items-center justify-center relative">
            <div className="text-center z-10">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <p className="font-bold text-gray-800 text-lg">Школа №16</p>
              <p className="text-gray-500 text-sm">г. Алмалык, ул. Примерная, 16</p>
              <a
                href="https://maps.google.com/?q=Алмалык+Школа+16"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 btn-primary inline-block text-sm py-2"
              >
                Открыть в Google Maps
              </a>
            </div>
            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        {/* Contact form */}
        <div className="card p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <Send className="w-5 h-5 text-primary-600" />
            Напишите нам
          </h2>

          {sent ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
              <p className="text-xl font-bold text-gray-800">Сообщение отправлено!</p>
              <p className="text-gray-500 text-sm mt-2">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя *</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    required type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Тема обращения</label>
                <select
                  value={form.subject}
                  onChange={e => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 bg-white"
                >
                  <option value="">Выберите тему...</option>
                  <option>Поступление в школу</option>
                  <option>Расписание</option>
                  <option>Успеваемость</option>
                  <option>Техническая поддержка</option>
                  <option>Другое</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение *</label>
                <textarea
                  required rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Напишите ваш вопрос или предложение..."
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Отправить сообщение
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Departments */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Контакты отделов</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {departments.map(d => (
            <div key={d.name} className="card p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-700 font-bold text-lg shrink-0">
                {d.name[0]}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-gray-900">{d.name}</div>
                <div className="text-gray-500 text-sm mb-2">{d.person}</div>
                <div className="flex flex-wrap gap-3 text-xs">
                  <a href={`tel:${d.phone}`} className="flex items-center gap-1 text-green-600 hover:underline">
                    <Phone className="w-3 h-3" /> {d.phone}
                  </a>
                  <a href={`mailto:${d.email}`} className="flex items-center gap-1 text-blue-600 hover:underline">
                    <Mail className="w-3 h-3" /> {d.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
