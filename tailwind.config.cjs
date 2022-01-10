const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    fontSize: {
      xs: ['12px', '14px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',	
    },
  },

  plugins: 
  [require('daisyui'),

  require('@tailwindcss/typography'),
],
};

module.exports = {

  // add daisyUI plugin
  plugins: [
    require('daisyui'),
  ],

  // config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },

}
