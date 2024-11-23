# Сетка с max-w-1

Чтобы создать сетку с `max-w-1`, нужно сначала добавить это значение в конфигурацию Tailwind:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        '1': '1rem',  // 16px
        // или другое нужное значение
      }
    }
  }
}
```

Затем использовать в HTML:
```html
<div class="max-w-1 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <!-- Содержимое сетки -->
    </div>
</div>
```

Или если нужно точное значение в пикселях:
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      maxWidth: {
        '1': '1px'
      }
    }
  }
}
```

Также можно использовать произвольные значения напрямую:
```html
<div class="max-w-[1px] mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <!-- Содержимое сетки -->
    </div>
</div>
