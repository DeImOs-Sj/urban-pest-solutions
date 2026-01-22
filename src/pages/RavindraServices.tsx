import { FaStar } from 'react-icons/fa';
import SEO from '../components/SEO';
import ClientCarousel from '../components/ClientCarousel';

const RavindraServices = () => {

    return (
        <div className="min-h-screen bg-[#FDFCF9]">
            <SEO
                title="Services by Ravindra Bagal | Trusted Pest Control Expert"
                description="Explore the professional pest control services rendered by Ravindra Bagal. Trusted by Capgemini, Sheraton Hotel, Barclays, and more for quality pest management in Pune."
                keywords="ravindra bagal pest control, professional pest control pune, corporate pest control pune, residential pest control experts"
            />
            {/* Hero Section */}
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Services Rendered by Ravindra Bagal</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium text-primary-100">
                        Trusted by leading organizations across various sectors
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto text-center mb-20">
                        <img src='/ravi.jpeg' className="w-40 h-40 bg-primary-900 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-6xl font-bold shadow-2xl border-4 border-primary-100" />

                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary-900">Ravindra Bagal</h2>
                        <p className="text-2xl text-primary-500 font-bold mb-8 uppercase tracking-wide">Technical Expert & Co-Founder</p>
                        <p className="text-primary-700 leading-relaxed text-xl font-medium">
                            Having 10 years’ experience in Pest Control Service Industries, He had worked on Ground Level only to learn Pest Control Business Activities, how they works, What problems & difficulties Customers are facing due to Cockroach, Ant, Rat, Lizard,  Bed Bugs, Mosquitos etc.                        </p>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <ClientCarousel />


            {/* Statistics */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-900 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                9+
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-primary-900">Major Clients</h3>
                            <p className="text-primary-600 font-medium text-lg">Across different sectors</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                6+
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-primary-900">Years Experience</h3>
                            <p className="text-primary-600 font-medium text-lg">In pest control industry</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-700 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                100%
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-primary-900">Satisfaction Rate</h3>
                            <p className="text-primary-600 font-medium text-lg">Quality assured services</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                <FaStar />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-primary-900">Premium Service</h3>
                            <p className="text-primary-600 font-medium text-lg">Trusted by top brands</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-24 bg-primary-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex justify-center mb-8">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-white text-4xl mx-1" />
                            ))}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                            Thanks for giving us an opportunity to serve you
                        </h2>
                        <p className="text-2xl text-primary-200 mb-10 font-medium leading-relaxed">
                            We are grateful for the trust placed in us by our esteemed clients. Your satisfaction drives us to continually improve and deliver the best pest control services.
                        </p>
                        <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl px-10 py-6 border border-white/20">
                            <p className="text-3xl font-bold">Quality & Assured Services</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RavindraServices;
