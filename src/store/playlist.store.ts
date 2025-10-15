import { makeAutoObservable } from 'mobx'

class PlaylistStore {
	playlists: { name: string; tracks: string[] }[] = JSON.parse(
		localStorage.getItem('playlists') || '[]'
	)

	constructor() {
		makeAutoObservable(this)
		
		// Список дефолтных плейлистов
		const defaultPlaylists = ["House Music", "Techno Vibes", "Chillout Beats"]
		// Проверяем, есть ли каждый из них, и если нет — создаём
		defaultPlaylists.forEach(name => {
			if (!this.playlists.some(playlist => playlist.name === name)) {
				this.createPlaylist(name)
			}
		})
	}

	private saveToLocalStorage() {
		localStorage.setItem('playlists', JSON.stringify(this.playlists))
	}

	createPlaylist(name: string) {
		if (this.playlists.find(playlist => playlist.name === name)) return
		this.playlists.push({ name, tracks: [] })

		this.saveToLocalStorage()
	}

	toggleTrackInPlaylist(playlistName: string, trackName: string) {
		const playlist = this.playlists.find(p => p.name === playlistName)
		if (!playlist) return
		if (playlist.tracks.includes(trackName)) {
			playlist.tracks = playlist.tracks.filter(name => name !== trackName)
		} else {
			playlist.tracks.push(trackName)
		}

		this.saveToLocalStorage()
	}

	isTrackInPlaylist(playlistName: string, trackName: string) {
		const playlist = this.playlists.find(p => p.name === playlistName)
		if (!playlist) return false
		return playlist.tracks.includes(trackName)
	}
}

export const playlistStore = new PlaylistStore()
