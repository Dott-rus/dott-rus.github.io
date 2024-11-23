# Советы и трюки по Tailwind CSS

## Основные приемы

### 1. Организация кода
```html
<!-- Группируйте классы по категориям для лучшей читаемости -->
<div class="
  /* Позиционирование */
  relative z-10
  /* Размеры */
  w-full h-screen
  /* Отступы */
  p-4 my-2
  /* Оформление */
  bg-gray-100 rounded-lg
  /* Анимации */
  transition-all duration-300
">
```

### 2. Компоненты через @apply
```css
/* input.css */
@layer components {
    .card {
        @apply bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow;
    }
    .btn-primary {
        @apply bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600;
    }
}
```

### 3. Кастомные значения
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#FF0000',
      },
      spacing: {
        '128': '32rem',
      }
    }
  }
}
```

## Полезные комбинации

### Центрирование элементов
```html
<!-- Абсолютное центрирование -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<!-- Flex центрирование -->
<div class="flex items-center justify-center">
```

### Адаптивный дизайн
```html
<!-- От мобильных к десктопу -->
<div class="
  grid
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3
">
```

## Продвинутые техники

### 1. Условные стили
```html
<!-- Применение стилей по условию -->
<div class="
  ${isActive ? 'bg-blue-500' : 'bg-gray-500'}
  ${isLarge ? 'text-xl' : 'text-base'}
">
```

### 2. Темная тема
```html
<div class="
  bg-white dark:bg-gray-800
  text-black dark:text-white
">
```

## Оптимизация

### 1. JIT (Just-In-Time) режим
- Быстрее сборка
- Меньше размер CSS
- Динамическая генерация классов

### 2. Очистка неиспользуемых стилей
```js
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
}
```

## Советы по производительности

1. Используйте `@apply` только когда это действительно нужно
2. Группируйте медиа-запросы с помощью плагина `@tailwindcss/aspect-ratio`
3. Избегайте излишней вложенности классов

## Частые ошибки и их решения

1. Проблема: Стили не применяются
   Решение: Проверьте путь в content: [] конфига

2. Проблема: Большой размер CSS
   Решение: Используйте purge и JIT режим

3. Проблема: Конфликты стилей
   Решение: Используйте `!important` через модификатор `!`

## Полезные расширения

1. `@tailwindcss/forms` - стилизация форм
2. `@tailwindcss/typography` - типографика
3. `@tailwindcss/aspect-ratio` - пропорции изображений

## Горячие клавиши VS Code + Tailwind

1. `ctrl + space` - автодополнение классов
2. `ctrl + click` - переход к определению класса
3. `alt + z` - перенос длинных строк

## Рабочий процесс

1. Начинайте с мобильной версии
2. Используйте компоненты для повторяющихся элементов
3. Документируйте кастомные классы
4. Регулярно проверяйте производительность

## Отладка

1. Используйте инструменты разработчика для проверки классов
2. Временно добавляйте border для визуализации элементов:
```html
<div class="border border-red-500">
```

## Интеграция с другими инструментами

1. React + Tailwind
2. Vue + Tailwind
3. Next.js + Tailwind
4. Laravel + Tailwind

## Лучшие практики

1. Придерживайтесь единого стиля именования
2. Используйте префиксы для кастомных утилит
3. Создавайте дизайн-систему с помощью конфига
4. Регулярно обновляйте зависимости
