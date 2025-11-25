import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Hero() {
	return (
		<section id='home' className='relative min-h-screen flex items-center pt-20'>
			<div className='absolute inset-0 z-0'>
				<Image src='/images/professional-business-meeting-with-global-sustaina.jpg' alt='Hero background' className='w-full h-full object-cover' width={512} height={512} />
				<div className='absolute inset-0 bg-linear-to-r from-primary/96 via-primary/85 to-primary/40'></div>
			</div>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full'>
				<div className='max-w-3xl'>
					<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.1] text-balance'>Expert Support in Conformity Assessment, Validation & Verification, and Greenhouse Gas Solutions.</h1>
					<p className='text-md sm:text-lg text-white/95 mb-10 leading-relaxed text-pretty font-light'>At Conformity Globe L.L.C, we help organizations strengthen compliance, build credibility, and move towards a sustainable future. Our expert professionals deliver reliable services in conformity assessment, VVB, GHG solutions, and professional training.</p>
					<div className='flex flex-col sm:flex-row gap-4'>
						<button data-slot='button' className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 has-[&gt;svg]:px-4 rounded-full bg-white text-primary hover:bg-white/95 text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all font-semibold">
							Explore Our Services
							<BsArrowRight />
						</button>
						<button data-slot='button' className="inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 has-[&gt;svg]:px-4 rounded-full border-2 border-white/90 text-white hover:bg-white/15 hover:border-white text-lg px-10 py-6 bg-white/5 backdrop-blur-sm font-semibold transition-all">
							Contact Us
						</button>
					</div>
				</div>
			</div>
			<div className='absolute bottom-10 left-1/2 -translate-x-1/2 z-10'>
				<div className='w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2'>
					<div className='w-1.5 h-3 bg-white/70 rounded-full animate-bounce'></div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
