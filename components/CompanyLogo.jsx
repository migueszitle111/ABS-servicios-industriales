"use client";

import { useState } from "react";
import Image from "next/image";

function LogoMark({ className = "", textClassName = "" }) {
	return (
		<div
			className={`relative flex items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ${className}`}>
			<div className="pointer-events-none absolute inset-0 rounded-full border-[3px] border-[var(--abs-red)] [clip-path:inset(0_0_49%_0)]" />
			<div className="pointer-events-none absolute inset-0 rounded-full border-[3px] border-[var(--abs-dark)] [clip-path:inset(49%_0_0_0)]" />
			<span
				className={`relative z-10 font-black tracking-[-0.06em] text-[var(--abs-ink)] ${textClassName}`}>
				ABS
			</span>
		</div>
	);
}

function CompactFallback({ theme = "light", className = "" }) {
	const isDark = theme === "dark";

	return (
		<div className={`flex items-center gap-3 ${className}`}>
			<LogoMark
				className="h-14 w-14 shrink-0"
				textClassName="text-[1.45rem]"
			/>
			<div className={isDark ? "text-white" : "text-[var(--abs-ink)]"}>
				<p className="text-xl font-black leading-none">ABS Servicios Industriales</p>
				<p
					className={`mt-1 text-sm font-semibold ${
						isDark ? "text-white/75" : "text-[var(--abs-muted)]"
					}`}>
					Herrería industrial · Tijuana, B.C.
				</p>
			</div>
		</div>
	);
}

export default function CompanyLogo({
	variant = "mark",
	theme = "light",
	className = "",
}) {
	const [imageError, setImageError] = useState(false);
	const fullLogoPath = "/image/branding/logo-cropped.png";

	if (variant === "full" || variant === "compact") {
		if (!imageError) {
			return (
				<Image
					src={fullLogoPath}
					alt="ABS Servicios Industriales"
					width={1157}
					height={1023}
					className={className}
					onError={() => setImageError(true)}
					priority={variant === "full"}
				/>
			);
		}

		return <CompactFallback theme={theme} className={className} />;
	}

	return (
		<LogoMark
			className={className || "h-12 w-12"}
			textClassName="text-[1.35rem]"
		/>
	);
}
