import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { RootProvider } from "fumadocs-ui/provider";
import "@/app/global.css";
import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<RootProvider>
					<DocsLayout tree={source.pageTree} {...baseOptions()}>
						{children}
					</DocsLayout>
				</RootProvider>
			</body>
		</html>
	);
}
