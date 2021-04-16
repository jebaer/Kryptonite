module.exports = {
    future: {},
    purge: ['./src/**/*.html', './src/**/*.vue', 'public/**/*.html'],
    theme: {
        extend: {
            colors: {
                custom: {
                    black: '#0f0e17',
                    white: '#fffffe',
                    primary: '#ff8906',
                    secondary: '#f25f4c',
                    tertiary: '#e53170',
                    grey: '#a7a9be',
                },
            },
            fontFamily: {
                title: ['Oswald', 'sans-serif'],
                text: ['Oswald', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [],
};
