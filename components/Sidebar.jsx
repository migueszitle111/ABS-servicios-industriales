"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faClipboardList,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useFullPage } from "@alvalens/react-fullpage-snap";
import { motion } from "framer-motion";

const navItems = [
	{ icon: faHome, label: "Ir a Inicio", anchor: "home", targetIndex: 0 },
	{ icon: faUser, label: "Ir a Servicios", anchor: "about", targetIndex: 1 },
	{
		icon: faClipboardList,
		label: "Ir a Como trabajamos",
		anchor: "process",
		targetIndex: 2,
	},
	{
		icon: faFolderOpen,
		label: "Ir a Portafolio",
		anchor: "projects",
		targetIndex: 3,
	},
	{
		icon: faEnvelope,
		label: "Ir a Contacto",
		anchor: "contact",
		targetIndex: 10,
	},
];

const Sidebar = () => {
	const { moveTo, activeIndex } = useFullPage();

	return (
		<div className="fixed left-0 top-1/4 z-40 hidden h-[50vh] w-14 flex-col items-center justify-between rounded-e-3xl bg-[var(--abs-dark)] p-4 shadow-xl lg:flex">
			<ul
				id="sidebar"
				className="flex flex-col justify-evenly items-center h-full text-gray-50">
				{navItems.map((item, index) => (
					<li key={item.anchor} data-menuanchor={item.anchor}>
						{(() => {
							const isPortfolioGroup =
								item.anchor === "projects" &&
								activeIndex >= 3 &&
								activeIndex <= 9;
							const isActive = isPortfolioGroup || activeIndex === item.targetIndex;

							return (
						<button
							aria-label={item.label}
							onClick={() => moveTo(item.targetIndex)}
							className="relative flex items-center justify-center w-10 h-10">
							{isActive && (
								<motion.div
									layoutId="sidebar-active"
									className="absolute inset-0 bg-[var(--abs-red)] rounded-xl"
									transition={{
										type: "spring",
										stiffness: 350,
										damping: 30,
									}}
								/>
							)}
							<FontAwesomeIcon
								icon={item.icon}
								className={`relative z-10 text-xl transition-transform duration-300 ${
									item.anchor === "process"
										? "text-[1.45rem]"
										: "text-xl"
								} ${
									isActive
										? "scale-110"
										: "scale-100"
								}`}
							/>
						</button>
							);
						})()}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
