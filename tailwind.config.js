import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],
    safelist: [
        'bg-red-100',
        'bg-green-100',
        'hover:bg-red-400',
        'hover:bg-green-400',
        'active:bg-red-400',
        'active:bg-green-400',
        'border-red-200',
        'border-green-200',
        'bg-green-400',
        'bg-red-400',
        'border-red-400',
        'border-green-400',
        'text-green-800',
        'text-red-800',
        'flex-row',
        'flex-row-reverse',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'agree': 'var(--color-agree)',
                'agree-light': 'var(--color-agree-light)',
                'agree-dark': 'var(--color-agree-dark)',
                'disagree': 'var(--color-disagree)',
                'disagree-light': 'var(--color-disagree-light)',
                'disagree-dark': 'var(--color-disagree-dark)',
                'main': 'var(--color-main)',
                'main-light': 'var(--color-main-light)',
                'main-dark': 'var(--color-main-dark)',
            },
        },
    },

    plugins: [forms, typography],
};
