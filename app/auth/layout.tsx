import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
	title: "Password Keeper",
	description: "Authorization Page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex justify-center items-center w-full h-screen">
			{children}
		</main>
	)
}
