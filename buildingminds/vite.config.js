import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/building-minds/', // Add this line
  plugins: [react()],
});
