import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})
// font-normal: 400
// font-medium: 500
// font-semibold:600
// font-bold: 700


export const metadata: Metadata = {
	title: 'Task Manager',
	description: 'Manage your task in one place',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	)
}
