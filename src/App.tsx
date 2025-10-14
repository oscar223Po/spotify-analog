import { Play } from 'lucide-react'
import { SearchField } from './components/elements/search-field/SearchField'
import { Track } from './components/elements/track-item/Track'
import { TRACKS } from './data/tracks.data'

function App() {
	return (
		<div className="app">
			<SearchField />
			<div className="relative">
				<img
					src="/banner.jpg"
					alt=""
					className="rounded-xl w-full"
				/>

				<div className="flex items-center justify-between absolute bottom-layout left-0 w-full px-layout">
					<div>
						<h1 className="text-2xl font-semibold mb-[0.18rem] text-white">
							Daft Punk
						</h1>
						<h2 className="text-primary font-medium">6.8m listeners</h2>
					</div>

					<button className="rounded-full bg-gradient-to-r from-[#2F3034] to-[#1F2026] p-5 border border-player-bg border-solid duration-300 hover:translate-y-[-2px] hover:shadow">
						<Play
							className="text-primary"
							fill="var(--color-primary)"
						/>
					</button>
				</div>
			</div>
			<div>
				{TRACKS.map((track) => (
					<Track
						key={track.name}
						track={track}
					/>
				))}
			</div>
		</div>
	)
}

export default App
