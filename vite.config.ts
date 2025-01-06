import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: (content, resourcePath) => {
          // Ignore o próprio arquivo index.sass
          if (resourcePath.endsWith('index.sass')) {
            return content;
          }
          // Adicione a importação para outros arquivos
          return `@use '/src/index.sass'\n${content}`;
        },
      },
    },
  },
});