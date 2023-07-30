/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'start-menu-glass': 'rgba(0,0,0,.7)',
        'profile-picture-border': 'rgba(150,150,150,.5)',
        'profile-top-left-border': 'rgba(255,255,255,.5)',
        'profile-bottom-right-border': 'rgba(19,194,221,.5)',
      },
      dropShadow: {
        'wsi': '0 1px 0 rgba(0, 0, 0, 1)',
      },
      boxShadow: {
        'start-button-shadow': '0 0 1px 2px rgba(0,0,0,.8), 1px 0 1px 3px rgba(255,255,255,.3)',
        'start-menu-shadow': 'inset 0 0 0 1px #555555, 0 0 10px rgba(0,0,0,.5), 0 0 0 1px rgba(0,0,0,1)',
        'profile-shadow': 'inset 0 0 0 1px #555555, 0 0 2px rgba(0,0,0,.2), 0 0 0 1px rgba(0,0,0,.5)',
        'start-menu-apps-shadow': 'inset 0 0 3px 1px #555555, 0 0 0 1px rgba(0,0,0,1), 0 0 3px rgba(255,255,255,.8)',
      },
      backgroundImage: {
        'taskbar-gradient': 'linear-gradient(0deg, rgba(21,22,24,.9) 0%, rgba(27,28,30,.9) 49%, rgba(73,74,76,.9) 50%, rgba(135,142,135,.9) 95%, rgba(184,178,180,.9) 96%, rgba(184,178,180,.9) 99%, rgba(27,28,30,.9) 100%)',
        'minimise-gradient': 'linear-gradient(0deg, rgba(21,22,24,.7) 0%, rgba(27,28,30,.7) 49%, rgba(73,74,76,.7) 50%, rgba(135,142,135,.7) 95%, rgba(184,178,180,.7) 96%, rgba(184,178,180,.7) 99%, rgba(27,28,30,.7) 100%)',
        'start-button-gradient': 'linear-gradient(to bottom, #051b55 50%, #74ecfd)',
        'windows-icon-after-gradient': 'radial-gradient(rgba(255,255,255,1) 25%, rgba(255,255,255,0) 50% )',
        'start-button-after-gradient': 'radial-gradient(circle, rgba(255,255,255,.5), rgba(255,255,255,0))',
        'window-gradient': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'profile-glass': 'linear-gradient(to bottom, rgba(0,180,241,.2), rgba(255,255,255,.2) 50%, rgba(0,180,241,.2))',
        'profile-image': 'url("https://i.ibb.co/MS4zRNL/display.jpg")',
      },
    },
  },
  plugins: [],
}
