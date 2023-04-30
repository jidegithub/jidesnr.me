import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import tailwindConfig from './tailwind.config.js'
// import * as form from "@tailwindcss/custom-forms"

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
}