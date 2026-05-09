"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import CompanyLogo from "@/components/CompanyLogo";

const navVariant = {
	open: {
		clipPath: "circle(2000px at calc(100% - 40px) 40px)",
		transition: {
			type: "tween",
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1],
		},
	},
	closed: {
		clipPath: "circle(0px at calc(100% - 40px) 40px)",
		transition: {
			delay: 0.3,
			type: "tween",
			duration: 0.3,
			ease: [0.4, 0, 1, 1],
		},
	},
};

const itemVariants = {
	open: (custom) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: custom,
			type: "tween",
			duration: 0.3,
			ease: [0.22, 1, 0.36, 1],
		},
	}),
	closed: {
		opacity: 0,
		x: -80,
		transition: {
			type: "tween",
			duration: 0.2,
		},
	},
};

const navLinks = [
	{ label: "Inicio", anchor: "home", targetIndex: 0, delay: 0.1 },
	{ label: "Servicios", anchor: "about", targetIndex: 1, delay: 0.2 },
	{ label: "¿Cómo trabajamos?", anchor: "process", targetIndex: 2, delay: 0.3 },
	{ label: "Portafolio", anchor: "projects", targetIndex: 3, delay: 0.4 },
	{ label: "Contacto", anchor: "contact", targetIndex: 10, delay: 0.5 },
];

function NavItems({ isNavOpen, setIsNavOpen }) {
	const handleItemClick = (item) => {
		if (typeof window !== "undefined") {
			if (window.location.pathname !== "/") {
				window.location.href = `/#${item.anchor}`;
			} else {
				window.dispatchEvent(
					new CustomEvent("abs:navigate-section", {
						detail: { targetIndex: item.targetIndex, anchor: item.anchor },
					})
				);
			}
		}

		setIsNavOpen(false);
	};

	return (
		<motion.div
			className={`fixed z-[45] flex h-screen w-full items-center justify-center overflow-hidden ${
				isNavOpen ? "pointer-events-auto" : "pointer-events-none"
			}`}
			variants={navVariant}
			animate={isNavOpen ? "open" : "closed"}
			initial={false}>
			<div className="relative flex min-h-[100vh] min-w-[100vw] flex-col items-center bg-[color:rgba(5,5,5,0.97)]">
				<div className="z-50 mx-0 my-auto flex flex-col items-center space-y-8">
					<motion.h1
						variants={itemVariants}
						animate={isNavOpen ? "open" : "closed"}
						className="text-6xl font-bold text-white">
						Menú
					</motion.h1>
					{navLinks.map((item) => (
						<button
							key={item.anchor}
							type="button"
							className="text-2xl font-bold text-white transition-colors duration-300 hover:text-[var(--abs-red)]"
							onClick={() => handleItemClick(item)}>
							<motion.h2
								className="text-white"
								variants={itemVariants}
								animate={isNavOpen ? "open" : "closed"}
								custom={item.delay}>
								{item.label}
							</motion.h2>
						</button>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default function Navbar() {
	const navRef = useRef(null);
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<nav
				ref={navRef}
				className={`navbar fixed inset-0 z-50 flex h-16 w-screen flex-row items-center justify-between px-5 transition-colors duration-500 ease md:px-24 ${
					isNavOpen
						? "bg-[color:rgba(5,5,5,0.88)] backdrop-blur-md"
						: "bg-[color:rgba(255,255,255,0.82)] backdrop-blur-md"
				}`}>
				<div>
					<CompanyLogo
						variant="full"
						className="ml-2 h-16 w-auto max-w-[8.25rem] translate-y-2 object-contain md:ml-0 md:h-20 md:max-w-[10rem] md:translate-y-3"
					/>
				</div>
				<div className="flex flex-row items-center">
					<button
						aria-label={isNavOpen ? "Cerrar menú" : "Abrir menú"}
						className="burger button flex flex-col items-center justify-center space-y-1.5"
						onClick={() => setIsNavOpen((current) => !current)}>
						<div
							className={`h-1 w-10 rounded-full bg-[var(--abs-ink)] transition-all duration-300 ease ${
								isNavOpen ? "translate-y-[2px] rotate-45 bg-white" : ""
							}`}
						/>
						<div
							className={`h-1 w-10 rounded-full bg-[var(--abs-ink)] transition-all duration-300 ease ${
								isNavOpen ? "-translate-y-2 -rotate-45 bg-white" : ""
							}`}
						/>
					</button>
				</div>
			</nav>
			<NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</>
	);
}
