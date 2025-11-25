import React from "react";

const Expertise: React.FC = () => {
	return (
		<section id='expertise' className='py-32 bg-linear-to-b from-white to-secondary/30'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Heading + intro */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance'>Our Expertise</h2>
					<p className='text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty mb-4'>Behind every service, there is a specialist. At Conformity Globe, we are proud of the expertise our people bring. Each service area — whether conformity assessment, validation &amp; verification, GHG, or training — is delivered by professionals with deep knowledge and hands-on experience.</p>
					<p className='text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed'>
						<span className='text-primary font-semibold'>✨ Our commitment is simple:</span> to connect you with the right people who can provide clarity, guidance, and confidence.
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto'>
					{/* Circular graphic */}
					<div className='flex justify-center '>
						<div className='relative w-72 h-72 md:w-96 md:h-96'>
							{/* Outer ring */}
							<div className='absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-[spin_40s_linear_infinite]' />
							<div className='absolute inset-6 rounded-full border border-dashed border-primary/10 animate-[spin_55s_linear_infinite_reverse]' />

							{/* Center circle */}
							<div className='absolute inset-1/4 md:inset-[22%] flex items-center justify-center'>
								<div className='w-full h-full rounded-full bg-linear-to-br from-primary to-primary/80 shadow-2xl flex flex-col items-center justify-center border-4 border-background'>
									<div className='text-2xl md:text-3xl font-bold text-white text-center'>Expertise</div>
								</div>
							</div>

							{/* Top – Conformity */}
							<div className='absolute' style={{ left: "50%", top: "4%", transform: "translate(-50%, -50%)" }}>
								<div className='group relative'>
									<div className='absolute inset-0 bg-primary/15 rounded-full blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity' />
									<div className='relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border-2 border-primary/20 shadow-lg flex items-center justify-center text-center px-3'>
										<p className='text-xs md:text-sm font-semibold text-foreground'>
											Conformity
											<br />
											Assessment
										</p>
									</div>
								</div>
							</div>

							{/* Right – VVB */}
							<div className='absolute' style={{ right: "1%", top: "50%", transform: "translate(50%, -50%)" }}>
								<div className='group relative'>
									<div className='absolute inset-0 bg-primary/15 rounded-full blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity' />
									<div className='relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border-2 border-primary/20 shadow-lg flex items-center justify-center text-center px-3'>
										<p className='text-xs md:text-sm font-semibold text-foreground'>
											Validation &amp;
											<br />
											Verification (VVB)
										</p>
									</div>
								</div>
							</div>

							{/* Bottom – GHG */}
							<div className='absolute' style={{ left: "50%", bottom: "1%", transform: "translate(-50%, 50%)" }}>
								<div className='group relative'>
									<div className='absolute inset-0 bg-primary/15 rounded-full blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity' />
									<div className='relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border-2 border-primary/20 shadow-lg flex items-center justify-center text-center px-3'>
										<p className='text-xs md:text-sm font-semibold text-foreground'>
											Greenhouse
											<br />
											Gas (GHG)
										</p>
									</div>
								</div>
							</div>

							{/* Left – Training */}
							<div className='absolute' style={{ left: "1%", top: "50%", transform: "translate(-50%, -50%)" }}>
								<div className='group relative'>
									<div className='absolute inset-0 bg-primary/15 rounded-full blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity' />
									<div className='relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border-2 border-primary/20 shadow-lg flex items-center justify-center text-center px-3'>
										<p className='text-xs md:text-sm font-semibold text-foreground'>
											Training &
											<br />
											Skills
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Text bullets (optional but keeps layout rich) */}
					<div className='space-y-6'>
						<div className='bg-white rounded-2xl border border-border/40 shadow-sm p-6'>
							<h3 className='text-lg font-semibold text-foreground mb-2'>Specialists in Every Service Area</h3>
							<p className='text-sm text-muted-foreground leading-relaxed'>Conformity, VVB, GHG, and training programs are all led by professionals who bring both international experience and sector-specific insight.</p>
						</div>
						<div className='bg-white rounded-2xl border border-border/40 shadow-sm p-6'>
							<h3 className='text-lg font-semibold text-foreground mb-2'>Clarity, Guidance &amp; Confidence</h3>
							<p className='text-sm text-muted-foreground leading-relaxed'>From system design to accreditation journeys, our role is to translate complex requirements into clear, practical steps — so your teams can move forward with confidence.</p>
						</div>
						<div className='bg-white rounded-2xl border border-border/40 shadow-sm p-6'>
							<h3 className='text-lg font-semibold text-foreground mb-2'>People-Centered Expertise</h3>
							<p className='text-sm text-muted-foreground leading-relaxed'>We match you with the right specialist for your context, ensuring that every engagement is relevant, focused, and outcome-driven.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Expertise;
