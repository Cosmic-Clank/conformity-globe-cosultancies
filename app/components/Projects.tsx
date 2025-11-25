import Image from "next/image";
import React from "react";

const Projects: React.FC = () => {
	return (
		<section id='projects' className='py-24 bg-background'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Heading */}
				<div className='mb-16'>
					<h2 className='text-4xl sm:text-5xl font-bold text-foreground text-balance mb-8 relative inline-block pb-4'>
						Our Projects
						<div className='absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary via-primary/60 to-transparent rounded-full' />
					</h2>
					<p className='text-xl text-muted-foreground mb-8 max-w-4xl'>Proven Results for Labs, Regulators &amp; Manufacturers</p>

					{/* ISO circle */}
					<div className='mb-12 mt-12'>
						<div className='relative max-w-2xl mx-auto'>
							<div className='relative aspect-square'>
								{/* Center circle */}
								<div className='absolute inset-0 flex items-center justify-center'>
									<div className='w-32 h-32 md:w-40 md:h-40 rounded-full bg-linear-to-br from-primary to-primary/80 shadow-2xl flex flex-col items-center justify-center border-4 border-background'>
										<div className='text-4xl md:text-5xl font-bold text-white'>5</div>
										<div className='text-xs md:text-sm font-semibold text-white/90 text-center px-2'>
											ISO
											<br />
											Accreditations
										</div>
									</div>
								</div>

								{/* Spinning dashed rings */}
								<div className='absolute inset-0 rounded-full border-2 border-dashed border-primary/10 animate-[spin_60s_linear_infinite]' />
								<div className='absolute inset-8 rounded-full border border-dashed border-primary/5 animate-[spin_45s_linear_infinite_reverse]' />

								{/* Top */}
								<div
									className='absolute'
									style={{
										left: "50%",
										top: "5%",
										transform: "translate(-50%, -50%)",
									}}>
									<div className='group relative transition-all duration-500 scale-100 hover:scale-120 z-20'>
										<div className='absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110' />
										<div className='relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-background border-4 border-primary/20 shadow-2xl overflow-hidden group cursor-pointer'>
											<Image alt='ISO/IEC 17025' src='/images/iso-17025.png' fill loading='lazy' className='object-contain p-2 transition-transform duration-500 group-hover:scale-110' />
											<div className='absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full' />
										</div>
										<div className='group-hover:visible invisible absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-4 bg-background/95 backdrop-blur-sm border border-border rounded-xl shadow-2xl z-30 animate-in fade-in slide-in-from-top-2 duration-300'>
											<div className='text-sm font-bold text-foreground mb-1'>ISO/IEC 17025</div>
											<div className='text-xs font-semibold text-primary mb-2'>Testing &amp; Calibration</div>
											<div className='text-xs text-muted-foreground leading-relaxed'>Accredited for competence in testing and calibration laboratories</div>
											<div className='absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-border'></div>
										</div>
									</div>
								</div>

								{/* Right-top */}
								<div
									className='absolute'
									style={{
										left: "92.79754323328191%",
										top: "36.094235253127366%",
										transform: "translate(-50%, -50%)",
									}}>
									<div className='group relative transition-all duration-500 scale-100 hover:scale-120 z-20'>
										<div className='absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110' />
										<div className='relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-background border-4 border-primary/20 shadow-2xl overflow-hidden group cursor-pointer'>
											<Image alt='ISO/IEC 17020' src='/images/iso-17020.png' fill loading='lazy' className='object-contain p-2 transition-transform duration-500 group-hover:scale-110' />
											<div className='absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full' />
										</div>
										<div className='group-hover:visible z-50 invisible absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-4 bg-background/95 backdrop-blur-sm border border-border rounded-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300'>
											<div className='text-sm font-bold text-foreground mb-1'>ISO/IEC 17020</div>
											<div className='text-xs font-semibold text-primary mb-2'>Inspection Bodies</div>
											<div className='text-xs text-muted-foreground leading-relaxed'>Certified for performing inspection activities with impartiality and competence</div>
											<div className='absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-border'></div>
										</div>
									</div>
								</div>

								{/* Right-bottom */}
								<div
									className='absolute'
									style={{
										left: "76.45033635316129%",
										top: "86.40576474687263%",
										transform: "translate(-50%, -50%)",
									}}>
									<div className='group relative transition-all duration-500 scale-100 hover:scale-120 z-20'>
										<div className='absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110' />
										<div className='relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-background border-4 border-primary/20 shadow-2xl overflow-hidden group cursor-pointer'>
											<Image alt='ISO/IEC 17065' src='/images/iso-17065.png' fill loading='lazy' className='object-contain p-2 transition-transform duration-500 group-hover:scale-110' />
											<div className='absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full' />
										</div>
										<div className='group-hover:visible invisible absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-4 bg-background/95 backdrop-blur-sm border border-border rounded-xl shadow-2xl z-30 animate-in fade-in slide-in-from-top-2 duration-300'>
											<div className='text-sm font-bold text-foreground mb-1'>ISO/IEC 17065</div>
											<div className='text-xs font-semibold text-primary mb-2'>Product Certification</div>
											<div className='text-xs text-muted-foreground leading-relaxed'>Accredited for certifying products, processes, and services</div>
											<div className='absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-border'></div>
										</div>
									</div>
								</div>

								{/* Left-bottom */}
								<div
									className='absolute'
									style={{
										left: "23.549663646838713%",
										top: "86.40576474687263%",
										transform: "translate(-50%, -50%)",
									}}>
									<div className='group relative transition-all duration-500 scale-100 hover:scale-120 z-20'>
										<div className='absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110' />
										<div className='relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-background border-4 border-primary/20 shadow-2xl overflow-hidden group cursor-pointer'>
											<Image alt='ISO 15189' src='/images/iso-15189.png' fill loading='lazy' className='object-contain p-2 transition-transform duration-500 group-hover:scale-110' />
											<div className='absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full' />
										</div>
										<div className='group-hover:visible invisible absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-4 bg-background/95 backdrop-blur-sm border border-border rounded-xl shadow-2xl z-30 animate-in fade-in slide-in-from-top-2 duration-300'>
											<div className='text-sm font-bold text-foreground mb-1'>ISO 15189</div>
											<div className='text-xs font-semibold text-primary mb-2'>Medical Laboratories</div>
											<div className='text-xs text-muted-foreground leading-relaxed'>Specialized accreditation for medical laboratory quality and competence</div>
											<div className='absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-border'></div>
										</div>
									</div>
								</div>

								{/* Left-top */}
								<div
									className='absolute'
									style={{
										left: "7.202456766718093%",
										top: "36.09423525312735%",
										transform: "translate(-50%, -50%)",
									}}>
									<div className='group relative transition-all duration-500 scale-100 hover:scale-120 z-20'>
										<div className='absolute inset-0 bg-primary/20 rounded-full blur-xl scale-110' />
										<div className='relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-background border-4 border-primary/20 shadow-2xl overflow-hidden group cursor-pointer'>
											<Image alt='ISO/IEC 17043' src='/images/iso-17043.png' fill loading='lazy' className='object-contain p-2 transition-transform duration-500 group-hover:scale-110' />
											<div className='absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full' />
										</div>
										<div className='group-hover:visible invisible absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-4 bg-background/95 backdrop-blur-sm border border-border rounded-xl shadow-2xl z-30 animate-in fade-in slide-in-from-top-2 duration-300'>
											<div className='text-sm font-bold text-foreground mb-1'>ISO/IEC 17043</div>
											<div className='text-xs font-semibold text-primary mb-2'>Proficiency Testing</div>
											<div className='text-xs text-muted-foreground leading-relaxed'>Accredited for organizing and conducting proficiency testing programs</div>
											<div className='absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-border'></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* --- the rest of your original JSX stays the same --- */}
					{/* I’ll keep everything below unchanged, just properly formatted */}

					{/* UAE & GCC (Featured) */}
					<div className='mb-16 mt-44'>
						<div className='mb-8'>
							<h3 className='text-3xl font-bold text-foreground relative inline-block pb-3'>
								UAE &amp; GCC (Featured)<div className='absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary to-primary/20 rounded-full'></div>
							</h3>
						</div>
						<div className='grid md:grid-cols-2 gap-6'>
							<div className='p-6 bg-white rounded-xl border border-border/50 hover:shadow-lg transition-shadow'>
								<div className='flex items-start justify-between mb-3'>
									<h4 className='text-lg font-bold text-foreground flex-1'>Chemical Defense Unit — Sheikh Zayed Military City</h4>
									<span className='px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full whitespace-nowrap ml-2'>ISO/IEC 17025</span>
								</div>
								<p className='text-sm text-muted-foreground mb-4'>Abu Dhabi, UAE</p>
								<div className='space-y-3'>
									<div className='pl-4 border-l-2 border-primary/30'>
										<p className='text-sm text-muted-foreground leading-relaxed'>Lab system design, documents &amp; methods coaching, competence build.</p>
									</div>
									<div className='pl-4 border-l-2 border-accent/30'>
										<p className='text-sm text-foreground font-medium leading-relaxed'>Clear path to accreditation; repeatable test confidence.</p>
									</div>
								</div>
							</div>
							<div className='p-6 bg-white rounded-xl border border-border/50 hover:shadow-lg transition-shadow'>
								<div className='flex items-start justify-between mb-3'>
									<h4 className='text-lg font-bold text-foreground flex-1'>Dubai Municipality — Central Laboratory</h4>
									<span className='px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full whitespace-nowrap ml-2'>ISO/IEC 17025</span>
								</div>
								<p className='text-sm text-muted-foreground mb-4'>Dubai, UAE</p>
								<div className='space-y-3'>
									<div className='pl-4 border-l-2 border-primary/30'>
										<p className='text-sm text-muted-foreground leading-relaxed'>Targeted training and method competence uplift.</p>
									</div>
									<div className='pl-4 border-l-2 border-accent/30'>
										<p className='text-sm text-foreground font-medium leading-relaxed'>Faster onboarding of analysts; better PT performance.</p>
									</div>
								</div>
							</div>
							<div className='p-6 bg-white rounded-xl border border-border/50 hover:shadow-lg transition-shadow'>
								<div className='flex items-start justify-between mb-3'>
									<h4 className='text-lg font-bold text-foreground flex-1'>National Water Company — Southern Cluster &amp; Multi-Site Labs</h4>
									<span className='px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full whitespace-nowrap ml-2'>ISO/IEC 17025:2017</span>
								</div>
								<p className='text-sm text-muted-foreground mb-4'>KSA</p>
								<div className='space-y-3'>
									<div className='pl-4 border-l-2 border-primary/30'>
										<p className='text-sm text-muted-foreground leading-relaxed'>QMS modernization, methods verification, internal audit coaching.</p>
									</div>
									<div className='pl-4 border-l-2 border-accent/30'>
										<p className='text-sm text-foreground font-medium leading-relaxed'>Consistent results across sites; audit readiness.</p>
									</div>
								</div>
							</div>
							<div className='p-6 bg-white rounded-xl border border-border/50 hover:shadow-lg transition-shadow'>
								<div className='flex items-start justify-between mb-3'>
									<h4 className='text-lg font-bold text-foreground flex-1'>SABIC Hadeed</h4>
									<span className='px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full whitespace-nowrap ml-2'>ISO/IEC 17025:2005</span>
								</div>
								<p className='text-sm text-muted-foreground mb-4'>Dammam, KSA</p>
								<div className='space-y-3'>
									<div className='pl-4 border-l-2 border-primary/30'>
										<p className='text-sm text-muted-foreground leading-relaxed'>System establishment, method validation guidance, competence matrix.</p>
									</div>
									<div className='pl-4 border-l-2 border-accent/30'>
										<p className='text-sm text-foreground font-medium leading-relaxed'>Cohesive quality system; faster evidence retrieval in audits.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='mb-16'>
						<h4 className='text-xl font-bold text-foreground mb-6 relative inline-block pb-2'>
							Telecom &amp; Government (UAE)<div className='absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-primary to-transparent rounded-full'></div>
						</h4>
						<div className='grid md:grid-cols-3 gap-4'>
							<div className='p-5 bg-linear-to-br from-secondary/50 to-white rounded-xl border border-border/50'>
								<p className='font-bold text-foreground text-sm mb-2'>TDRA — Telecommunications &amp; Digital Government Regulatory Authority</p>
								<div className='flex flex-wrap gap-1'>
									<span className='px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded'>ISO/IEC 17025</span>
									<span className='px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded'>17020</span>
									<span className='px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded'>17065</span>
								</div>
							</div>
							<div className='p-5 bg-linear-to-br from-secondary/50 to-white rounded-xl border border-border/50'>
								<p className='font-bold text-foreground text-sm mb-2'>GDRFA — General Directorate of Residency &amp; Foreigners Affairs</p>
								<div className='flex flex-wrap gap-1'>
									<span className='px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded'>ISO/IEC 17025</span>
								</div>
							</div>
							<div className='p-5 bg-linear-to-br from-secondary/50 to-white rounded-xl border border-border/50'>
								<p className='font-bold text-foreground text-sm mb-2'>DEWA — Dubai Electricity &amp; Water Authority</p>
								<div className='flex flex-wrap gap-1'>
									<span className='px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded'>ISO/IEC 17025</span>
								</div>
							</div>
						</div>
					</div>
					<div className='mb-16'>
						<div className='mb-8'>
							<h3 className='text-3xl font-bold text-foreground relative inline-block pb-3'>
								International Programs<div className='absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-accent to-accent/20 rounded-full'></div>
							</h3>
						</div>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
							<div className='p-5 bg-white rounded-xl border border-border/50 hover:border-accent/50 transition-colors'>
								<div className='flex items-start justify-between mb-3'>
									<h4 className='font-bold text-foreground text-sm flex-1'>Central Leather Testing Laboratory — Mongolia</h4>
									<span className='px-2 py-1 bg-accent/20 text-accent text-xs font-bold rounded whitespace-nowrap ml-2'>UNIDO</span>
								</div>
								<p className='text-xs text-primary font-medium mb-1'>ISO/IEC 17025:2017</p>
							</div>
							<div className='p-5 bg-white rounded-xl border border-border/50 hover:border-accent/50 transition-colors'>
								<div className='flex items-start justify-between mb-3'>
									<h4 className='font-bold text-foreground text-sm flex-1'>Assessor Training — Tanzania</h4>
									<span className='px-2 py-1 bg-accent/20 text-accent text-xs font-bold rounded whitespace-nowrap ml-2'>UNIDO</span>
								</div>
								<p className='text-xs text-primary font-medium mb-1'>ISO/IEC 17025 &amp; 17043</p>
							</div>
							<div className='p-5 bg-white rounded-xl border border-border/50 hover:border-accent/50 transition-colors'>
								<div className='flex items-start justify-between mb-3'>
									<h4 className='font-bold text-foreground text-sm flex-1'>EGAC Capacity Building</h4>
									<span className='px-2 py-1 bg-accent/20 text-accent text-xs font-bold rounded whitespace-nowrap ml-2'>EU funded</span>
								</div>
								<p className='text-xs text-muted-foreground'>Strengthening national accreditation delivery</p>
							</div>
							<div className='p-5 bg-white rounded-xl border border-border/50 hover:border-accent/50 transition-colors'>
								<div className='flex items-start justify-between mb-3'>
									<h4 className='font-bold text-foreground text-sm flex-1'>GOEIC — Dekheila Port, Egypt</h4>
									<span className='px-2 py-1 bg-accent/20 text-accent text-xs font-bold rounded whitespace-nowrap ml-2'>EU &amp; USAID</span>
								</div>
								<p className='text-xs text-muted-foreground'>Mycotoxin, pesticide residue labs</p>
							</div>
							<div className='p-5 bg-white rounded-xl border border-border/50 hover:border-accent/50 transition-colors'>
								<div className='flex items-start justify-between mb-3'>
									<h4 className='font-bold text-foreground text-sm flex-1'>Lebanon — MoA &amp; 16 national labs</h4>
									<span className='px-2 py-1 bg-accent/20 text-accent text-xs font-bold rounded whitespace-nowrap ml-2'>EU QUALEB</span>
								</div>
								<p className='text-xs text-primary font-medium mb-1'>ISO/IEC 17025</p>
							</div>
							<div className='p-5 bg-white rounded-xl border border-border/50 hover:border-accent/50 transition-colors'>
								<div className='flex items-start justify-between mb-3'>
									<h4 className='font-bold text-foreground text-sm flex-1'>Jordan — Food &amp; Water Lab, Amman</h4>
									<span className='px-2 py-1 bg-accent/20 text-accent text-xs font-bold rounded whitespace-nowrap ml-2'>EU funded</span>
								</div>
								<p className='text-xs text-primary font-medium mb-1'>ISO/IEC 17025</p>
							</div>
							<div className='p-5 bg-white rounded-xl border border-border/50 hover:border-accent/50 transition-colors'>
								<div className='flex items-start justify-between mb-3'>
									<h4 className='font-bold text-foreground text-sm flex-1'>Iraq — Baghdad/Erbil labs</h4>
									<span className='px-2 py-1 bg-accent/20 text-accent text-xs font-bold rounded whitespace-nowrap ml-2'>UNIDO</span>
								</div>
								<p className='text-xs text-muted-foreground'>Microbiology, chemical &amp; GMO labs</p>
							</div>
						</div>
					</div>
					<div className='mb-16'>
						<div className='mb-8'>
							<h3 className='text-3xl font-bold text-foreground relative inline-block pb-3'>
								Training Engagements<div className='absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-purple-500 to-purple-500/20 rounded-full'></div>
							</h3>
						</div>
						<div className='relative'>
							<div className='p-8 bg-linear-to-br from-purple-50 to-white rounded-2xl border-2 border-purple-200'>
								<div className='absolute -top-4 left-8 px-4 py-2 bg-purple-500 text-white font-bold text-sm rounded-full shadow-lg'>Middle East Clients</div>
								<div className='flex flex-wrap gap-3 mt-4'>
									<div className='px-4 py-2 bg-white border border-purple-200 rounded-full text-sm font-medium text-foreground hover:border-purple-400 hover:shadow-md transition-all cursor-default'>Dubai Municipality</div>
									<div className='px-4 py-2 bg-white border border-purple-200 rounded-full text-sm font-medium text-foreground hover:border-purple-400 hover:shadow-md transition-all cursor-default'>SABIC</div>
									<div className='px-4 py-2 bg-white border border-purple-200 rounded-full text-sm font-medium text-foreground hover:border-purple-400 hover:shadow-md transition-all cursor-default'>Al Razi Petrochemical</div>
									<div className='px-4 py-2 bg-white border border-purple-200 rounded-full text-sm font-medium text-foreground hover:border-purple-400 hover:shadow-md transition-all cursor-default'>Aramco</div>
									<div className='px-4 py-2 bg-white border border-purple-200 rounded-full text-sm font-medium text-foreground hover:border-purple-400 hover:shadow-md transition-all cursor-default'>Dubai Metal Co.</div>
									<div className='px-4 py-2 bg-white border border-purple-200 rounded-full text-sm font-medium text-foreground hover:border-purple-400 hover:shadow-md transition-all cursor-default'>UAE National Army</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div>
						<div className='mb-8'>
							<h3 className='text-2xl font-bold text-foreground relative inline-block pb-2'>
								Proficiency Testing (PT) — Selected Customers<div className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-green-500/20 rounded-full'></div>
							</h3>
						</div>
						<div className='relative'>
							<div className='mb-8'>
								<div className='relative p-8 bg-linear-to-br from-green-50 to-white rounded-2xl border-2 border-green-200'>
									<div className='absolute -top-4 left-8 px-4 py-2 bg-green-500 text-white font-bold text-sm rounded-full shadow-lg'>Pharma &amp; Life Sciences</div>
									<div className='flex flex-wrap gap-3 mt-4'>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>EVA Pharma</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Global NAPI</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>PHARCO</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>SEDICO</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Sigma</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Marcyrl</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>October Pharma</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>European Egyptian Pharmaceuticals</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Vitabiotics</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Arab Drug Co.</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Medical Union Pharma</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Al Andalous</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>El Nasr Pharmaceutical</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Pharma Gene Labs</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Pharma Solution</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Art Pharma</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Safe Pharma</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Genuine Research Center</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Drug Research Center</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Advanced Research Center</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Faculty of Pharmacy (Tanta)</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Faculty of Medicine (Damanhour)</div>
										<div className='px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-foreground hover:border-green-400 hover:shadow-md transition-all cursor-default'>Multi Apex Pharma</div>
									</div>
								</div>
							</div>
							<div>
								<div className='relative p-8 bg-linear-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200'>
									<div className='absolute -top-4 left-8 px-4 py-2 bg-blue-500 text-white font-bold text-sm rounded-full shadow-lg'>Fertilizers/Chemicals &amp; TIC</div>
									<div className='flex flex-wrap gap-3 mt-4'>
										<div className='px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-medium text-foreground hover:border-blue-400 hover:shadow-md transition-all cursor-default'>Abu Zaabal</div>
										<div className='px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-medium text-foreground hover:border-blue-400 hover:shadow-md transition-all cursor-default'>Central Laboratory for Fertilizers</div>
										<div className='px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-medium text-foreground hover:border-blue-400 hover:shadow-md transition-all cursor-default'>Evergrow</div>
										<div className='px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-medium text-foreground hover:border-blue-400 hover:shadow-md transition-all cursor-default'>El Nasr Co. for Intermediate Chemicals</div>
										<div className='px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-medium text-foreground hover:border-blue-400 hover:shadow-md transition-all cursor-default'>Tank Oil Company</div>
										<div className='px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-medium text-foreground hover:border-blue-400 hover:shadow-md transition-all cursor-default'>Near East Company</div>
										<div className='px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-medium text-foreground hover:border-blue-400 hover:shadow-md transition-all cursor-default'>SGS</div>
										<div className='px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-medium text-foreground hover:border-blue-400 hover:shadow-md transition-all cursor-default'>Intertek Testing Services</div>
										<div className='px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-medium text-foreground hover:border-blue-400 hover:shadow-md transition-all cursor-default'>TUV Austria</div>
										<div className='px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-medium text-foreground hover:border-blue-400 hover:shadow-md transition-all cursor-default'>COTECNA</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Projects;
