import { FaBuilding, FaStar } from 'react-icons/fa';
import SEO from '../components/SEO';

const RavindraServices = () => {
    const clients = [
        {
            name: 'Capgemini',
            type: 'Corporate',
            description: 'Leading global consulting and technology services company',
        },
        {
            name: 'Residency Club',
            type: 'Residential',
            description: 'Premium residential complex',
        },
        {
            name: 'Optima Height',
            type: 'Residential',
            description: 'Modern residential apartments',
        },
        {
            name: 'Sheraton Hotel',
            type: 'Hospitality',
            description: 'Luxury hotel and resort',
        },
        {
            name: 'Barclays',
            type: 'Corporate',
            description: 'International financial services company',
        },
        {
            name: 'Nyati Elan',
            type: 'Residential',
            description: 'Premium residential project',
        },
        {
            name: 'CT Hospital',
            type: 'Healthcare',
            description: 'Multi-specialty hospital',
        },
        {
            name: 'Bramha Suncity',
            type: 'Residential',
            description: 'Large residential township',
        },
        {
            name: 'Season 24 Banquet Hall',
            type: 'Hospitality',
            description: 'Premium banquet and event venue',
        },
    ];

    const typeColors: { [key: string]: string } = {
        Corporate: 'bg-primary-900',
        Residential: 'bg-primary-800',
        Hospitality: 'bg-primary-700',
        Healthcare: 'bg-primary-600',
    };

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
                            With 6 years of hands-on experience in the pest control industry, Ravindra has personally served numerous prestigious clients across Pune. His dedication to understanding customer problems at the ground level and delivering quality solutions has earned the trust of leading organizations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clients Grid */}
            <section className="py-24 bg-[#FDFCF9]">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-center mb-6">Our Esteemed Clients</h2>
                    <p className="section-subtitle text-center max-w-3xl mx-auto mb-16 text-2xl">
                        Proud to serve these distinguished organizations
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="card p-8 text-center hover:scale-105 group border border-primary-200 bg-white"
                            >
                                <div className={`w-24 h-24 ${typeColors[client.type]} rounded-full mx-auto mb-6 flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                                    <FaBuilding className="text-3xl" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-primary-900">{client.name}</h3>
                                <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 ${typeColors[client.type]} text-white uppercase tracking-wide`}>
                                    {client.type}
                                </span>
                                <p className="text-primary-600 font-medium text-lg">{client.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
