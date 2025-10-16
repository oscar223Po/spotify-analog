import { transformDuration } from '@/utils/transform-duration'
import { useCallback, useState } from 'react'

interface Props {
	currentValue: number
	value: number
	progress: number
	onSeek: (time: number) => void
	isTextDisplayed?: boolean
	isThumbDisplayed?: boolean
}

export function ProgressBar({
	currentValue,
	value,
	progress,
	onSeek,
	isTextDisplayed = false,
	isThumbDisplayed = true
}: Props) {
	const [isDragging, setIsDragging] = useState(false)
	const [tempValue, setTempValue] = useState<number>(0)

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const val = +e.target.value
		setTempValue(val)
		setIsDragging(true)
	}, [])

	const handleCommit = useCallback(() => {
		if (isDragging) {
			onSeek(tempValue)
			setIsDragging(false)
		}
	}, [isDragging, tempValue, onSeek])

	const displayValue = isDragging ? tempValue : currentValue
	const displayProgress = (displayValue / value) * 100 || 0

	return (
		<div className="flex items-center gap-4 select-none">
			{isTextDisplayed && (
				<span className="w-10 text-sm text-white/70">
					{transformDuration(displayValue)}
				</span>
			)}

			<div className="relative w-full h-2 flex items-center">
				{/* Прогресс фона */}
				<div className="absolute top-1/2 left-0 w-full h-[3px] bg-white/20 rounded-full -translate-y-1/2" />

				{/* Активный прогресс */}
				<div
					className="absolute top-1/2 left-0 h-[3px] rounded-full bg-gradient-to-r from-primary to-secondary -translate-y-1/2 pointer-events-none"
					style={{ width: `${displayProgress}%` }}
				/>

				{/* Кастомный круг */}
				{isThumbDisplayed && (
					<div
						className="absolute top-1/2 w-3.5 h-3.5 rounded-full bg-secondary shadow-sm -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-150"
						style={{ left: `${displayProgress}%` }}
					/>
				)}

				{/* Range input */}
				<input
					type="range"
					min={0}
					max={value}
					step={1}
					value={displayValue}
					onChange={handleChange}
					onMouseUp={handleCommit}
					onTouchEnd={handleCommit}
					className="absolute top-0 left-0 w-full h-full appearance-none bg-transparent cursor-pointer z-20 focus:outline-none"
					style={{ WebkitTapHighlightColor: 'transparent' }}
				/>
			</div>

			{isTextDisplayed && (
				<span className="w-10 text-sm text-white/50 text-right">
					{transformDuration(value)}
				</span>
			)}
		</div>
	)
}
