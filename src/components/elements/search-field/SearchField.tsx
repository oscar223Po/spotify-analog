import { Search } from 'lucide-react'

export function SearchField() {
	return (
		<div className='mb-5'>
			<label className="h-12 px-3 rounded-md border border-gray-700 flex items-center gap-3 group">
				<Search className="opacity-40 group-focus-within:opacity-100 duration-300" />
				<input
					type="search"
					placeholder="Search for songs, artists, etc..."
					className="tracking-normal bg-transparent w-full outline-none"
				/>
			</label>
		</div>
	)
}