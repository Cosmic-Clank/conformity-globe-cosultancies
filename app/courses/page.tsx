import React from "react";
import { LuArrowRight, LuAward, LuCircleCheck, LuFileCheck, LuGraduationCap, LuLeaf, LuMapPin, LuUsers } from "react-icons/lu";
import Navbar from "../components/Navbar";

function Course() {
	return (
		<main className='min-h-screen font-sans'>
			<Navbar />
			<section id='course' className='py-32 bg-white'>
				<div className='w-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance leading-tight relative flex justify-center items-center'>Course Catalog</div>
			</section>
		</main>
	);
}

export default Course;
