import type { IMenuItem } from '@/types/menu.types'

interface Props {
	items: IMenuItem[]
	title?: string
}

export function Menu({ items, title }: Props) {
	return (
		<div>
			{title && <div className="opacity-60 text-xxs uppercase font-medium mb-5">{title}</div>}
			<ul>
				{items.map(item => (
					<li key={item.link}>
						<a className="flex gap-3 items-center mb-5 group"
							href={item.link ? item.link : '#'}
						>
							{item.icon && <item.icon className="group-hover:text-primary duration-300" />}
							<span className="group-hover:text-primary duration-300 font-medium">
								{item.name}
							</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
