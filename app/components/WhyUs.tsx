import React from "react";
import FadeUp from "./FadeUp";

const WhyChooseUs: React.FC = () => {
	return (
		<section id='why-us' className='py-32 bg-linear-to-b from-white to-secondary/30'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<FadeUp className='text-center mb-20' stagger>
					<h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance'>Why Choose Conformity Globe</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty'>Behind every service, there is a specialist. We are proud of the expertise our people bring.</p>
					<p className='mt-4 text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed'>
						<span className='text-primary font-semibold'>✨ When you work with Conformity Globe,</span> you’re not just getting a service — you’re building a long-term partnership for success.
					</p>
				</FadeUp>

				<FadeUp className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto' stagger>
					{/* Practical Solutions */}
					<div className='group relative overflow-hidden rounded-3xl bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/40 hover:border-border/20'>
						<div className='absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-primary/8 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
						<div className='relative'>
							<div className='flex items-start gap-6'>
								<div className='shrink-0'>
									<div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300 border border-primary/10'>
										{/* Action icon */}
										<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-8 w-8 text-primary group-hover:text-white transition-colors'>
											<circle cx='12' cy='12' r='10'></circle>
											<circle cx='12' cy='12' r='6'></circle>
											<circle cx='12' cy='12' r='2'></circle>
										</svg>
									</div>
								</div>
								<div className='flex-1 pt-1'>
									<h3 className='text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight'>Practical Solutions</h3>
									<p className='text-muted-foreground leading-relaxed text-[17px]'>We don’t just advise — we provide actionable steps that make a real difference.</p>
								</div>
							</div>
						</div>
					</div>

					{/* Expert People */}
					<div className='group relative overflow-hidden rounded-3xl bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/40 hover:border-border/20'>
						<div className='absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-primary/8 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
						<div className='relative'>
							<div className='flex items-start gap-6'>
								<div className='shrink-0'>
									<div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300 border border-primary/10'>
										{/* People icon */}
										<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-8 w-8 text-primary group-hover:text-white transition-colors'>
											<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'></path>
											<circle cx='9' cy='7' r='4'></circle>
											<path d='M22 21v-2a4 4 0 0 0-3-3.87'></path>
											<path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
										</svg>
									</div>
								</div>
								<div className='flex-1 pt-1'>
									<h3 className='text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight'>Expert People</h3>
									<p className='text-muted-foreground leading-relaxed text-[17px]'>Each service is delivered by specialized professionals with deep knowledge and real-world experience.</p>
								</div>
							</div>
						</div>
					</div>

					{/* Balanced Approach */}
					<div className='group relative overflow-hidden rounded-3xl bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/40 hover:border-border/20'>
						<div className='absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-primary/8 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
						<div className='relative'>
							<div className='flex items-start gap-6'>
								<div className='shrink-0'>
									<div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300 border border-primary/10'>
										{/* Balance icon */}
										<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-8 w-8 text-primary group-hover:text-white transition-colors'>
											<path d='m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526'></path>
											<circle cx='12' cy='8' r='6'></circle>
										</svg>
									</div>
								</div>
								<div className='flex-1 pt-1'>
									<h3 className='text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight'>Balanced Approach</h3>
									<p className='text-muted-foreground leading-relaxed text-[17px]'>We combine technical knowledge with practical application, ensuring solutions that work in real environments.</p>
								</div>
							</div>
						</div>
					</div>

					{/* Trust & Transparency */}
					<div className='group relative overflow-hidden rounded-3xl bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/40 hover:border-border/20'>
						<div className='absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-primary/8 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
						<div className='relative'>
							<div className='flex items-start gap-6'>
								<div className='shrink-0'>
									<div className='w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300 border border-primary/10'>
										{/* Transparency / growth icon */}
										<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='h-8 w-8 text-primary group-hover:text-white transition-colors'>
											<polyline points='22 7 13.5 15.5 8.5 10.5 2 17'></polyline>
											<polyline points='16 7 22 7 22 13'></polyline>
										</svg>
									</div>
								</div>
								<div className='flex-1 pt-1'>
									<h3 className='text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight'>Trust &amp; Transparency</h3>
									<p className='text-muted-foreground leading-relaxed text-[17px]'>Our methods are clear, reliable, and client-focused — so you always know how decisions are made and results are achieved.</p>
								</div>
							</div>
						</div>
					</div>
				</FadeUp>
			</div>
		</section>
	);
};

export default WhyChooseUs;
