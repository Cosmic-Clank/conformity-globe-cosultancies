"use client";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaLocationPin, FaLocationPinLock } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { LuLocate, LuMail, LuPhone, LuPin } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import FadeUp from "./FadeUp";
import { useForm } from "@formspree/react";

const Contact: React.FC = () => {
	const [state, handleSubmit, reset] = useForm("mreegnqv");
	const [showPopup, setShowPopup] = useState(false);

	useEffect(() => {
		if (state.submitting || state.succeeded || state.errors) {
			setShowPopup(true);
		}
	}, [state.submitting, state.succeeded, state.errors]);

	const handleDismiss = () => {
		setShowPopup(false);
		reset();
	};

	return (
		<section id='contact' className='py-24 bg-white'>
			{/* Popup Overlay */}
			{showPopup && (
				<div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4'>
					<div className='bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center'>
						{state.submitting && (
							<>
								<div className='mb-4 flex justify-center'>
									<div className='animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent'></div>
								</div>
								<h3 className='text-2xl font-bold text-foreground mb-2'>Submitting...</h3>
								<p className='text-muted-foreground mb-6'>Please wait while we send your message.</p>
							</>
						)}

						{state.succeeded && !state.submitting && (
							<>
								<div className='mb-4 flex justify-center'>
									<div className='h-16 w-16 bg-green-100 rounded-full flex items-center justify-center'>
										<svg className='h-8 w-8 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
										</svg>
									</div>
								</div>
								<h3 className='text-2xl font-bold text-foreground mb-2'>Success!</h3>
								<p className='text-muted-foreground mb-6'>Your message has been sent successfully. We&apos;ll get back to you soon!</p>
								<button onClick={handleDismiss} className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-6 w-full rounded-full'>
									Close
								</button>
							</>
						)}

						{state.errors && !state.submitting && !state.succeeded && (
							<>
								<div className='mb-4 flex justify-center'>
									<div className='h-16 w-16 bg-red-100 rounded-full flex items-center justify-center'>
										<svg className='h-8 w-8 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
										</svg>
									</div>
								</div>
								<h3 className='text-2xl font-bold text-foreground mb-2'>Error</h3>

								<p className='text-muted-foreground mb-6'>{"Something went wrong. Please try again."}</p>
								<button onClick={handleDismiss} className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-6 w-full rounded-full'>
									Try Again
								</button>
							</>
						)}
					</div>
				</div>
			)}

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<FadeUp className='text-center mb-16' stagger>
					<h2 className='text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance'>Let&apos;s Discuss Your Goals</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto text-pretty'>Get in touch to learn how Conformity Globe can support your organization.</p>
					<p className='mt-4 text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed'>
						<span className='text-primary font-semibold'>✨ Let&apos;s discuss how Conformity Globe can support your goals.</span>
					</p>
				</FadeUp>

				<FadeUp className='grid lg:grid-cols-2 gap-12'>
					{/* Form */}
					<div data-slot='card' className='bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-300 shadow-sm p-8'>
						<form className='space-y-6' onSubmit={handleSubmit}>
							<div>
								<label htmlFor='name' className='block text-sm font-medium text-foreground mb-2'>
									Name
								</label>
								<input type='text' id='name' name='name' placeholder='Your name' required data-slot='input' className='file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive' />
							</div>
							<div>
								<label htmlFor='email' className='block text-sm font-medium text-foreground mb-2'>
									Email
								</label>
								<input type='email' id='email' name='email' placeholder='your.email@company.com' required data-slot='input' className='file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive' />
							</div>
							<div>
								<label htmlFor='company' className='block text-sm font-medium text-foreground mb-2'>
									Company
								</label>
								<input type='text' id='company' name='company' placeholder='Your company name' data-slot='input' className='file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive' />
							</div>
							<div>
								<label htmlFor='message' className='block text-sm font-medium text-foreground mb-2'>
									Message
								</label>
								<textarea id='message' name='message' placeholder='Tell us about your needs...' rows={5} required data-slot='textarea' className='border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm' />
							</div>
							<button type='submit' className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 px-6 has-[>svg]:px-4 w-full rounded-full">
								Send Message
							</button>
						</form>
					</div>

					{/* Contact info + map */}
					<div className='space-y-8'>
						<div>
							<h3 className='text-2xl font-semibold text-foreground mb-6'>Contact Information</h3>
							<div className='space-y-6'>
								{/* Email */}
								<a href='mailto:info@conformityglobe.com' className='flex items-start gap-4 group'>
									<div className='p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors'>
										<LuMail className='h-6 w-6 text-primary' />
									</div>
									<div>
										<p className='text-sm font-medium text-muted-foreground mb-1'>Email</p>
										<p className='text-lg text-foreground group-hover:text-primary transition-colors'>info@conformityglobe.com</p>
									</div>
								</a>

								{/* Phone / WhatsApp */}
								<a href='tel:+971569948596' className='flex items-start gap-4 group'>
									<div className='p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors'>
										<LuPhone className='h-6 w-6 text-primary' />
									</div>
									<div>
										<p className='text-sm font-medium text-muted-foreground mb-1'>Phone</p>
										<p className='text-lg text-foreground group-hover:text-primary transition-colors'>+971 56 994 8596</p>
									</div>
								</a>

								<a href='https://wa.me/+971569948596' target='_blank' rel='noreferrer' className='flex items-start gap-4 group'>
									<div className='p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors'>
										{/* WhatsApp-style chat bubble icon */}
										<FaWhatsapp className='h-6 w-6 text-primary' />
									</div>
									<div>
										<p className='text-sm font-medium text-muted-foreground mb-1'>WhatsApp</p>
										<p className='text-lg text-foreground group-hover:text-primary transition-colors'>Chat with us on WhatsApp</p>
									</div>
								</a>

								{/* LinkedIn */}
								<a href='https://www.linkedin.com/company/conformity-globe-consultancies-llc/about/' target='_blank' rel='noreferrer' className='flex items-start gap-4 group'>
									<div className='p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors'>
										<LiaLinkedinIn className='h-6 w-6 text-primary' />
									</div>
									<div>
										<p className='text-sm font-medium text-muted-foreground mb-1'>LinkedIn</p>
										<p className='text-lg text-foreground group-hover:text-primary transition-colors'>Conformity Globe Certification</p>
									</div>
								</a>

								{/* Location text */}
								<a href='https://maps.app.goo.gl/wgsgs994sWMfrHVJ7' target='_blank' rel='noreferrer' className='flex items-start gap-4 group'>
									<div className='p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors'>
										<MdLocationPin className='h-6 w-6 text-primary' />
									</div>
									<div>
										<p className='text-sm font-medium text-muted-foreground mb-1'>Location</p>
										<p className='text-lg text-foreground group-hover:text-primary transition-colors'>Deira, Dubai, UAE</p>
									</div>
								</a>
							</div>
						</div>

						{/* Map card */}
						<div data-slot='card' className='bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden h-64'>
							<div className='w-full h-full'>
								<iframe title='Conformity Globe Office Location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.9986420461163!2d55.3167!3d25.2719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f5c7d7e0b%3A0xXXXXXXXXXXXXXXX!2sDeira%2C%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000' loading='lazy' referrerPolicy='no-referrer-when-downgrade' className='w-full h-full border-0'></iframe>
							</div>
						</div>
					</div>
				</FadeUp>
			</div>
		</section>
	);
};

export default Contact;
