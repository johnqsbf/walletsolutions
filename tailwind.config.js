module.exports = {
    theme: {
        extend: {
            keyframes: {
                fadeSlideIn: {
                    '0%': { opacity: 0, transform: 'translateY(30px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
            },
            animation: {
                fadeSlideIn: 'fadeSlideIn 0.8s ease-out forwards',
            },
        },
    },
    plugins: [],
};
module.exports = {
  prefix: 'tw-', // Добавляем префикс для изоляции
  important: true,
  content: ['./**/*.html'],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      container: {
        center: true,
        padding: '2rem',
      }
    },
  },
  plugins: [],
}