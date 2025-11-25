import React from "react";

function Services() {
	return (
		<section id='services' className='py-24 bg-background'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='mb-16'>
					<h2 className='text-4xl sm:text-5xl font-bold text-foreground text-balance mb-6 relative inline-block pb-4'>
						Our Services<div className='absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary via-primary/60 to-transparent rounded-full'></div>
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed'>Comprehensive solutions delivered by specialized professionals</p>
				</div>
				<div className='grid md:grid-cols-2 gap-8'>
					<div className='group relative bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden'>
						<div className='absolute left-0 top-0 bottom-0 w-1 border-blue-500 transition-all duration-300 group-hover:w-2'></div>
						<div className='p-8'>
							<h3 className='text-2xl font-bold text-foreground mb-4 leading-tight'>Conformity Assessment</h3>
							<p className='text-muted-foreground leading-relaxed mb-6'>We guide organizations to strengthen their systems and operations. Through structured assessments, we help identify areas for improvement, align practices with requirements, and build confidence across stakeholders.</p>
							<span>✨ Our experts ensure that conformity is not just about meeting obligations, but about driving trust and consistency in every process.</span>
						</div>
					</div>
					<div className='group relative bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden'>
						<div className='absolute left-0 top-0 bottom-0 w-1 border-green-500 transition-all duration-300 group-hover:w-2'></div>
						<div className='p-8'>
							<h3 className='text-2xl font-bold text-foreground mb-4 leading-tight'>Validation &amp; Verification (VVB)</h3>
							<p className='text-muted-foreground leading-relaxed mb-6'>Independent validation and verification are vital to building trust in any organization's claims, systems, or reports. We provide VVB services that enhance credibility, improve transparency, and support decision-making at all levels.</p>
							<span>✨ Whether it's verifying performance, confirming sustainability data, or validating key processes — our team ensures accuracy, impartiality, and clarity.</span>
						</div>
					</div>
					<div className='group relative bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden'>
						<div className='absolute left-0 top-0 bottom-0 w-1 border-emerald-500 transition-all duration-300 group-hover:w-2'></div>
						<div className='p-8'>
							<h3 className='text-2xl font-bold text-foreground mb-4 leading-tight'>Greenhouse Gas (GHG) Services</h3>
							<p className='text-muted-foreground leading-relaxed mb-6'>Managing greenhouse gas (GHG) emissions is more than an obligation — it's a commitment to the future. We help organizations measure, manage, and verify their GHG-related activities with expert guidance.</p>
							<span>✨ Our GHG services support organizations in demonstrating responsibility, meeting reporting needs, and taking meaningful steps toward sustainability.</span>
						</div>
					</div>
					<div className='group relative bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden'>
						<div className='absolute left-0 top-0 bottom-0 w-1 border-purple-500 transition-all duration-300 group-hover:w-2'></div>
						<div className='p-8'>
							<h3 className='text-2xl font-bold text-foreground mb-4 leading-tight'>Training &amp; Skills Development</h3>
							<p className='text-muted-foreground leading-relaxed mb-6'>Knowledge empowers progress. We design and deliver training programs that strengthen technical skills, enhance professional competence, and support long-term growth.</p>
							<span>✨ Our training is practical, engaging, and delivered by professionals who bring real-world expertise to every program.</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
