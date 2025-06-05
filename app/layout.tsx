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
			<body className={`${poppins.className} antialiased`}>
        <div className='w-54 h-54 bg-gradient-to-r from-blue-500 to-violet-500 absolute left-1/2 -translate-x-1/2 blur-3xl opacity-30 top-2'></div>
        {children}</body>
		</html>
	)
}
