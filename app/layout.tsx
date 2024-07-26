import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import Nav from "@/components/Nav/Nav";

const inter = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
})

export const metadata: Metadata = {
	title: "Password Keeper",
	description: "Keep your passwords safe",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(
				"min-h-screen bg-background font-sans antialiased",
				inter.variable
			)}>
				<Nav />
				<main className="p-10">{children}</main>
			</body>
		</html>
	);
}
