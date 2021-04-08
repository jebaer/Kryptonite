module.exports = {
    future: {},
    purge: ['./src/**/*.html', './src/**/*.vue', 'public/**/*.html'],
    theme: {
        extend: {
            colors: {
                black: {
                    light: '#1F1F1F',
                    base: '#141414',
                    dark: '#0A0A0A',
                },
                grey: {
                    light: '#3D3D3D',
                    base: '#2F2F2F',
                    dark: '#292929',
                },
                main: {
                    light: '#005b8c',
                    base: '#003a59',
                    dark: '#001926',
                },
                secondary: {
                    light: '#E43A72',
                    base: '#D81E5B',
                    dark: '#B4184C',
                },
                white: {
                    light: '#F5F5F5',
                    base: '#EBEBEB',
                    dark: '#E0E0E0',
                },
                yellow: {
                    base: '#ffd770',
                },
            },
            fontFamily: {
                title: ['Do Hyeon', 'sans-serif'],
                text: ['Rajdhani', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [],
};
