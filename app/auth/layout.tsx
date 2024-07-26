import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
	title: "Password Keeper",
	description: "Login or Register",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex justify-center items-start w-full h-screen">
			{children}
		</main>
	)
}
