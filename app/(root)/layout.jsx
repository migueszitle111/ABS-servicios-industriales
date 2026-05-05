"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { FullPageProvider } from "@alvalens/react-fullpage-snap";

function useFullPageEnabled() {
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 1024px)");
		const update = () => setEnabled(mediaQuery.matches);
		update();

		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener("change", update);
			return () => mediaQuery.removeEventListener("change", update);
		}

		mediaQuery.addListener(update);
		return () => mediaQuery.removeListener(update);
	}, []);

	return enabled;
}

export default function RootLayout({ children }) {
	const fullPageEnabled = useFullPageEnabled();

	return (
		<FullPageProvider
			anchors={[
				"home",
				"about",
				"process",
				"projects",
				"projects-2",
				"projects-3",
				"projects-4",
				"projects-5",
				"projects-6",
				"projects-7",
				"contact",
			]}
			scrollingSpeed={1000}
			menu="#sidebar"
			lockAnchors={false}
			keyboardScrolling={fullPageEnabled}
			touchScrolling={fullPageEnabled}
			wheelScrolling={fullPageEnabled}>
			<Sidebar />
			{children}
		</FullPageProvider>
	);
}
