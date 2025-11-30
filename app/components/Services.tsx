import React from "react";
import FadeUp from "./FadeUp";
import { TiTick } from "react-icons/ti";
import { FaCheck, FaPlus } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

function Services() {
	return (
		<section id='services' className='py-24 bg-background'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<FadeUp className='mb-16'>
					<h2 className='text-4xl sm:text-5xl font-bold text-foreground text-balance mb-6 relative inline-block pb-4'>
						Our Services<div className='absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-primary via-primary/60 to-transparent rounded-full'></div>
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed'>Comprehensive solutions delivered by specialized professionals</p>
				</FadeUp>
				<FadeUp className='grid md:grid-cols-2 gap-8' stagger>
					<div className='group relative bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden'>
						<div className='absolute left-0 top-0 bottom-0 w-1 border-blue-500 transition-all duration-300 group-hover:w-2'></div>
						<div className='p-8'>
							<div className='mb-4 '>
								{/* Conformity Assessment Icon */}
								<FaCheck className='text-primary' size={36} />
							</div>
							<h3 className='text-2xl font-bold text-foreground mb-4 leading-tight'>Conformity Assessment</h3>
							<p className='text-muted-foreground leading-relaxed mb-6'>We guide organizations to strengthen their systems and operations through structured assessments that identify areas for improvement and build stakeholder confidence.</p>
							<ul className='list-disc list-inside text-gray-600 text-sm space-y-2 marker:text-primary'>
								<li>ISO/IEC 17025 laboratory systems</li>
								<li>ISO/IEC 17020 inspection bodies</li>
								<li>ISO/IEC 17065 product certification</li>
							</ul>
						</div>
					</div>
					<div className='group relative bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden'>
						<div className='absolute left-0 top-0 bottom-0 w-1 border-green-500 transition-all duration-300 group-hover:w-2'></div>
						<div className='p-8'>
							<div className='mb-4'>
								{/* GHG & VVB Capacity Building Icon */}
								<FaPlus className='text-green-700' size={36} />
							</div>
							<h3 className='text-2xl font-bold text-foreground mb-4 leading-tight'>GHG &amp; VVB Capacity Building</h3>
							<p className='text-muted-foreground leading-relaxed mb-6'>Independent VVB services and expert guidance for greenhouse gas activities, enhancing credibility, transparency, and accountability.</p>
							<ul className='list-disc list-inside text-gray-600 text-sm space-y-2 marker:text-primary'>
								<li>Third-party verification programs</li>
								<li>Data validation and quality assurance</li>
								<li>Compliance verification services</li>
								<li>Greenhouse gas inventory development</li>
								<li>Carbon footprint verification</li>
								<li>Climate reporting and compliance</li>
							</ul>
						</div>
					</div>
					<div className='group relative bg-white rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden'>
						<div className='absolute left-0 top-0 bottom-0 w-1 border-purple-500 transition-all duration-300 group-hover:w-2'></div>
						<div className='p-8'>
							<div className='mb-4'>
								{/* Training & Skills Development Icon */}
								<IoDiamondOutline className='text-purple-700' size={36} />
							</div>
							<h3 className='text-2xl font-bold text-foreground mb-4 leading-tight'>Training &amp; Skills Development</h3>
							<p className='text-muted-foreground leading-relaxed mb-6'>Practical training programs delivered by professionals who bring real-world expertise to strengthen technical skills.</p>
							<ul className='list-disc list-inside text-gray-600 text-sm space-y-2 marker:text-primary'>
								<li>ISO/IEC 17025 implementation workshops</li>
								<li>Internal auditor training</li>
								<li>Technical competence development</li>
							</ul>
						</div>
					</div>
				</FadeUp>
			</div>
		</section>
	);
}

export default Services;
