import type { IArtist } from './artist.types'

export interface ITrack {
	name: string
	file: string
	artist: IArtist
	// cover: string
	duration: number // in seconds
}
