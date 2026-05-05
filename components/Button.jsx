const Button = ({ children, variation, ...props }) => (
	<button
		{...props}
		className={`title inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 shadow-md transition duration-300 ease-in-out sm:mr-3 sm:w-auto sm:px-8 sm:py-2 ${
			variation === "primary"
				? "bg-[var(--abs-red)] hover:bg-transparent border-transparent hover:border-[var(--abs-red)] border-2 text-white hover:text-[var(--abs-red)] box-border"
				: "transparent border-2 border-[var(--abs-dark)] text-[var(--abs-dark)] hover:bg-[var(--abs-dark)] hover:text-white box-border"
		}`}>
		{children}
	</button>
);

export default Button;
