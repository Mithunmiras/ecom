import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveal: simple intersection observer reveal/entrance animation wrapper.
 * Props:
 * - animation: string (CSS class), defaults to 'animate-fadeInUp'
 * - delay: string (CSS class for delay), e.g., 'animation-delay-200'
 * - as: element tag, defaults to 'div'
 * - once: trigger only once (default true)
 * - className: additional classes for wrapper
 */
export default function Reveal({
	children,
	animation = 'animate-fadeInUp',
	delay = '',
	as: Tag = 'div',
	once = true,
	className = '',
}) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					if (once) observer.unobserve(entry.target);
				} else if (!once) {
					setVisible(false);
				}
			},
			{ threshold: 0.15 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, [once]);

	const classes = [
		className,
		visible ? animation : 'opacity-0',
		delay,
	]
		.filter(Boolean)
		.join(' ');

	return (
		<Tag ref={ref} className={classes}>
			{children}
		</Tag>
	);
}

