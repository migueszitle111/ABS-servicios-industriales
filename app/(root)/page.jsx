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
	"Portones y accesos de alto uso",
	"Cercos y cerramientos perimetrales",
	"Estructuras y soportes metálicos",
	"Moldes y elementos especiales para obra",
];

const services = [
	{
		title: "Portones y accesos",
		description:
			"Fabricación de portones corredizos, abatibles y seccionales para naves, locales y privados industriales.",
	},
	{
		title: "Cercos y protección perimetral",
		description:
			"Cercos metálicos, mallas, barandales y soluciones de seguridad para delimitar y proteger áreas de trabajo.",
	},
	{
		title: "Estructuras y soportes",
		description:
			"Armado de estructuras, refuerzos, marcos y soportes metálicos para equipo, tuberías, racks y más.",
	},
	{
		title: "Moldes y piezas especiales",
		description:
			"Diseño y fabricación de elementos metálicos especiales para colado, producción o procesos de obra civil.",
	},
];

const workflowSteps = [
	{
		number: "01",
		title: "Levantamiento y revisión",
		description:
			"Revisamos en sitio o con planos las necesidades del proyecto y tomamos medidas precisas.",
	},
	{
		number: "02",
		title: "Propuesta y cotización",
		description:
			"Definimos materiales, espesores, acabados y tiempos de entrega, y presentamos una cotización clara.",
	},
	{
		number: "03",
		title: "Fabricación y control",
		description:
			"Fabricación en taller con control de calidad en cortes, soldadura y armado de cada elemento.",
	},
	{
		number: "04",
		title: "Instalación y entrega",
		description:
			"Montaje en sitio, revisión final en conjunto con el cliente y entrega del trabajo terminado.",
	},
];

const portfolioItems = [
	{
		title: "Rack acolchonado para equipos sensibles",
		image: "/image/portafolio/1Rackacolchonado.jpg",
		description:
			"Estructura tubular con brazos acolchonados para transporte interno de equipos médicos y paneles pintados, diseñada para evitar rayones y golpes durante el movimiento en planta.",
		tech: ["Racks industriales", "Transporte interno", "Protección"],
	},
	{
		title: "Módulo perimetral para cilindros de gas",
		image: "/image/portafolio/2Moduloperimetral.jpg",
		description:
			"Cerramiento metálico con malla y recubrimiento para resguardo de cilindros industriales, cumpliendo requisitos de seguridad y señalización en exteriores de planta.",
		tech: ["Cercos", "Seguridad", "Exterior"],
	},
	{
		title: "Rack compacto para paneles y cubiertas",
		image: "/image/portafolio/3Rackcompactoparapaneles.jpg",
		description:
			"Carro metálico de baja altura con niveles acolchonados para manejo de piezas recubiertas, optimizando el flujo entre estaciones de trabajo.",
		tech: ["Paneles", "Cubiertas", "Flujo"],
	},
	{
		title: "Plataforma de ensamble con rodillos",
		image: "/image/portafolio/4Plataformadeensamble.jpg",
		description:
			"Plataforma metálica con escaleras, barandal y sistema de rodillos para línea de ensamble, diseñada para trabajo continuo y acceso seguro del personal.",
		tech: ["Rodillos", "Ensamble", "Barandal"],
	},
	{
		title: "Rack para paneles y perfiles metálicos",
		image: "/image/portafolio/5Rackparapaneles.jpg",
		description:
			"Sistema de almacenamiento con múltiples niveles para paneles y perfiles, con ruedas para facilitar la alimentación de producción en áreas amplias.",
		tech: ["Almacenamiento", "Perfiles", "Ruedas"],
	},
	{
		title: "Carro contenedor con malla de protección",
		image: "/image/portafolio/6Carrocontenedorconmalla.jpg",
		description:
			"Carro con malla metálica y niveles inferiores para transporte y resguardo de piezas, evitando caídas y manteniendo el área de trabajo ordenada.",
		tech: ["Malla", "Contenedor", "Orden"],
	},
	{
		title: "Carro porta-puertas y paneles verticales",
		image: "/image/portafolio/7Carroportapuertas.jpg",
		description:
			"Estructura móvil para manejo de puertas y paneles altos, con guías y rodajas para desplazar las piezas de forma segura entre procesos.",
		tech: ["Puertas", "Paneles", "Rodajas"],
	},
	{
		title: "Guardas perimetrales para área de proceso",
		image: "/image/portafolio/8Guardasperimetralesparaarea.jpg",
		description:
			"Cerramiento con malla y acceso por puertas para separar equipos, tambos y líneas de proceso del área de circulación del personal.",
		tech: ["Guardas", "Malla", "Accesos"],
	},
	{
		title: "Mesa rodante de trabajo para armado",
		image: "/image/portafolio/9Mesarodantedetrabajo.jpg",
		description:
			"Mesa industrial de gran longitud con estructura reforzada y ruedas de alto desempeño para armado y movimiento de piezas de gran formato.",
		tech: ["Mesa", "Armado", "Ruedas"],
	},
	{
		title: "Dispositivo de sujeción para cortes y armado",
		image: "/image/portafolio/10Dispositivodesujecionparacortes.jpg",
		description:
			"Jig metálico de precisión montado sobre mesa, diseñado para fijar piezas a 90 grados y agilizar operaciones repetitivas de corte, barrenado o armado.",
		tech: ["Jig", "Corte", "Armado"],
	},
	{
		title: "Rack para materiales y perfiles largos",
		image: "/image/portafolio/11Rackparamaterialesyperfiles.jpg",
		description:
			"Estructura metálica reforzada diseñada para el manejo de piezas alargadas, ideal para líneas de producción con movimiento continuo de perfiles y componentes de gran longitud.",
		tech: ["Perfiles", "Materiales", "Manejo"],
	},
	{
		title: "Plantilla de aluminio para posicionamiento",
		image: "/image/portafolio/12Plantilladealuminio.jpg",
		description:
			"Jig de precisión fabricado en aluminio, utilizado para asegurar posicionamiento exacto en procesos repetitivos de corte, ensamble o verificación dimensional dentro de planta.",
		tech: ["Aluminio", "Posicionamiento", "Precisión"],
	},
	{
		title: "Carro reforzado para estructuras metálicas",
		image: "/image/portafolio/13Carroreforzado.jpg",
		description:
			"Carro industrial a la medida con bastidor tubular reforzado, ruedas grado industrial y área abierta para manejar estructuras metálicas de gran tamaño con seguridad y movilidad.",
		tech: ["Bastidor", "Transporte", "Estructuras"],
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

function PortfolioCard({ item, index, mobile = false }) {
	const [isTouchActive, setIsTouchActive] = useState(false);
	const showImageOnTouch = mobile && isTouchActive;

	return (
		<motion.div
			className={`group/tes relative z-10 flex w-full flex-col items-start justify-center overflow-hidden bg-[var(--abs-dark)] ${
				mobile ? "aspect-[1/1.05]" : "aspect-[1.18/1]"
			}`}
			initial={{ opacity: 0, x: -200 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ delay: index * 0.03, type: "spring" }}
			onTouchStart={mobile ? () => setIsTouchActive(true) : undefined}
			onTouchEnd={mobile ? () => setIsTouchActive(false) : undefined}
			onTouchCancel={mobile ? () => setIsTouchActive(false) : undefined}>
			<Image
				src={item.image}
				alt={item.title}
				fill
				unoptimized
				className={`object-cover object-center transition-all duration-500 ease ${
					showImageOnTouch ? "opacity-100" : "opacity-20 group-hover/tes:opacity-100"
				}`}
				sizes="(max-width: 768px) 100vw, 50vw"
			/>
			<div
				className={`absolute inset-0 transition-all duration-500 ease ${
					showImageOnTouch
						? "bg-[color:rgba(17,25,35,0.06)]"
						: "bg-[color:rgba(5,5,5,0.62)] group-hover/tes:bg-[color:rgba(17,25,35,0.2)] lg:bg-[color:rgba(17,25,35,0.42)]"
				}`}
			/>
			<div
				className={`absolute inset-0 z-10 flex flex-col justify-end px-5 pb-6 text-center transition-all duration-500 ease lg:justify-center lg:px-8 lg:pb-0 ${
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
							Herrería industrial y estructuras metálicas para proyectos especializados.
							Fabricamos y montamos soluciones metálicas a la medida para empresas,
							comercios e industria con seriedad, calidad y cumplimiento en cada
							proyecto.
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
								<h2 className="mt-3 text-[1.85rem] font-bold leading-tight">
									Especialistas en herrería industrial
								</h2>
							</div>
							<div className="space-y-4">
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
												Herrería industrial · Tijuana, B.C.
											</p>
										</div>
									</div>
								</div>
								<ul className="space-y-2.5">
									{heroHighlights.map((item) => (
										<li key={item} className="flex items-start gap-3">
											<FontAwesomeIcon
												icon={faCheck}
												className="mt-1 text-sm text-[var(--abs-red)]"
											/>
											<span className="text-[0.95rem] leading-relaxed">{item}</span>
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
						Herrería industrial y estructuras metálicas para proyectos especializados.
						Fabricamos y montamos soluciones metálicas a la medida para empresas,
						comercios e industria con seriedad, calidad y cumplimiento en cada proyecto.
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
								<h2 className="mt-4 text-4xl font-bold leading-tight">
									Especialistas en herrería industrial
								</h2>
							</div>
							<div className="space-y-4">
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
												Herrería industrial · Tijuana, B.C.
											</p>
										</div>
									</div>
								</div>
								<ul className="space-y-2.5">
									{heroHighlights.map((item) => (
										<li key={item} className="flex items-start gap-3">
											<FontAwesomeIcon
												icon={faCheck}
												className="mt-1 text-sm text-[var(--abs-red)]"
											/>
											<span className="text-base leading-relaxed">{item}</span>
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
							className="min-h-[138px] rounded-2xl border border-gray-200 bg-white p-4 shadow-sm lg:min-h-[160px] lg:p-6"
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ delay: index * 0.08, type: "spring" }}>
							<h3 className="mb-2 text-xl font-bold text-black lg:mb-3 lg:text-2xl">
								{service.title}
							</h3>
							<p className="title text-sm leading-[1.55rem] tracking-wide text-[var(--abs-muted)] lg:text-base lg:leading-[1.7rem] lg:tracking-wider">
								{service.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}

function ProcessSectionContent() {
	return (
		<div className="w-full px-5 pt-20 pb-8 lg:h-screen lg:w-screen lg:overflow-hidden lg:px-10 lg:py-20">
			<div className="mx-auto flex max-w-7xl flex-col justify-center">
				<motion.h1
					className="px-2 text-[2.2rem] font-bold text-black lg:px-0 lg:text-6xl"
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.1, type: "spring" }}>
					¿Cómo trabajamos?
				</motion.h1>
				<Hr />
				<motion.p
					className="title mt-2 mb-4 max-w-5xl text-[0.97rem] leading-[1.6rem] tracking-wide text-[var(--abs-muted)] lg:mb-5 lg:text-lg lg:tracking-wider"
					initial={{ x: -100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.2, type: "spring" }}>
					Un proceso claro para que sepas en todo momento qué estamos haciendo con tu proyecto.
				</motion.p>
				<div className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2">
					{workflowSteps.map((step, index) => (
						<motion.div
							key={step.number}
							className="min-h-[148px] rounded-2xl border border-gray-200 bg-white p-4 shadow-sm lg:min-h-[170px] lg:p-6"
							initial={{ y: 40, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							transition={{ delay: index * 0.08, type: "spring" }}>
							<p className="mb-1 text-base tracking-[0.2em] text-[var(--abs-red)] lg:mb-2 lg:text-lg lg:tracking-[0.24em]">
								{step.number}
							</p>
							<h3 className="mb-2 text-xl font-bold leading-tight text-black lg:mb-3 lg:text-2xl">
								{step.title}
							</h3>
							<p className="title text-sm leading-[1.55rem] tracking-wide text-[var(--abs-muted)] lg:text-base lg:leading-[1.7rem] lg:tracking-wider">
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
							<PortfolioCard key={item.title} item={item} index={index} mobile />
						))}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={`h-screen w-screen px-10 ${pageIndex === 0 ? "pt-22 pb-10" : "py-11"}`}>
			<div className="mx-auto flex h-full max-w-[96rem] flex-col justify-center">
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
						<PortfolioCard key={item.title} item={item} index={pageIndex * 2 + index} />
					))}
				</div>
			</div>
		</div>
	);
}

function ContactSectionContent() {
	return (
		<div className="w-full px-5 pt-20 pb-8 lg:h-screen lg:w-screen lg:px-10 lg:py-16">
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
