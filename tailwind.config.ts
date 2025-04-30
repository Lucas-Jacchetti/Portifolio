import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {  
    theme: {
        extend: {
        fontFamily: {
            lilita: ['"Lilita One"', ...defaultTheme.fontFamily.sans]
            }
        }
    },
}

