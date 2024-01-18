import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./hero.css";

const Hero: React.FC = () => {
	const titleRef = useRef<HTMLHeadingElement>(null);
	useEffect(() => {
		if (titleRef.current) {
			gsap.from(titleRef.current, {
				duration: 1.5,
				y: -30,
				opacity: 1,
				ease: "bounce.out",
				onComplete: () => {},
			});
		}
	}, []);
	return (
		<div className="hero">
			<div className="hero__text-container">
				<h1 ref={titleRef} className="hero__text-container__title">
					Imagine, Illustrate & Write
				</h1>
				<p className="hero__text-container__subtitle">
					Weave your ideas with WonderWriters
				</p>
			</div>
		</div>
	);
};

export default Hero;
