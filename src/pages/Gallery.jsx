import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Search } from 'lucide-react'

const categories = ['Все', 'Мероприятия', 'Спорт', 'Учёба', 'Праздники', 'Природа']

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop', title: 'День открытых дверей', cat: 'Мероприятия' },
  { id: 2, src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop', title: 'Школьный волейбол', cat: 'Спорт' },
  { id: 3, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop', title: 'Урок математики', cat: 'Учёба' },
  { id: 4, src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop', title: 'Навруз в школе', cat: 'Праздники' },
  { id: 5, src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop', title: 'Библиотека', cat: 'Учёба' },
  { id: 6, src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop', title: 'Выпускной вечер', cat: 'Праздники' },
  { id: 7, src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop', title: 'Урок информатики', cat: 'Учёба' },
  { id: 8, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop', title: 'Школьные соревнования', cat: 'Спорт' },
  { id: 9, src: 'https://images.unsplash.com/photo-1564979268369-42032c9de2a1?w=600&h=400&fit=crop', title: 'Весенний сад школы', cat: 'Природа' },
  { id: 10, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop', title: 'Олимпиада по физике', cat: 'Учёба' },
  { id: 11, src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop', title: 'Урок программирования', cat: 'Учёба' },
  { id: 12, src: 'https://images.unsplash.com/photo-1569879287543-8c803a4ff8b1?w=600&h=400&fit=crop', title: 'Спортивный праздник', cat: 'Спорт' },
  { id: 13, src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop', title: 'Школьный концерт', cat: 'Мероприятия' },
  { id: 14, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop', title: 'Прогулка в парке', cat: 'Природа' },
  { id: 15, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop', title: 'Научная конференция', cat: 'Мероприятия' },
]

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('Все')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCat === 'Все' ? photos : photos.filter(p => p.cat === activeCat)

  const openLightbox = (photo) => setLightbox(photo)
  const closeLightbox = () => setLightbox(null)

  const navigate = (dir) => {
    if (!lightbox) return
    const idx = filtered.findIndex(p => p.id === lightbox.id)
    const newIdx = (idx + dir + filtered.length) % filtered.length
    setLightbox(filtered[newIdx])
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="section-title flex items-center gap-3">
          <span className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">🖼️</span>
          Галерея
        </h1>
        <p className="section-subtitle">Моменты школьной жизни</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeCat === cat ? 'bg-primary-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'}`}
          >
            {cat}
            <span className="ml-1.5 text-xs opacity-60">
              {cat === 'Все' ? photos.length : photos.filter(p => p.cat === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {filtered.map(photo => (
          <div
            key={photo.id}
            className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => openLightbox(photo)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <div className="text-white font-semibold text-sm">{photo.title}</div>
                <div className="text-white/60 text-xs">{photo.cat}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <div className="text-5xl mb-4">📷</div>
          <p>Фотографий не найдено</p>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-xl hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-xl hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.src.replace('w=600', 'w=1200').replace('h=400', 'h=800')}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="mt-4 text-center">
              <div className="text-white font-semibold text-lg">{lightbox.title}</div>
              <div className="text-white/50 text-sm">{lightbox.cat}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
