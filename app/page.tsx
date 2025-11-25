import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import WhyChooseUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<main className='min-h-screen font-sans'>
			<Navbar />
			<Hero />
			<AboutUs />
			<Services />
			<Projects />
			<Expertise />
			<WhyChooseUs />
			<Contact />
			<Footer />
		</main>
	);
}
