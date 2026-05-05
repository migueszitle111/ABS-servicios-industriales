import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
	),
	title: "ABS | Servicios Industriales",
	description:
		"Herreria industrial y estructuras metalicas para proyectos especializados en Tijuana, Baja California.",
	applicationName: "ABS",

	keywords: [
		"ABS",
		"ABS Servicios Industriales",
		"herreria industrial",
		"estructuras metalicas",
		"portones industriales",
		"cercos metalicos",
		"Tijuana",
		"Baja California",
	],

	openGraph: {
		type: "website",
		title: "ABS | Servicios Industriales",
		siteName: "ABS Servicios Industriales",
		description:
			"Herreria industrial y estructuras metalicas para proyectos especializados en Tijuana, Baja California.",
		images: [
			{
				url: "/og-image-rev.png",
				alt: "ABS Servicios Industriales",
				width: 1200,
				height: 630,
			},
		],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "ABS Servicios Industriales",
	description:
		"Herreria industrial y estructuras metalicas para proyectos especializados.",
	areaServed: "Tijuana, Baja California",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Tijuana",
		addressRegion: "Baja California",
		addressCountry: "MX",
	},
	email: "herreriaavilamxbc@gmail.com",
	telephone: "+52 664 459 1228",
};

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
