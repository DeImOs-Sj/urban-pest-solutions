import { FaStar } from 'react-icons/fa';
import SEO from '../components/SEO';
import ClientCarousel from '../components/ClientCarousel';

const RavindraServices = () => {

    return (
        <div className="min-h-screen bg-[#FDFCF9]">
            <SEO
                title="Pest Management Expertise by Ravindra Bagal | Pune"
                description="Explore the professional record of Ravindra Bagal, technical expert at Shree Swami Samartha. Serving elite clients like Sheraton, Capgemini, and Barclays in Pune."
                keywords="ravindra bagal pest control, professional pest control pune, corporate pest control pune, residential pest control experts, technical pest management pune"
            />
            {/* Hero Section */}
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Professional Services by Ravindra Bagal</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium text-primary-100">
                        A decade of technical excellence trusted by Pune's leading organizations.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto text-center mb-20">
                        <div className="w-40 h-40 bg-primary-900 rounded-full mx-auto mb-8 overflow-hidden shadow-2xl border-4 border-primary-100">
                            <img src='/ravi.jpeg' alt="Ravindra Bagal - Pest Control Expert Pune" className="w-full h-full object-cover" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary-900">Expertise & Experience</h2>
                        <p className="text-2xl text-primary-500 font-bold mb-8 uppercase tracking-wide">Technical Head & Co-Founder</p>
                        <p className="text-primary-700 leading-relaxed text-xl font-medium max-w-3xl mx-auto">
                            With over 10 years in the pest control industry, Ravindra Bagal has developed specialized protocols for complex infestations. From high-rise IT parks to luxury hospitality, his ground-level experience ensures every treatment is precise and effective.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="bg-primary-50 py-16">
                <div className="container mx-auto px-4 text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary-900">Esteemed Clients We've Served</h2>
                </div>
                <ClientCarousel />
            </section>


            {/* Statistics */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-900 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                20+
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-primary-900">Major Corporate Clients</h3>
                            <p className="text-primary-600 font-medium text-lg">Across Industrial Sectors</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                10+
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-primary-900">Expert Years</h3>
                            <p className="text-primary-600 font-medium text-lg">Pest Management Industry</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-700 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                100%
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-primary-900">Client Retention</h3>
                            <p className="text-primary-600 font-medium text-lg">Quality Guaranteed</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                <FaStar />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-primary-900">Premium Grade</h3>
                            <p className="text-primary-600 font-medium text-lg">Eco-friendly Solutions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Appreciation Section */}
            <section className="py-24 bg-primary-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex justify-center mb-8">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className="text-accent-400 text-4xl mx-1" />
                            ))}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                            Committed to Excellence in Pune
                        </h2>
                        <p className="text-2xl text-primary-200 mb-10 font-medium leading-relaxed">
                            We thank our clients for the opportunity to protect their homes and workplaces. Your trust is the foundation of Shree Swami Samartha Pest Control.
                        </p>
                        <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl px-10 py-6 border border-white/20">
                            <p className="text-3xl font-bold text-white uppercase tracking-wider">Quality Assured Service</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RavindraServices;

