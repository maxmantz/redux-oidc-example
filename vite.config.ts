import { resolve } from 'path'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: 'index.html',
                silent_renew: 'silent_renew.html',
            },
            output: {
                entryFileNames: '[name].js',
            },
        },
        assetsDir: '.',
        outDir: 'dist',
        sourcemap: true
    },
    server: {
        https: true,
        port: 9090
    },
    plugins: [
        basicSsl(),
        react(),
    ],
})
