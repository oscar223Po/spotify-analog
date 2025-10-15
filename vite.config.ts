import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import observerPlugin from 'mobx-react-observer/babel-plugin'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [
					observerPlugin({ exclude: ['src/ui-components/**'] })
				],
			},
		}),
		tailwindcss(),
	],
	base: "/spotify-analog",
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
