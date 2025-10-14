interface Props {
	image?: string
	title: string
	subTitle: string
}

export function TrackInfo({ title, subTitle }: Props) {
	return (
		<div>
			<div className="flex items-center gap-3">
				<div className='w-12 h-12 bg-primary/5 border border-primary rounded-full' />
				<div>
					<div className="text-white text-lg font-medium">{title}</div>
					<div>{subTitle}</div>
				</div>
			</div>
		</div>
	)
}