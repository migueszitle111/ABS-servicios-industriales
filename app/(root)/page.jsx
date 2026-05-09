"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FullPageWrapper, Section, useFullPage } from "@alvalens/react-fullpage-snap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faEnvelope,
	faLocationDot,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Button from "@/components/Button";
import Hr from "@/components/Hr";

const heroHighlights = [
	"Diseño de soluciones para procesos de manufactura",
	"Fabricación de estaciones de trabajo y mobiliario industrial",
	"Implementación de mejoras ergonómicas y operativas",
	"Desarrollo e instalación de áreas de trabajo industriales según requerimientos del proceso",
];

const services = [
	{
		title: "Diseño de soluciones industriales",
		description:
			"Desarrollo de propuestas para optimizar procesos de manufactura mediante análisis de flujo, ergonomía y necesidades operativas.",
	},
	{
		title: "Fabricación de mobiliario y componentes metálicos",
		description:
			"Producción de mesas, carros, estructuras y elementos en acero y aluminio adaptados a procesos industriales.",
	},
	{
		title: "Implementación de áreas de trabajo industriales",
		description:
			"Instalación de estaciones, áreas de ensamble, soldadura y espacios de trabajo adaptados a requerimientos operativos.",
	},
	{
		title: "Fabricación de soluciones metálicas a medida o a partir de planos del cliente",
		description:
			"Desarrollamos mobiliario, estructuras y componentes metálicos bajo especificaciones propias o planos proporcionados, asegurando precisión y funcionalidad en cada proyecto.",
	},
];

const workflowSteps = [
	{
		number: "01",
		title: "Requerimiento",
		visual: "requirement",
		description:
			"Nos compartes tu necesidad o proyecto. Si cuentas con planos, los analizamos; si no, realizamos levantamiento en sitio.",
	},
	{
		number: "02",
		title: "Análisis y propuesta",
		visual: "analysis",
		description:
			"Evaluamos el proceso y desarrollamos una solución enfocada en eficiencia, ergonomía y optimización operativa.",
	},
	{
		number: "03",
		title: "Cotización y validación",
		visual: "validation",
		description:
			"Te enviamos una propuesta formal y, en caso de aprobación, generamos planos para validación antes de fabricación.",
	},
	{
		number: "04",
		title: "Fabricación e implementación",
		visual: "fabrication",
		description:
			"Fabricamos e instalamos la solución conforme a lo acordado, lista para integrarse a tu proceso productivo.",
	},
];

const portfolioItems = [
	{
		title: "Cuartos de soldadura",
		image: "/image/portafolio/1Cuartosdesoldadura.jpg",
		description:
			"Área delimitada con cortinas industriales para separar procesos de soldadura, controlar chispas y mejorar la seguridad visual y operativa dentro de planta.",
		tech: ["Soldadura", "Seguridad", "Área de trabajo"],
	},
	
	{
		title: "Guardas de seguridad",
		image: "/image/portafolio/2Guardasdeseguridad.jpg",
		description:
			"Guardas metálicas con malla para proteger áreas de proceso, separar equipos y mantener zonas de operación controladas para el personal.",
		tech: ["Guardas", "Malla", "Seguridad"],
	},
	{
		title: "Carros para manejo de piezas pintadas",
		image: "/image/portafolio/3Rackcompactoparapaneles.jpg",
		description:
			"Carro metálico de baja altura con niveles acolchonados para manejo de piezas recubiertas, optimizando el flujo entre estaciones de trabajo.",
		tech: ["Piezas pintadas", "Manejo", "Protección"],
	},
	{
		title: "Fixturas de izaje",
		image: "/image/portafolio/4Fixturasdeizaje.jpg",
		description:
			"Fixturas metálicas diseñadas para apoyar maniobras de izaje, posicionamiento y manejo seguro de componentes dentro del proceso productivo.",
		tech: ["Izaje", "Fixturas", "Manejo"],
	},
	{
		title: "Carro para manejo de material",
		image: "/image/portafolio/5Rackparapaneles.jpg",
		description:
			"Rack móvil de múltiples niveles para alimentar líneas de producción y mover materiales de forma ordenada entre estaciones de trabajo.",
		tech: ["Materiales", "Flujo", "Ruedas"],
	},
	{
		title: "Carro para manejo de material",
		image: "/image/portafolio/6Carrocontenedorconmalla.jpg",
		description:
			"Carro con malla metálica y niveles inferiores para transporte y resguardo de piezas, evitando caídas y manteniendo el área de trabajo ordenada.",
		tech: ["Malla", "Contenedor", "Orden"],
	},
	{
		title: "Carros de material lean",
		image: "/image/portafolio/7Carrosdemateriallean.jpg",
		description:
			"Carros industriales para manejo lean de materiales, con niveles definidos y ruedas para facilitar el surtido y movimiento dentro de planta.",
		tech: ["Lean", "Materiales", "Movilidad"],
	},
	{
		title: "Fixturas de perfil de aluminio",
		image: "/image/portafolio/8Fixturasdeperfilaluminio.jpg",
		description:
			"Fixturas fabricadas con perfil de aluminio para soporte, posicionamiento y repetibilidad en procesos de ensamble o validación.",
		tech: ["Aluminio", "Fixturas", "Ensamble"],
	},
	{
		title: "Mesa de trabajo",
		image: "/image/portafolio/9Mesarodantedetrabajo.jpg",
		description:
			"Mesa industrial rodante para trabajo, armado y soporte de piezas, fabricada a medida para integrarse al flujo de operación.",
		tech: ["Mesa", "Trabajo", "Ruedas"],
	},
	{
		title: "Maquinado de fixturas",
		image: "/image/portafolio/10Dispositivodesujecionparacortes.jpg",
		description:
			"Jig metálico de precisión montado sobre mesa, diseñado para fijar piezas a 90 grados y agilizar operaciones repetitivas de corte, barrenado o armado.",
		tech: ["Jig", "Corte", "Armado"],
	},
	{
		title: "Carro para manejo de material",
		image: "/image/portafolio/11Rackparamaterialesyperfiles.jpg",
		description:
			"Estructura metálica reforzada diseñada para el manejo de piezas alargadas, ideal para líneas de producción con movimiento continuo de perfiles y componentes de gran longitud.",
		tech: ["Perfiles", "Materiales", "Manejo"],
	},
	{
		title: "Maquinado de piezas",
		image: "/image/portafolio/12Plantilladealuminio.jpg",
		description:
			"Jig de precisión fabricado en aluminio, utilizado para asegurar posicionamiento exacto en procesos repetitivos de corte, ensamble o verificación dimensional dentro de planta.",
		tech: ["Aluminio", "Posicionamiento", "Precisión"],
	},
	{
		title: "Racks fabricados a medida",
		image: "/image/portafolio/13Carroreforzado.jpg",
		description:
			"Rack industrial fabricado a medida con estructura reforzada para almacenamiento, manejo y traslado de componentes dentro de planta.",
		tech: ["Racks", "A medida", "Manejo"],
	},
	{
		title: "Cuartos de lona",
		image: "/image/portafolio/14cuartosdelona.jpeg",
		description:
			"Cuartos industriales con lona o cortina flexible para delimitar áreas de trabajo, contener polvo, chispas o salpicaduras y mantener procesos separados sin cerrar la visibilidad del área.",
		tech: ["Lona industrial", "Separación", "Seguridad"],
	},
];

const portfolioPages = [];

for (let index = 0; index < portfolioItems.length; index += 2) {
	portfolioPages.push(portfolioItems.slice(index, index + 2));
}

function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 1023px)");
		const update = () => setIsMobile(mediaQuery.matches);
		update();

		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener("change", update);
			return () => mediaQuery.removeEventListener("change", update);
		}

		mediaQuery.addListener(update);
		return () => mediaQuery.removeListener(update);
	}, []);

	return isMobile;
}

function MobileSectionNavigator() {
	useEffect(() => {
		const scrollToAnchor = (anchor) => {
			if (!anchor) return;

			const section = document.getElementById(anchor);
			if (section) {
				section.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		};

		const hash = window.location.hash.slice(1);
		if (hash) {
			window.requestAnimationFrame(() => scrollToAnchor(hash));
		}

		const handleNavigation = (event) => {
			scrollToAnchor(event.detail?.anchor);
		};

		window.addEventListener("abs:navigate-section", handleNavigation);
		return () => window.removeEventListener("abs:navigate-section", handleNavigation);
	}, []);

	return null;
}

function ExternalSectionNavigator() {
	const { moveTo } = useFullPage();

	useEffect(() => {
		const handleNavigation = (event) => {
			const targetIndex = event.detail?.targetIndex;
			if (typeof targetIndex === "number") {
				moveTo(targetIndex);
			}
		};

		window.addEventListener("abs:navigate-section", handleNavigation);
		return () => window.removeEventListener("abs:navigate-section", handleNavigation);
	}, [moveTo]);

	return null;
}

function DesktopHomeActionButtons() {
	const { moveTo } = useFullPage();

	return (
		<motion.div
			className="flex w-full flex-wrap gap-3"
			initial={{ y: 40, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.3, type: "spring" }}>
			<Button variation="primary" onClick={() => moveTo(3)}>
				Ver portafolio de trabajos
			</Button>
			<Button variation="secondary" onClick={() => moveTo(10)}>
				Solicitar cotización
			</Button>
		</motion.div>
	);
}

function MobileHomeActionButtons() {
	const scrollToAnchor = (anchor) => {
		const section = document.getElementById(anchor);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<motion.div
			className="flex w-full flex-col gap-3"
			initial={{ y: 40, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.3, type: "spring" }}>
			<Button variation="primary" onClick={() => scrollToAnchor("projects")}>
				Ver portafolio de trabajos
			</Button>
			<Button variation="secondary" onClick={() => scrollToAnchor("contact")}>
				Solicitar cotización
			</Button>
		</motion.div>
	);
}

function ScrollIndicator() {
	const { activeIndex } = useFullPage();
	const [dismissed, setDismissed] = useState(false);

	useEffect(() => {
		if (activeIndex !== 0) setDismissed(true);
	}, [activeIndex]);

	return (
		<AnimatePresence>
			{activeIndex === 0 && !dismissed && (
				<motion.div
					className="fixed bottom-8 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
					exit={{ opacity: 0, transition: { duration: 0.4 } }}>
					<span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[4px] text-[var(--abs-muted)]">
						Scroll
					</span>
					<motion.div
						className="h-14 w-[1.5px] origin-top bg-[var(--abs-red)]"
						animate={{ scaleY: [0, 1, 1], opacity: [0, 1, 0] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
							times: [0, 0.5, 1],
						}}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

function ServicesScrollIndicator() {
	const { activeIndex } = useFullPage();

	return (
		<AnimatePresence>
			{activeIndex === 1 && (
				<motion.div
					className="fixed bottom-8 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.6, delay: 0.4 } }}
					exit={{ opacity: 0, transition: { duration: 0.4 } }}>
					<span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[4px] text-[var(--abs-muted)]">
						Scroll
					</span>
					<motion.div
						className="h-14 w-[1.5px] origin-top bg-[var(--abs-red)]"
						animate={{ scaleY: [0, 1, 1], opacity: [0, 1, 0] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
							times: [0, 0.5, 1],
						}}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

function ProcessScrollIndicator() {
	const { activeIndex } = useFullPage();

	return (
		<AnimatePresence>
			{activeIndex === 2 && (
				<motion.div
					className="fixed bottom-8 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.6, delay: 0.4 } }}
					exit={{ opacity: 0, transition: { duration: 0.4 } }}>
					<span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[4px] text-[var(--abs-muted)]">
						Scroll
					</span>
					<motion.div
						className="h-14 w-[1.5px] origin-top bg-[var(--abs-red)]"
						animate={{ scaleY: [0, 1, 1], opacity: [0, 1, 0] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
							times: [0, 0.5, 1],
						}}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

function PortfolioScrollIndicator() {
	const { activeIndex } = useFullPage();
	const isPortfolioSection = activeIndex >= 3 && activeIndex <= 9;

	return (
		<AnimatePresence>
			{isPortfolioSection && (
				<motion.div
					className="fixed right-8 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
					initial={{ opacity: 0, x: 12 }}
					animate={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
					exit={{ opacity: 0, x: 12, transition: { duration: 0.25 } }}>
					<span className="text-[10px] font-medium uppercase tracking-[4px] text-[var(--abs-muted)]">
						Scroll
					</span>
					<motion.div
						className="h-14 w-[1.5px] origin-top bg-[var(--abs-red)]"
						animate={{ scaleY: [0, 1, 1], opacity: [0, 1, 0] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
							times: [0, 0.5, 1],
						}}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

function PortfolioCard({ item, index, mobile = false, compact = false }) {
	const [isTouchActive, setIsTouchActive] = useState(false);
	const showImageOnTouch = mobile && isTouchActive;
	const aspectClass = mobile ? "aspect-[1/1.05]" : compact ? "aspect-[1.34/1]" : "aspect-[1.18/1]";

	return (
		<motion.div
			className={`group/tes relative z-10 flex w-full flex-col items-start justify-center overflow-hidden bg-white ${aspectClass}`}
			initial={{ opacity: 0, x: -200 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ delay: index * 0.03, type: "spring" }}
			onTouchStart={mobile ? () => setIsTouchActive(true) : undefined}
			onTouchEnd={mobile ? () => setIsTouchActive(false) : undefined}
			onTouchCancel={mobile ? () => setIsTouchActive(false) : undefined}>
			<div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden bg-white">
				<motion.div
					className="absolute inset-y-0 w-28 -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(219,31,38,0.09),transparent)]"
					initial={{ left: "-28%" }}
					animate={{ left: ["-28%", "116%"] }}
					transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
				/>
			</div>
			<Image
				src={item.image}
				alt={item.title}
				fill
				unoptimized
				className="z-10 object-contain object-center transition-transform duration-500 ease group-hover/tes:scale-[1.01]"
				sizes="(max-width: 768px) 100vw, 50vw"
			/>
			<div
				className={`absolute inset-0 z-20 transition-all duration-500 ease ${
					showImageOnTouch
						? "bg-transparent"
						: "bg-[color:rgba(5,5,5,0.58)] group-hover/tes:bg-transparent lg:bg-[color:rgba(17,25,35,0.42)] lg:group-hover/tes:bg-transparent"
				}`}
			/>
			<div
				className={`absolute inset-0 z-30 flex flex-col justify-end px-5 pb-6 text-center transition-all duration-500 ease lg:justify-center lg:px-8 lg:pb-0 ${
					showImageOnTouch ? "opacity-0" : "opacity-100 group-hover/tes:opacity-0"
				}`}>
				<h1 className="mb-3 text-[1.5rem] font-bold leading-[1.08] text-white lg:text-[2.05rem]">
					{item.title}
				</h1>
				<p className="mx-auto max-w-[92%] text-[14px] leading-[1.45] text-white/92 lg:max-w-[88%] lg:text-[17px]">
					{item.description}
				</p>
				<div className="mt-3 flex flex-row flex-wrap items-center justify-center lg:mt-4">
					{item.tech.map((tech, techIndex) => (
						<span
							key={techIndex}
							className="m-1 bg-[var(--abs-dark)] px-3 py-1 text-xs text-white lg:px-3 lg:py-1.5 lg:text-[15px]">
							{tech}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

function HomeSectionContent({ mobile = false }) {
	if (mobile) {
		return (
			<div className="w-full px-5 pt-24 pb-8">
				<div className="mx-auto flex max-w-7xl flex-col gap-6">
					<div className="relative z-10 flex w-full flex-col items-start text-start">
						<motion.h1
							className="pr-2 text-[2.6rem] font-bold leading-[0.92] text-black sm:text-[3rem]"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.1, type: "spring" }}>
							ABS Servicios Industriales
						</motion.h1>
						<Hr />
						<motion.p
							className="title mt-1 mb-4 max-w-4xl text-[0.98rem] leading-[1.8rem] tracking-wide text-[var(--abs-muted)]"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.2, type: "spring" }}>
							Diseñamos e implementamos soluciones que optimizan el flujo de trabajo mediante principios de manufactura esbelta, integrando mobiliario industrial, estructuras metálicas y áreas de trabajo adaptadas a cada operación.
                            Mejoramos la ergonomía, reducimos desperdicios y aumentamos la eficiencia operativa a través de soluciones funcionales y bien ejecutadas.

						</motion.p>
						<MobileHomeActionButtons />
					</div>
					<motion.div
						className="relative min-h-[25rem] w-full overflow-hidden rounded-sm bg-[var(--abs-dark)]"
						initial={{ x: 300, opacity: 0, z: -100 }}
						whileInView={{ x: 0, opacity: 1, z: 0 }}
						transition={{
							delay: 0.5,
							type: "spring",
							stiffness: 100,
							damping: 20,
						}}>
						<div className="absolute inset-0 bg-gradient-to-br from-[var(--abs-ink)] via-[var(--abs-dark)] to-[#241216]" />
						<div className="absolute inset-x-0 top-0 h-1 bg-[var(--abs-red)]" />
						<div className="relative z-10 flex h-full flex-col justify-between p-5 text-white">
							<div>
								<p className="text-[11px] uppercase tracking-[0.28em] text-white/70">
									ABS Servicios Industriales
								</p>
								<h2 className="mt-3 text-[1.45rem] font-bold leading-[1.18] sm:text-[1.6rem]">
									Soluciones en metal y manufactura enfocadas en la optimización de procesos industriales.
								</h2>
							</div>
							<div className="space-y-3">
								<div className="rounded-2xl border border-white/10 bg-[var(--abs-ink)] px-3 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.26)]">
									<div className="flex items-center gap-3">
										<Image
											src="/image/logo2.jpg"
											alt="ABS Servicios Industriales"
											width={470}
											height={470}
											className="h-12 w-12 shrink-0 rounded-lg object-cover"
										/>
										<div className="text-left text-white">
											<p className="text-[0.95rem] font-black leading-tight text-white">
												ABS Servicios Industriales
											</p>
											<p className="mt-1 text-[11px] font-semibold text-white/80">
												Tijuana, B.C.
											</p>
										</div>
									</div>
								</div>
								<ul className="space-y-2">
									{heroHighlights.map((item) => (
										<li key={item} className="flex items-start gap-3">
											<FontAwesomeIcon
												icon={faCheck}
												className="mt-1 text-sm text-[var(--abs-red)]"
											/>
											<span className="text-[0.88rem] leading-snug sm:text-[0.95rem]">{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		);
	}

	return (
		<div className="h-screen w-screen overflow-hidden px-10 py-10">
			<div className="mx-auto grid h-full max-w-[92rem] grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] items-center gap-16">
				<div className="min-w-0">
					<motion.h1
						className="max-w-[44rem] pr-2 text-7xl font-bold leading-[0.92] text-black 2xl:text-[5.6rem]"
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.1, type: "spring" }}>
						ABS Servicios Industriales
					</motion.h1>
					<Hr />
					<motion.p
						className="title mt-2 mb-5 max-w-[52rem] text-xl leading-[1.75] tracking-wide text-[var(--abs-muted)]"
						initial={{ x: -100, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.2, type: "spring" }}>
						Diseñamos e implementamos soluciones que optimizan el flujo de trabajo mediante principios de manufactura esbelta, integrando mobiliario industrial, estructuras metálicas y áreas de trabajo adaptadas a cada operación.
Mejoramos la ergonomía, reducimos desperdicios y aumentamos la eficiencia operativa a través de soluciones funcionales y bien ejecutadas.

					</motion.p>
					<DesktopHomeActionButtons />
				</div>
				<div className="flex justify-end">
					<motion.div
						className="relative h-[56vh] w-full max-w-[38rem] overflow-hidden rounded-sm bg-[var(--abs-dark)]"
						initial={{ x: 300, opacity: 0, z: -100 }}
						whileInView={{ x: 0, opacity: 1, z: 0 }}
						transition={{
							delay: 0.5,
							type: "spring",
							stiffness: 100,
							damping: 20,
						}}>
						<div className="absolute inset-0 bg-gradient-to-br from-[var(--abs-ink)] via-[var(--abs-dark)] to-[#241216]" />
						<div className="absolute inset-x-0 top-0 h-1 bg-[var(--abs-red)]" />
						<div className="relative z-10 flex h-full flex-col justify-between p-8 text-white">
							<div>
								<p className="text-sm uppercase tracking-[0.28em] text-white/70">
									ABS Servicios Industriales
								</p>
								<h2 className="mt-4 text-[1.85rem] font-bold leading-[1.16] 2xl:text-[2rem]">
									Soluciones en metal y manufactura enfocadas en la optimización de procesos industriales.
								</h2>
							</div>
							<div className="space-y-3">
								<div className="rounded-2xl border border-white/10 bg-[var(--abs-ink)] px-4 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.26)]">
									<div className="flex items-center gap-4">
										<Image
											src="/image/logo2.jpg"
											alt="ABS Servicios Industriales"
											width={470}
											height={470}
											className="h-16 w-16 shrink-0 rounded-lg object-cover"
										/>
										<div className="text-left text-white">
											<p className="text-lg font-black leading-tight text-white">
												ABS Servicios Industriales
											</p>
											<p className="mt-1 text-sm font-semibold text-white/80">
												Tijuana, B.C.
											</p>
										</div>
									</div>
								</div>
								<ul className="space-y-2">
									{heroHighlights.map((item) => (
										<li key={item} className="flex items-start gap-3">
											<FontAwesomeIcon
												icon={faCheck}
												className="mt-1 text-sm text-[var(--abs-red)]"
											/>
											<span className="text-[0.94rem] leading-snug 2xl:text-base">{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

function ServicesSectionContent() {
	return (
		<div className="w-full px-5 pt-20 pb-8 lg:h-screen lg:w-screen lg:overflow-hidden lg:px-10 lg:py-20">
			<div className="mx-auto flex max-w-7xl flex-col justify-center">
				<motion.h1
					className="px-2 text-[2.2rem] font-bold text-black lg:px-0 lg:text-6xl"
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.1, type: "spring" }}>
					Servicios
				</motion.h1>
				<Hr />
				<motion.p
					className="title mt-2 mb-4 max-w-5xl text-[0.97rem] leading-[1.6rem] tracking-wide text-[var(--abs-muted)] lg:mb-5 lg:text-lg lg:tracking-wider"
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.2, type: "spring" }}>
					Herrería enfocada al sector industrial y comercial, con soluciones diseñadas
					para uso rudo, larga vida útil y cumplimiento en sitio.
				</motion.p>
				<div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							className="min-h-[138px] rounded-2xl border border-gray-200 bg-white p-4 shadow-sm lg:min-h-[190px] lg:p-6"
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ delay: index * 0.08, type: "spring" }}>
							<h3 className="mb-2 text-xl font-bold leading-tight text-black lg:mb-3 lg:text-[1.35rem]">
								{service.title}
							</h3>
							<p className="title text-sm leading-[1.55rem] tracking-wide text-[var(--abs-muted)] lg:text-[0.96rem] lg:leading-[1.55rem] lg:tracking-wide">
								{service.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

function ProcessStepVisual({ variant, title }) {
	const commonMotion = {
		animate: { y: [0, -4, 0] },
		transition: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
	};

	return (
		<div className="relative mt-1 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-slate-50 via-white to-slate-200 shadow-[0_16px_38px_rgba(17,25,35,0.16)] lg:h-36 lg:w-36">
			<motion.div
				className="absolute -right-5 -top-4 h-16 w-16 rounded-full bg-[color:rgba(219,31,38,0.12)]"
				animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.9, 0.55] }}
				transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute -bottom-4 -left-5 h-20 w-20 rounded-full bg-[color:rgba(17,25,35,0.08)]"
				animate={{ scale: [1.12, 1, 1.12], opacity: [0.45, 0.72, 0.45] }}
				transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut" }}
			/>

			{variant === "requirement" && (
				<motion.svg
					{...commonMotion}
					aria-label={title}
					viewBox="0 0 120 120"
					className="relative z-10 h-[5.8rem] w-[5.8rem]">
					<rect x="34" y="18" width="52" height="68" rx="7" fill="#fff" stroke="#111923" strokeWidth="4" />
					<path d="M76 18v18h10" fill="none" stroke="#111923" strokeWidth="4" strokeLinecap="round" />
					<path d="M44 43h28M44 55h24M44 67h18" stroke="#505b69" strokeWidth="4" strokeLinecap="round" />
					<motion.path
						d="m44 82 8 8 19-22"
						fill="none"
						stroke="#db1f26"
						strokeWidth="6"
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ pathLength: 0 }}
						whileInView={{ pathLength: 1 }}
						transition={{ duration: 0.9, delay: 0.15 }}
					/>
				</motion.svg>
			)}

			{variant === "analysis" && (
				<motion.svg
					{...commonMotion}
					aria-label={title}
					viewBox="0 0 120 120"
					className="relative z-10 h-[5.9rem] w-[5.9rem]">
					<rect x="20" y="30" width="74" height="54" rx="8" fill="#fff" stroke="#111923" strokeWidth="4" />
					<path d="M32 72 48 58l14 9 22-28" fill="none" stroke="#db1f26" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
					<circle cx="48" cy="58" r="5" fill="#111923" />
					<circle cx="62" cy="67" r="5" fill="#111923" />
					<circle cx="84" cy="39" r="5" fill="#111923" />
					<motion.circle
						cx="85"
						cy="77"
						r="16"
						fill="none"
						stroke="#505b69"
						strokeWidth="5"
						animate={{ scale: [1, 1.08, 1] }}
						transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
					/>
					<path d="m97 89 11 11" stroke="#505b69" strokeWidth="6" strokeLinecap="round" />
				</motion.svg>
			)}

			{variant === "validation" && (
				<motion.svg
					{...commonMotion}
					aria-label={title}
					viewBox="0 0 120 120"
					className="relative z-10 h-[5.9rem] w-[5.9rem]">
					<rect x="29" y="22" width="56" height="70" rx="8" fill="#fff" stroke="#111923" strokeWidth="4" />
					<rect x="43" y="16" width="28" height="14" rx="5" fill="#db1f26" />
					<path d="M42 47h30M42 59h26M42 71h18" stroke="#505b69" strokeWidth="4" strokeLinecap="round" />
					<motion.path
						d="m67 81 8 8 20-25"
						fill="none"
						stroke="#db1f26"
						strokeWidth="6"
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ pathLength: 0 }}
						whileInView={{ pathLength: 1 }}
						transition={{ duration: 0.9, delay: 0.2 }}
					/>
				</motion.svg>
			)}

			{variant === "fabrication" && (
				<motion.svg
					{...commonMotion}
					aria-label={title}
					viewBox="0 0 120 120"
					className="relative z-10 h-[6rem] w-[6rem]">
					<path d="M25 78h70v12H25z" fill="#111923" />
					<path d="M34 78V54h52v24" fill="#fff" stroke="#111923" strokeWidth="5" strokeLinejoin="round" />
					<path d="M42 54 55 38h26l-13 16" fill="none" stroke="#505b69" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
					<motion.circle
						cx="84"
						cy="40"
						r="11"
						fill="#db1f26"
						animate={{ rotate: [0, 180, 360] }}
						style={{ transformOrigin: "84px 40px" }}
						transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
					/>
					<path d="M84 25v30M69 40h30M73 29l22 22M95 29 73 51" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
					<path d="M34 90 24 104M86 90l10 14" stroke="#111923" strokeWidth="5" strokeLinecap="round" />
				</motion.svg>
			)}
		</div>
	);
}

function ProcessSectionContent() {
	return (
		<div className="w-full px-5 pt-20 pb-8 lg:h-screen lg:w-screen lg:overflow-hidden lg:px-10 lg:py-20">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
				<motion.p
					className="title text-sm font-bold uppercase tracking-[0.22em] text-[var(--abs-red)]"
					initial={{ y: -18, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.05, type: "spring" }}>
					Proceso
				</motion.p>
				<motion.h1
					className="mt-2 px-2 text-[2.2rem] font-bold leading-tight text-black lg:px-0 lg:text-5xl"
					initial={{ y: -24, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.1, type: "spring" }}>
					¿Cómo trabajamos?
				</motion.h1>
				<motion.p
					className="title mx-auto mt-3 max-w-4xl text-[0.97rem] leading-[1.6rem] tracking-wide text-[var(--abs-muted)] lg:text-base lg:leading-[1.65rem]"
					initial={{ y: -20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, type: "spring" }}>
					Un proceso claro para transformar tu requerimiento en una solución fabricada, validada e integrada a tu operación.
				</motion.p>
				<div className="relative mt-8 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-8">
					<div className="pointer-events-none absolute left-[8%] right-[8%] top-[2.1rem] hidden h-px bg-gray-200 lg:block" />
					{workflowSteps.map((step, index) => (
						<motion.div
							key={step.number}
							className="relative flex flex-col items-center text-center"
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ delay: index * 0.08, type: "spring" }}>
							<p className="title text-sm font-bold uppercase tracking-[0.12em] text-[var(--abs-dark)]">
								Paso {index + 1}
							</p>
							<div className="relative z-10 my-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white">
								<span className="h-3 w-3 rounded-full bg-[var(--abs-dark)] shadow-[0_0_0_2px_rgba(219,31,38,0.08)]" />
							</div>
							<ProcessStepVisual variant={step.visual} title={step.title} />
							<h3 className="mt-5 text-xl font-bold leading-tight text-black lg:text-[1.25rem]">
								{step.title}
							</h3>
							<p className="title mt-2 max-w-[18rem] text-sm leading-[1.45rem] tracking-wide text-[var(--abs-muted)] lg:text-[0.92rem] lg:leading-[1.45rem] lg:tracking-wide">
								{step.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

function PortfolioSectionContent({ pageItems, pageIndex = 0, mobile = false }) {
	if (mobile) {
		return (
			<div className="w-full px-5 pt-20 pb-8">
				<div className="mx-auto flex max-w-7xl flex-col">
					<div className="shrink-0">
						<motion.h1
							className="px-2 text-[2.1rem] font-bold leading-[1.05] text-black"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.1, type: "spring" }}>
							Portafolio de trabajos
						</motion.h1>
						<motion.p
							className="title mt-2 mb-4 max-w-5xl text-[0.92rem] leading-[1.5rem] tracking-wide text-[var(--abs-muted)]"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.2, type: "spring" }}>
							Proyectos de herrería industrial, racks, guardas de seguridad y equipos de
							manejo de materiales fabricados a la medida.
						</motion.p>
					</div>
					<div className="grid w-full grid-cols-1 items-stretch gap-4">
						{pageItems.map((item, index) => (
							<PortfolioCard key={item.image} item={item} index={index} mobile />
						))}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={`h-screen w-screen px-10 ${pageIndex === 0 ? "pt-28 pb-8" : "py-11"}`}>
			<div
				className={`mx-auto flex h-full max-w-[96rem] flex-col ${
					pageIndex === 0 ? "justify-start" : "justify-center"
				}`}>
				{pageIndex === 0 && (
					<div className="shrink-0">
						<motion.h1
							className="text-[2.35rem] font-bold leading-[1.05] text-black"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.1, type: "spring" }}>
							Portafolio de trabajos
						</motion.h1>
						<motion.p
							className="title mt-3 mb-5 max-w-5xl text-[15px] leading-[1.5rem] tracking-wider text-[var(--abs-muted)]"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.2, type: "spring" }}>
							Proyectos de herrería industrial, racks, guardas de seguridad y equipos de
							manejo de materiales fabricados a la medida.
						</motion.p>
					</div>
				)}
				<div
					className={`grid w-full grid-cols-2 items-stretch gap-4 ${
						pageIndex === 0 ? "" : "my-auto translate-y-4"
					}`}>
					{pageItems.map((item, index) => (
						<PortfolioCard
							key={item.image}
							item={item}
							index={pageIndex * 2 + index}
							compact={pageIndex === 0}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

function ContactSectionContent() {
	return (
		<div className="w-full px-5 pt-20 pb-8 lg:h-screen lg:w-screen lg:px-10 lg:pt-28 lg:pb-8">
			<div className="mx-auto flex max-w-[92rem] flex-col justify-center lg:h-full">
				<motion.h1
					className="px-2 text-[2.2rem] font-bold text-black lg:px-0 lg:text-6xl"
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.1, type: "spring" }}>
					Contacto y cotizaciones
				</motion.h1>
				<Hr />
				<motion.p
					className="title mt-2 mb-4 max-w-5xl text-[0.97rem] leading-[1.6rem] tracking-wide text-[var(--abs-muted)] lg:mb-5 lg:text-lg lg:tracking-wider"
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.2, type: "spring" }}>
					Comparte fotos, medidas o planos y preparamos una propuesta para tu proyecto.
				</motion.p>
				<div className="grid w-full max-w-[72rem] grid-cols-1 gap-4 self-center lg:gap-6 lg:grid-cols-2">
					<motion.div
						className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:min-h-[29rem] lg:p-8"
						initial={{ x: -80, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ type: "spring" }}>
						<p className="mb-2 text-sm uppercase tracking-[0.24em] text-[var(--abs-red)]">
							Nombre comercial
						</p>
						<p className="mb-5 text-xl font-bold text-black">ABS Servicios Industriales</p>
						<p className="mb-2 text-sm uppercase tracking-[0.24em] text-[var(--abs-red)]">
							Ciudad
						</p>
						<p className="mb-5 text-lg text-black">Tijuana, Baja California</p>
						<p className="mb-2 text-sm uppercase tracking-[0.24em] text-[var(--abs-red)]">
							Teléfono
						</p>
						<a href="tel:+526644591228" className="mb-5 block break-words text-lg text-black">
							+52 664 459 1228
						</a>
						<p className="mb-2 text-sm uppercase tracking-[0.24em] text-[var(--abs-red)]">
							Correos
						</p>
						<div className="mb-6 space-y-2">
							
							<a
								href="mailto:admin@serviciosindustrialesabs.com"
								className="block break-words text-lg text-black">
								admin@serviciosindustrialesabs.com
							</a>
						</div>
						<div className="flex flex-row flex-wrap gap-3">
							<a
								href="https://wa.me/526644591228"
								target="_blank"
								rel="noopener noreferrer"
								className="title inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-8 py-2 text-white shadow-md transition duration-300 ease-in-out hover:bg-[#1fb558] sm:w-auto">
								<svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
									<path d="M20.52 3.48A11.78 11.78 0 0 0 12.13 0C5.6 0 .3 5.3.3 11.83c0 2.08.54 4.1 1.57 5.87L0 24l6.47-1.82a11.8 11.8 0 0 0 5.65 1.44h.01c6.52 0 11.82-5.3 11.82-11.83 0-3.16-1.23-6.13-3.43-8.31Zm-8.39 18.15h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.84 1.08 1.03-3.74-.24-.38A9.82 9.82 0 0 1 2.3 11.83C2.3 6.4 6.7 2 12.13 2c2.62 0 5.08 1.02 6.93 2.87a9.73 9.73 0 0 1 2.87 6.93c0 5.42-4.4 9.83-9.8 9.83Zm5.39-7.34c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.66.15-.2.3-.76.98-.93 1.18-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.48-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.9-2.19-.24-.58-.49-.5-.66-.51h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.86 1.22 3.06c.15.2 2.09 3.19 5.06 4.47.71.31 1.27.5 1.71.64.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.08-.13-.28-.2-.58-.35Z" />
								</svg>
								<span>WhatsApp</span>
							</a>
							<a
								href="https://www.facebook.com/profile.php?id=61583252753485"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Abrir Facebook de ABS Servicios Industriales"
								className="title inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1877F2] px-8 py-2 text-white shadow-md transition duration-300 ease-in-out hover:bg-[#145dbf] sm:w-auto">
								<svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
									<path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
								</svg>
								<span>Facebook</span>
							</a>
							<Button variation="secondary">
								<a href="mailto:herreriaavilamxbc@gmail.com" className="inline-flex items-center gap-2">
									<svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
										<path fill="#EA4335" d="M3 6.75 12 13l9-6.25V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6.75Z" />
										<path fill="#FBBC05" d="M3 6.75V6a2 2 0 0 1 2-2h.32L12 9l6.68-5H19a2 2 0 0 1 2 2v.75L12 13 3 6.75Z" />
										<path fill="#34A853" d="M3 7.1 8.76 11.3 3 17.06V7.1Z" />
										<path fill="#4285F4" d="M21 7.1v9.96l-5.76-5.76L21 7.1Z" />
									</svg>
									<svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
										<path fill="#0A66E8" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Z" />
										<path fill="#FFF" d="M7 8.2 12 12l5-3.8V8l-5 3.8L7 8v.2Zm0 1.8V16h10V10l-5 3.8L7 10Z" />
									</svg>
									<span>Correo</span>
								</a>
							</Button>
						</div>
					</motion.div>

					<motion.div
						className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:min-h-[29rem] lg:p-8"
						initial={{ x: 80, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.1, type: "spring" }}>
						<div className="mb-6 flex items-start gap-4">
							<FontAwesomeIcon icon={faLocationDot} className="mt-1 text-2xl text-[var(--abs-red)]" />
							<div>
								<h3 className="mb-2 text-xl font-bold text-black">Cobertura</h3>
								<p className="title text-base leading-[1.7rem] tracking-wider text-[var(--abs-muted)]">
									Tijuana, Baja California.
								</p>
							</div>
						</div>
						<div className="mb-6 flex items-start gap-4">
							<FontAwesomeIcon icon={faPhone} className="mt-1 text-2xl text-[var(--abs-red)]" />
							<div>
								<h3 className="mb-2 text-xl font-bold text-black">Atención</h3>
								<p className="title text-base leading-[1.7rem] tracking-wider text-[var(--abs-muted)]">
									Respuesta directa para seguimiento, dudas y cotización.
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<FontAwesomeIcon icon={faEnvelope} className="mt-1 text-2xl text-[var(--abs-red)]" />
							<div>
								<h3 className="mb-2 text-xl font-bold text-black">Qué puedes enviar</h3>
								<p className="title text-base leading-[1.7rem] tracking-wider text-[var(--abs-muted)]">
									Puedes mandar fotos del área, medidas aproximadas o planos. Con esa
									información se prepara una primera cotización y, si es necesario, se
									agenda una visita para valoración presencial.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
				<div className="mx-auto mt-5 w-full max-w-[72rem] border-t border-black pt-4 text-center lg:mt-6 lg:pt-5">
					<p className="title text-base text-[var(--abs-dark)]">©2026 - ABS Servicios Industriales</p>
				</div>
			</div>
		</div>
	);
}

function DesktopPage() {
	return (
		<FullPageWrapper>
			<ExternalSectionNavigator />
			<Section>
				<HomeSectionContent />
			</Section>
			<Section>
				<ServicesSectionContent />
			</Section>
			<Section>
				<ProcessSectionContent />
			</Section>
			{portfolioPages.map((pageItems, pageIndex) => (
				<Section key={`portfolio-page-${pageIndex}`}>
					<PortfolioSectionContent pageItems={pageItems} pageIndex={pageIndex} />
				</Section>
			))}
			<Section>
				<ContactSectionContent />
			</Section>
			<ScrollIndicator />
			<ServicesScrollIndicator />
			<ProcessScrollIndicator />
			<PortfolioScrollIndicator />
		</FullPageWrapper>
	);
}

function MobilePage() {
	return (
		<div className="min-h-screen w-full overflow-x-hidden">
			<MobileSectionNavigator />
			<section id="home" className="scroll-mt-16">
				<HomeSectionContent mobile />
			</section>
			<section id="about" className="scroll-mt-16">
				<ServicesSectionContent />
			</section>
			<section id="process" className="scroll-mt-16">
				<ProcessSectionContent />
			</section>
			<section id="projects" className="scroll-mt-16">
				<PortfolioSectionContent pageItems={portfolioItems} mobile />
			</section>
			<section id="contact" className="scroll-mt-16">
				<ContactSectionContent />
			</section>
		</div>
	);
}

export default function MyPage() {
	const isMobile = useIsMobile();
	return isMobile ? <MobilePage /> : <DesktopPage />;
}
