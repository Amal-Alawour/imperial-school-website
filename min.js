// 1. نظام التبديل بين الوضع النهاري (Light) والليلي (Dark)
function toggleTheme() {
    const htmlRoot = document.getElementById('htmlRoot');
    const themeIcon = document.getElementById('themeIcon');
    
    const currentTheme = htmlRoot.getAttribute('data-theme');

    if (currentTheme === 'light') {
        htmlRoot.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun'; // تغيير الأيقونة لشمس
    } else {
        htmlRoot.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon'; // تغيير الأيقونة لقمر
    }
}

// 2. نظام تبديل اللغة (English / العربية)
let currentLang = 'ar';

function toggleLanguage() {
    const htmlRoot = document.getElementById('htmlRoot');
    const langText = document.getElementById('langText');
    const elementsToTranslate = document.querySelectorAll('[data-en]');

    if (currentLang === 'ar') {
        currentLang = 'en';
        htmlRoot.setAttribute('dir', 'ltr');
        htmlRoot.setAttribute('lang', 'en');
        if (langText) langText.innerText = 'العربية';

        elementsToTranslate.forEach(el => {
            el.setAttribute('data-ar', el.innerText);
            const enText = el.getAttribute('data-en');
            if (enText) el.innerText = enText;
        });
    } else {
        currentLang = 'ar';
        htmlRoot.setAttribute('dir', 'rtl');
        htmlRoot.setAttribute('lang', 'ar');
        if (langText) langText.innerText = 'English';

        elementsToTranslate.forEach(el => {
            if (el.hasAttribute('data-ar')) {
                el.innerText = el.getAttribute('data-ar');
            }
        });
    }
}