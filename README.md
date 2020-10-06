# fsd_practice

Вёрстка сайта бронирования номеров. Pixelperfect, адаптив.

## Развёртывание и запуск

- Установка

npm install

- запуск dev-server

npm run start

- Сборка проекта в режиме development

npm run dev

- Сборка проекта в режиме prodaction

npm run build


## Github pages

[Github Pages](https://olegkhiretdinov.github.io/fsd_practice/)  
[Лендинг "Поиск номера"](https://olegkhiretdinov.github.io/fsd_practice/dist/landing.html)  
[Регистрация нового пользователя](https://olegkhiretdinov.github.io/fsd_practice/dist/registration.html)  
[Страница авторизации](https://olegkhiretdinov.github.io/fsd_practice/dist/sign-in.html)  
[Поиск номера](https://olegkhiretdinov.github.io/fsd_practice/dist/search-room.html)  
[Страница описания и заказа номера](https://olegkhiretdinov.github.io/fsd_practice/dist/room-details.html)


## Структура


```
├── src/                             # Исходники
│   ├── assets/                      # Подключаемые ресурсы
│   │   ├── fonts/                   # Шрифты
│   │   ├── img/                     # Изображения
│   │   └── styles/                  # Стили
│   │       ├── theme/               # Тема проекта
│   │       │   ├── colors.scss      # Переменные цветов
│   │       │   ├── fonts.scss       # Подлючение шрифтов
│   │       └── main.scss            # Файл в который импортируются все стили
│   ├── blocks/                      # Блоки
│   ├── layouts/                     # Шаблоны
│   └── pages/                       # Cтраницы
├── .gitignore                       # Список исключённых файлов из Git
├── package.json                     # Список модулей и прочей информации
├── README.md                        # Документация
└── webpack.config.js                # Конфигурация Webpack.js
```