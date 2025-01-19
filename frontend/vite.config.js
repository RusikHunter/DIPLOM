import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, 'src/styles'), // Алиас для удобства
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // Подключаем несколько файлов
                additionalData: `
                    @use '@styles/_variables.scss' as *;
                    @use '@styles/_mixins.scss' as *;
                    @use '@styles/_normalize.scss' as *;
                    @use '@styles/_media.scss' as *;
                    @use '@styles/_fonts.scss' as *;
                    @use '@styles/_utils.scss' as *;
                    @use '@styles/_globals.scss' as *;
                `,
            },
        },
    },
});