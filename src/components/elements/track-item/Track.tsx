import { TrackInfo } from '@/components/ui/track-info/TrackInfo'
import { ITrack } from '@/types/track.types'
import { transformDuration } from '@/utils/transform-duration'
import { Ellipsis, Heart } from 'lucide-react'

interface Props {
	track: ITrack
}
export function Track({ track }: Props) {
	return (
		<div className="border-b border-player-bg/70 py-7 flex justify-between items-center last:border-0">
			<TrackInfo
				image={undefined}
				title={track.name}
				subTitle={transformDuration(track.duration)}
			/>
			<div className="flex items-center gap-4">
				<button>
					<Heart className='text-primary opacity-85 duration-300 hover:opacity-100' />
				</button>
				<button>
					<Ellipsis className="opacity-30 duration-300 hover:opacity-100" />
				</button>
			</div>
		</div>
	)
}