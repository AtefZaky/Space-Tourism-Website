/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        barlow : ['Barlow', 'sans-serif'],
        barlowcond : ['Barlow Condensed', 'sans-serif'],
        bellefair : ['Bellefair', 'serif']
      },
      colors: {
        'pri' : '#0B0D17',
        'sec' : '#D0D6F9',
      },
      minHeight:{
        'section' : ' calc(100vh - 144px) '
      },
      backgroundImage: {
        'home-desktop' : "url(./home/background-home-desktop.jpg)",
        'home-tablet' : "url(./home/background-home-tablet.jpg)",
        'home-mobile' : "url(./home/background-home-mobile.jpg)",
        'crew-desktop': "url(./crew/background-crew-desktop.jpg)",
        'crew-tablet': "url(./crew/background-crew-tablet.jpg)",
        'crew-mobile': "url(./crew/background-crew-mobile.jpg)",
        'destination-desktop': "url(./destination/background-destination-desktop.jpg)",
        'destination-tablet': "url(./destination/background-destination-tablet.jpg)",
        'destination-mobile': "url(./destination/background-destination-desktop.jpg)",
        'technology-desktop': "url(./technology/background-technology-desktop.jpg)",
        'technology-tablet': "url(./technology/background-technology-tablet.jpg)",
        'technology-mobile': "url(./technology/background-technology-mobile.jpg)",
      }
    },
  },
  plugins: [],
}

