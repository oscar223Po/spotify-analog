import { Play } from 'lucide-react'
import styles from "./Lyrics.module.scss"

export function Lyrics() {
	return (
		<div className={styles.lyrics}>
			<div className="text-primary font-medium mb-5">[ Verse 1 ]</div>
			<p>It might not be the right time</p>
			<p>I might not be the right one</p>
			<p>But there's something about us want to say</p>
			<p className={styles.active}>
				<Play
				fill='var(--color-primary)'
				className={styles.icon}
				size={10}
				/>
				Cause there's something between us anvwav
			</p>
			<div className="text-primary font-medium mb-5">[ Verse 2 ]</div>
			<p>I might not be the right one</p>
			<p>It might not be the right time</p>
			<p>But there's something about us</p>
			<p>I've got to do</p>
			<p>Some kind of secret I will sho</p>
			<p>with VOL</p>
			<div className="text-primary font-medium mb-5">[ Refrain ]</div>
			<p>Rollin' and Scratchin'</p>
			<p>Lose Yourselt to Dance</p>
			<p>I need vou more than anvthing</p>
			<p>want vou more than anvthinc</p>
		</div>
	)
}