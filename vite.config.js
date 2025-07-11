import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './', // tell Vite to use relative paths
  build: {
    rollupOptions: {
      input: {
      // Define your entry points here
      // Each key corresponds to a different HTML file
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        joinUs: resolve(__dirname, 'joinUs.html'),
        links: resolve(__dirname, 'links.html'),
        messages: resolve(__dirname, 'messages.html'),
        news: resolve(__dirname, 'news.html'),
        photoGalery: resolve(__dirname, 'photoGalery.html'),
        players: resolve(__dirname, 'players.html'),
        training: resolve(__dirname, 'training.html'),
      }
    }
  }
})
