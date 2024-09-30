import {defineConfig} from 'tsup'
export default defineConfig({
    entry:['./client/index.ts'],
    outDir:'./client/js',
    format:['iife'],
    platform:'browser',
    watch:['client/']
})