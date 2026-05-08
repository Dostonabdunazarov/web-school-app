# План разработки сайта Школы №16, г. Алмалык

## Технологии
- **Фреймворк:** Vite + React 18
- **Маршрутизация:** React Router v6
- **Стили:** Tailwind CSS v3
- **Иконки:** Lucide React
- **Шрифты:** Inter (Google Fonts)

---

## Страницы и статус

| # | Страница | Маршрут | Статус |
|---|---|---|---|
| 1 | Главная (hero, статистика, новости) | `/` | ✅ Готово |
| 2 | Преподаватели (карточки, поиск, фильтр) | `/teachers` | ✅ Готово |
| 3 | Расписание (недельное, по классам) | `/schedule` | ✅ Готово |
| 4 | Дополнительное образование | `/extra-education` | ✅ Готово |
| 5 | Календарь событий | `/events` | ✅ Готово |
| 6 | Галерея (masonry + lightbox) | `/gallery` | ✅ Готово |
| 7 | Предметы (группы + аккордеон) | `/subjects` | ✅ Готово |
| 8 | Учебный процесс | `/learning-process` | ✅ Готово |
| 9 | О школе (история, руководство) | `/about` | ✅ Готово |
| 10 | Олимпиады | `/olympiads` | ✅ Готово |
| 11 | Контакты (форма, карта) | `/contacts` | ✅ Готово |
| 12 | Личный кабинет | `/cabinet` | ✅ Готово |
| 13 | Вопрос-Ответ (FAQ) | `/faq` | ✅ Готово |

---

## Компоненты

| Компонент | Файл | Описание |
|---|---|---|
| Layout | `src/components/Layout.jsx` | Общая обёртка (Header + Outlet + Footer) |
| Header | `src/components/Header.jsx` | Шапка с навигацией, топ-бар, мобильное меню |
| Footer | `src/components/Footer.jsx` | Подвал с ссылками, соцсетями, контактами |

---

## Структура файлов

```
d:\web-school-app\
├── plans\
│   └── plan.md               ← этот файл
├── src\
│   ├── components\
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages\
│   │   ├── Home.jsx
│   │   ├── Teachers.jsx
│   │   ├── Schedule.jsx
│   │   ├── ExtraEducation.jsx
│   │   ├── EventsCalendar.jsx
│   │   ├── Gallery.jsx
│   │   ├── Subjects.jsx
│   │   ├── LearningProcess.jsx
│   │   ├── About.jsx
│   │   ├── Olympiads.jsx
│   │   ├── Contacts.jsx
│   │   ├── PersonalCabinet.jsx
│   │   └── FAQ.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
└── .dockerignore
```

---

## Дизайн-система

### Цвета
- **Primary:** синяя палитра (`primary-50` … `primary-900`)
- **Accent:** оранжевый (`accent-400`, `accent-500`, `accent-600`)

### Кастомные классы (src/index.css)
- `.card` — белая карточка с тенью и hover-эффектом
- `.btn-primary` — синяя кнопка
- `.btn-outline` — кнопка с обводкой
- `.badge` — маленький тег-лейбл
- `.nav-link` — ссылка навигации с подчёркиванием при hover
- `.section-title` — заголовок секции
- `.section-subtitle` — подзаголовок секции

---

## Команды

```bash
npm run dev      # запуск dev-сервера → http://localhost:5173
npm run build    # production-сборка → dist/
npm run preview  # предпросмотр сборки
```

---

## Следующие шаги (TODO)

- [x] Наполнить страницу «Дополнительное образование» (кружки, секции)
- [x] Наполнить страницу «Учебный процесс» (программы, методики)
- [x] Реализовать «Личный кабинет» (авторизация, оценки, ДЗ)
- [x] Docker: Dockerfile + nginx.conf + docker-compose.yml + .dockerignore
- [ ] Добавить реальные фотографии школы в галерею
- [ ] Подключить реальную карту (Yandex Maps / Google Maps iframe)
- [ ] Добавить бэкенд для формы обратной связи
- [ ] SEO: meta-теги, Open Graph, sitemap
- [ ] PWA: иконка, manifest.json
