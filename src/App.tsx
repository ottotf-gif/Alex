import Header from './components/Header';
import Hero from './components/Hero';
import Languages from './components/Languages';
import Steps from './components/Steps';
import About from './components/About';
import VideoSection from './components/Youtube';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-paper font-sans text-body">
      <Header />
      <main>
        <Hero />
        <Languages />
        <Steps />
        <About />
        <VideoSection />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}