import { ProgressBar } from '@/components/ui/progress-bar/ProgressBar'
import { TrackInfo } from '@/components/ui/track-info/TrackInfo'
import { musicPlayerStore } from '@/store/store'
import { Pause, Play, SkipBack, SkipForward, Volume, Volume1, Volume2 } from 'lucide-react'

export function AudioPlayer() {
	if (!musicPlayerStore.currentTrack) {
		return null
	}
	return (
		<div className="w-full py-5 px-10 bg-player-bg border-t border-white/10 grid grid-cols-[1fr_5fr] fixed bottom-0 left-0">
			<TrackInfo
				image={undefined}
				title={musicPlayerStore.currentTrack.name}
				subTitle={musicPlayerStore.currentTrack.artist.name}
			/>
			<div className="grid grid-cols-[1fr_6.9fr_2fr] gap-8 items-center">
				<div className="flex items-center gap-2.5">
					<button
						className="opacity-80 hover:opacity-100 duration-300"
					>
						<SkipBack size={20} />
					</button>
					<button
						className="rounded-full bg-gradient-to-r from-[#3C3D41] to-[#444549] p-3.5 border border-white/5 border-solid hover:shadow text-primary"
					>
						{musicPlayerStore.isPlaying ? <Pause size={20} /> : <Play size={20} />}
					</button>
					<button
						className="opacity-80 hover:opacity-100 duration-300"
					>
						<SkipForward size={20} />
					</button>
				</div>
				<ProgressBar
					currentValue={musicPlayerStore.currentTime}
					value={musicPlayerStore.currentTrack.duration}
					progress={musicPlayerStore.progress}
					onSeek={(time: number) => musicPlayerStore.seek(time)}
					isTextDisplayed
				/>
				<div className="pl-6 max-w-36 grid grid-cols-[1fr_8fr] gap-1 items-center">
					<button onClick={() => musicPlayerStore.setVolume(musicPlayerStore.volume === 0 ? 85 : 0)}>
						{musicPlayerStore.volume === 0 ? (
							<Volume />
						) : musicPlayerStore.volume < 60 ? (
							<Volume1 />
						) : (
							<Volume2 />
						)}
					</button>

					<ProgressBar
						currentValue={musicPlayerStore.volume}
						value={100}
						progress={musicPlayerStore.volume}
						onSeek={(value: number) => musicPlayerStore.setVolume(value)}
						isThumbDisplayed={false}
					/>
				</div>
			</div>
		</div>
	)
}