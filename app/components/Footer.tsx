import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
	return (
		<footer className='bg-primary text-primary-foreground'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
					{/* Logo + tagline */}
					<div className='lg:col-span-1'>
						<div className='mb-4 bg-white p-3 rounded-lg inline-block'>
							<Image alt='Conformity Globe' width={180} height={45} className='h-10 w-auto' style={{ color: "transparent" }} src='/images/logo.jpg' />
						</div>
						<p className='text-primary-foreground/80 text-sm leading-relaxed'>Expert support in conformity assessment, validation &amp; verification, and greenhouse gas solutions.</p>
					</div>

					{/* Services */}
					<div>
						<h3 className='font-semibold text-lg mb-4'>Services</h3>
						<ul className='space-y-2'>
							<li>
								<a href='#services' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
									Conformity Assessment
								</a>
							</li>
							<li>
								<a href='#services' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
									Validation &amp; Verification
								</a>
							</li>
							<li>
								<a href='#services' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
									GHG Services
								</a>
							</li>
							<li>
								<a href='#services' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
									Training Programs
								</a>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className='font-semibold text-lg mb-4'>Company</h3>
						<ul className='space-y-2'>
							<li>
								<a href='#about' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
									About Us
								</a>
							</li>
							<li>
								<a href='#' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
									Our Team
								</a>
							</li>
							<li>
								<a href='#' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
									Careers
								</a>
							</li>
							<li>
								<a href='#contact' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className='font-semibold text-lg mb-4'>Resources</h3>
						<ul className='space-y-2'>
							<li>
								<a href='#' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
									Insights
								</a>
							</li>
							<li>
								<a href='#' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
									Case Studies
								</a>
							</li>
							<li>
								<a href='#' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
									FAQs
								</a>
							</li>
							<li>
								<a href='#' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className='pt-8 border-t border-primary-foreground/20'>
					<div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
						<p className='text-primary-foreground/80 text-sm'>© 2025 Conformity Globe Consultancies LLC. All rights reserved.</p>
						<div className='flex gap-6'>
							<a href='#' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
								Terms
							</a>
							<a href='#' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
								Privacy
							</a>
							<a href='#' className='text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors'>
								Cookies
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
