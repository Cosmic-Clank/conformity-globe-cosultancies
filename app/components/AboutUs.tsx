import React from "react";
import { LuArrowRight, LuAward, LuCircleCheck, LuFileCheck, LuGraduationCap, LuLeaf, LuMapPin, LuUsers } from "react-icons/lu";

function AboutUs() {
	return (
		<section id='about' className='py-32 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-20 items-center'>
					<div>
						<h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-8 text-balance leading-tight relative inline-block pb-4'>
							Your partner in compliance, credibility, and competence<div className='absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary via-primary/60 to-transparent rounded-full'></div>
						</h2>
						<div className='grid grid-cols-3 gap-3 mb-10'>
							<div className='text-center p-5 bg-secondary/40 rounded-2xl border border-border/30 hover:border-primary/20 transition-colors'>
								<LuMapPin size={24} className='h-6 w-6 text-primary mx-auto mb-3' />
								<p className='font-bold text-foreground text-sm mb-1'>Dubai-based</p>
								<p className='text-xs text-muted-foreground leading-snug'>Serving UAE, GCC &amp; International</p>
							</div>
							<div className='text-center p-5 bg-secondary/40 rounded-2xl border border-border/30 hover:border-primary/20 transition-colors'>
								<LuUsers size={24} className='h-6 w-6 text-primary mx-auto mb-3' />
								<p className='font-bold text-foreground text-sm mb-1'>Expert Team</p>
								<p className='text-xs text-muted-foreground leading-snug'>Specialized professionals</p>
							</div>
							<div className='text-center p-5 bg-secondary/40 rounded-2xl border border-border/30 hover:border-primary/20 transition-colors'>
								<LuAward size={24} className='lucide lucide-award h-6 w-6 text-primary mx-auto mb-3' />
								<p className='font-bold text-foreground text-sm mb-1'>Trusted Partner</p>
								<p className='text-xs text-muted-foreground leading-snug'>Government &amp; private sector</p>
							</div>
						</div>
						<div className='space-y-5 mb-10'>
							<div className='flex gap-4 items-start'>
								<div className='w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0'></div>
								<p className='text-lg text-muted-foreground leading-relaxed'>
									Conformity Globe L.L.C is based in Dubai, providing trusted services in <span className='font-semibold text-foreground'>conformity assessment, validation and verification (VVB), and greenhouse gas (GHG) support.</span> We also deliver professional training that empowers individuals and organizations to meet today’s challenges.
								</p>
							</div>
							<div className='flex gap-4 items-start'>
								<div className='w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0'></div>
								<p className='text-lg text-muted-foreground leading-relaxed'>
									What makes us different is our team of <span className='font-semibold text-foreground'>expert professionals,</span> each specialized in their respective fields. From assessing systems, verifying data, or guiding on environmental impacts — our people bring the knowledge and reliability your organization can trust.
								</p>
							</div>
							<div className='flex gap-4 items-start'>
								<div className='w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0'></div>
								<p className='text-lg text-muted-foreground leading-relaxed'>
									<span className='font-semibold text-foreground'>Expert professionals</span> specialized in their fields — bringing knowledge and reliability you can trust
								</p>
							</div>
						</div>
						<button data-slot='button' className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 has-[&gt;svg]:px-4 rounded-full shadow-sm hover:shadow-md transition-all">
							Learn More About Us
							<LuArrowRight size={24} className='ml-2 h-5 w-5' />
						</button>
					</div>
					<div className='grid grid-cols-2 gap-5'>
						<button className='group relative overflow-hidden rounded-2xl p-7 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white border-2 border-border/40 hover:border-transparent'>
							<div className='absolute inset-0 bg-linear-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
							<div className='relative z-10'>
								<div className='mb-4 p-2.5 bg-secondary/60 rounded-xl w-fit group-hover:bg-white/25 transition-colors'>
									<LuCircleCheck size={24} className='h-6 w-6 text-primary group-hover:text-white transition-colors' />
								</div>
								<h3 className='text-lg font-bold text-foreground mb-2 group-hover:text-white transition-colors leading-snug'>Conformity Assessment</h3>
								<p className='text-sm text-muted-foreground group-hover:text-white/95 transition-colors leading-relaxed'>System evaluations &amp; improvements</p>
							</div>
						</button>
						<button className='group relative overflow-hidden rounded-2xl p-7 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white border-2 border-border/40 hover:border-transparent'>
							<div className='absolute inset-0 bg-linear-to-br from-teal-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
							<div className='relative z-10'>
								<div className='mb-4 p-2.5 bg-secondary/60 rounded-xl w-fit group-hover:bg-white/25 transition-colors'>
									<LuFileCheck size={24} className='h-6 w-6 text-primary group-hover:text-white transition-colors' />
								</div>
								<h3 className='text-lg font-bold text-foreground mb-2 group-hover:text-white transition-colors leading-snug'>GHG &amp; VVB Capacity building</h3>
								<p className='text-sm text-muted-foreground group-hover:text-white/95 transition-colors leading-relaxed'>Independent VVB services</p>
							</div>
						</button>
						{/* <button className='group relative overflow-hidden rounded-2xl p-7 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white border-2 border-border/40 hover:border-transparent'>
							<div className='absolute inset-0 bg-linear-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
							<div className='relative z-10'>
								<div className='mb-4 p-2.5 bg-secondary/60 rounded-xl w-fit group-hover:bg-white/25 transition-colors'>
									<LuLeaf size={24} className='h-6 w-6 text-primary group-hover:text-white transition-colors' />
								</div>
								<h3 className='text-lg font-bold text-foreground mb-2 group-hover:text-white transition-colors leading-snug'>GHG Services</h3>
								<p className='text-sm text-muted-foreground group-hover:text-white/95 transition-colors leading-relaxed'>Greenhouse gas expertise</p>
							</div>
						</button> */}
						<button className='group relative overflow-hidden rounded-2xl p-7 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white border-2 border-border/40 hover:border-transparent'>
							<div className='absolute inset-0 bg-linear-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
							<div className='relative z-10'>
								<div className='mb-4 p-2.5 bg-secondary/60 rounded-xl w-fit group-hover:bg-white/25 transition-colors'>
									<LuGraduationCap size={24} className='h-6 w-6 text-primary group-hover:text-white transition-colors' />
								</div>
								<h3 className='text-lg font-bold text-foreground mb-2 group-hover:text-white transition-colors leading-snug'>Training Programs</h3>
								<p className='text-sm text-muted-foreground group-hover:text-white/95 transition-colors leading-relaxed'>Professional development</p>
							</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
