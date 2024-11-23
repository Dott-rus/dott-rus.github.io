# Создание адаптивных сеток в Tailwind

## Базовый пример
```html
<!-- Сетка с максимальной шириной -->
<div class="max-w-7xl mx-auto">  <!-- Контейнер с макс. шириной -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Элементы сетки -->
    </div>
</div>
```

## Встроенные значения max-width в Tailwind:
- `max-w-0` → max-width: 0px
- `max-w-xs` → max-width: 20rem (320px)
- `max-w-sm` → max-width: 24rem (384px)
- `max-w-md` → max-width: 28rem (448px)
- `max-w-lg` → max-width: 32rem (512px)
- `max-w-xl` → max-width: 36rem (576px)
- `max-w-2xl` → max-width: 42rem (672px)
- `max-w-3xl` → max-width: 48rem (768px)
- `max-w-4xl` → max-width: 56rem (896px)
- `max-w-5xl` → max-width: 64rem (1024px)
- `max-w-6xl` → max-width: 72rem (1152px)
- `max-w-7xl` → max-width: 80rem (1280px)

## Кастомные значения
Если нужно своё значение, добавьте в tailwind.config.js:
```js
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        'custom': '1440px',
        '8xl': '88rem'
      }
    }
  }
}
```

## Примеры использования:

### 1. Центрированная сетка с максимальной шириной:
```html
<div class="max-w-5xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>Элемент 1</div>
        <div>Элемент 2</div>
        <div>Элемент 3</div>
    </div>
</div>
```

### 2. Адаптивная сетка с разным количеством колонок:
```html
<div class="max-w-6xl mx-auto px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <!-- Элементы -->
    </div>
</div>
```

### 3. Сетка с автоматической шириной колонок:
```html
<div class="max-w-4xl mx-auto px-4">
    <div class="grid grid-cols-auto-fit gap-6">
        <!-- Элементы заполнят доступное пространство -->
    </div>
</div>
```

## Полезные дополнения:

- `mx-auto` - центрирует контейнер
- `px-4` - добавляет отступы по бокам
- `gap-6` - задаёт расстояние между элементами сетки
- `container` - встроенный класс для респонсивной ширины

## Брейкпоинты по умолчанию:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px
