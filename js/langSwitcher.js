document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    const langOptions = document.querySelector('.lang-options');
    const langArrow = document.getElementById('langArrow');
    const currentLangText = document.getElementById('currentLang');
    let currentLang = 'en';

    langToggle.addEventListener('click', () => {
        langOptions.classList.toggle('active');
        langArrow.style.transform = langOptions.classList.contains('active') ? 'rotate(180deg)' : '';
    });

    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang;
            currentLang = lang;
            currentLangText.textContent = e.target.textContent.trim();
            langOptions.classList.remove('active');
            langArrow.style.transform = '';
            updateContent(lang);
        });
    });

    // Close language options when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-switcher')) {
            langOptions.classList.remove('active');
            langArrow.style.transform = '';
        }
    });

    function updateContent(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const keys = key.split('.');
            let value = translations[lang];
            for (const k of keys) {
                value = value[k];
            }
            if (value) {
                element.textContent = value;
            }
        });
    }

    // Initialize with English
    updateContent('en');
});
