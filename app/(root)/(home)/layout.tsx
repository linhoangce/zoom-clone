import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Zoom",
	description: "A new type of meeting app powered with AI",
	icons: {
		icon: "/icons/logo.svg",
	},
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="relative">
			<Navbar />
			<div className="flex">
				<Sidebar />
				<section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:px-6 sm:px-6">
          <div className="w-full">
          {children}
          </div>
        </section>
			</div>
		</main>
	);
};

export default HomeLayout;
