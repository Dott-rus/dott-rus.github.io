# Практические примеры сеток в Tailwind

## 1. Произвольные значения (JIT режим)
```html
<!-- Используя квадратные скобки для точных значений -->
<div class="max-w-[1000px] mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Элементы -->
    </div>
</div>
```

## 2. Container Query подход
```html
<!-- Используя container класс -->
<div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Элементы -->
    </div>
</div>
```

## 3. Responsive подход
```html
<!-- Разная максимальная ширина на разных экранах -->
<div class="max-w-[320px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Элементы -->
    </div>
</div>
```

## 4. Viewport Units
```html
<!-- Используя проценты от ширины viewport -->
<div class="max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Элементы -->
    </div>
</div>
```

## 5. С учетом отступов
```html
<!-- Учитываем padding в максимальной ширине -->
<div class="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Элементы -->
    </div>
</div>
```

## Важные моменты:
1. `mx-auto` центрирует контейнер
2. Используйте `px-{size}` для отступов по бокам
3. Комбинируйте с `container` для автоматической адаптивности
4. JIT режим позволяет использовать произвольные значения в `[]`

## Пример с ограничением ширины колонок:
```html
<div class="max-w-[1200px] mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="max-w-[300px] mx-auto md:mx-0">Колонка 1</div>
        <div class="max-w-[300px] mx-auto md:mx-0">Колонка 2</div>
        <div class="max-w-[300px] mx-auto md:mx-0">Колонка 3</div>
    </div>
</div>
