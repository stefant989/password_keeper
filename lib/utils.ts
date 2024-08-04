import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const randomStars = () => {
	const randomLengts = Math.floor(Math.random() * 20)
	return '*'.repeat(randomLengts)
}