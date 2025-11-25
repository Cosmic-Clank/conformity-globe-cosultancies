"use client";
import Image from "next/image";
import { useState } from "react";
import { CgCross } from "react-icons/cg";
import { FaCross } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<nav className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/98 backdrop-blur-md shadow-sm border-b border-border/50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-20'>
					<div className='shrink-0'>
						<Image alt='Conformity Globe Consultancies LLC' width='240' height='60' className='h-12 w-auto' src='/images/logo.jpg' />
					</div>
					<div className='hidden lg:flex items-center gap-1  '>
						<a href='#home' className='px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200'>
							Home
						</a>
						<a href='#about' className='px-4 py-2 text-sm font-medium text-foreground/80  hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200'>
							About Us
						</a>
						<a href='#services' className='px-4 py-2 text-sm font-medium text-foreground/80  hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200'>
							Services
						</a>
						<a href='#projects' className='px-4 py-2 text-sm font-medium text-foreground/80  hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200'>
							Projects
						</a>
						<a href='#expertise' className='px-4 py-2 text-sm font-medium text-foreground/80  hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200'>
							Expertise
						</a>
						<a href='#contact' className='px-4 py-2 text-sm font-medium text-foreground/80  hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200'>
							Contact
						</a>
						<button data-slot='button' className='ml-4 px-4 py-2 bg-primary hover:bg-primary/50 text-white text-sm font-medium rounded-full transition-colors duration-100'>
							Get in Touch
						</button>
					</div>
					<button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary/50 transition-colors'>
						{mobileMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
					</button>
				</div>
			</div>
			{mobileMenuOpen && (
				<div className='lg:hidden border-t border-border/50 bg-white/98 backdrop-blur-md'>
					<div className='px-4 py-6 space-y-2'>
						<a href='#home' className='block px-2 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all'>
							Home
						</a>
						<a href='#about' className='block px-2 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all'>
							About Us
						</a>
						<a href='#services' className='block px-2 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all'>
							Services
						</a>
						<a href='#projects' className='block px-2 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all'>
							Projects
						</a>
						<a href='#expertise' className='block px-2 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all'>
							Expertise
						</a>
						<a href='#contact' className='block px-2 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all'>
							Contact
						</a>
						<button className='px-4 py-2 bg-primary hover:bg-primary/50 text-white text-sm font-medium rounded-full transition-colors duration-100 w-full'>Get in Touch</button>
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
