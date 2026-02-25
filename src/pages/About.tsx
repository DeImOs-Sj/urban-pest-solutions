import { FaAward, FaUsers, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
    const values = [
        {
            icon: <FaAward className="text-4xl" />,
            title: 'Quality Service',
            description: 'We are committed to delivering the highest quality pest control services.',
            color: 'bg-primary-900',
        },
        {
            icon: <FaUsers className="text-4xl" />,
            title: 'Expert Team',
            description: 'Our dedicated team of professionals brings years of experience and expertise.',
            color: 'bg-primary-800',
        },
        {
            icon: <FaHandshake className="text-4xl" />,
            title: 'Customer Focus',
            description: 'Your satisfaction is our priority. We work to understand and meet your needs.',
            color: 'bg-primary-700',
        },
        {
            icon: <FaShieldAlt className="text-4xl" />,
            title: 'Safety First',
            description: 'We use safe, effective methods to ensure the well-being of your family and environment.',
            color: 'bg-primary-600',
        },
    ];

    return (
        <div className="min-h-screen bg-[#FDFCF9]">
            <SEO
                title="About Us | Shree Swami Samartha Pest Control Pune"
                description="Professional pest management experts in Pune with over 20 years of combined experience. Led by Rohini Gaikwad and Ravindra Bagal, we provide safe and effective extermination solutions."
                keywords="about shree swami samartha pest control, pest control experts pune, rohini gaikwad, ravindra bagal, top-rated pest control company pune, professional exterminators Pune, Hadapsar, Kharadi, Mundhwa, Wagholi"
            />
            {/* Hero Section */}
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">About Shree Swami Samartha</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium text-primary-100">
                        Pune's trusted partners in professional pest management and extermination services.
                    </p>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="section-title text-center mb-16 text-primary-900 text-4xl font-bold uppercase">Our Journey & Expertise</h2>

                        <div className="bg-[#FDFCF9] rounded-3xl shadow-xl p-10 md:p-16 space-y-8 border border-primary-100">
                            <p className="text-xl text-primary-800 leading-relaxed font-medium">
                                <span className="font-extrabold text-primary-900">Shree Swami Samartha</span> is a premier Pest Control Company established in{' '}
                                <span className="font-bold">January 2023</span>. Our mission is to provide safe, effective, and professional pest management solutions to the residents and businesses of Pune.
                            </p>

                            <p className="text-xl text-primary-800 leading-relaxed font-medium">
                                Founded by <span className="font-extrabold text-primary-900">Rohini Gaikwad (M.Com - Owner)</span>, who brings 20 years of invaluable experience in MNC's and Manufacturing Companies. Her specialization in Business Administration ensures that our service delivery meets international standards of efficiency.
                            </p>

                            <p className="text-xl text-primary-800 leading-relaxed font-medium">
                                Technical operations are led by <span className="font-extrabold text-primary-900">Ravindra Bagal (Technician - Owner)</span>, who has 10 years of intensive ground-level experience in the pest control industry. Having worked directly on thousands of cases involving cockroaches, ants, rodents, and termites, he understands the unique challenges of Pune's local environment.
                            </p>

                            <p className="text-xl text-primary-800 leading-relaxed font-medium">
                                We specialize in <Link to="/services" className="text-primary-900 font-bold underline decoration-accent-400">residential, commercial, and industrial pest control</Link>. From herbal treatments to advanced fogging, we use the latest technology to protect your space.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission - Detailed */}
            <section className="py-24 bg-primary-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                        {/* Vision */}
                        <div className="relative group">
                            <div className="bg-white rounded-3xl shadow-xl p-12 h-full border-t-8 border-primary-900 transition-transform hover:-translate-y-2 duration-300">
                                <div className="w-20 h-20 bg-primary-700 rounded-full flex items-center justify-center mb-8 shadow-lg overflow-hidden">
                                    <img src="/our_vision.jpeg" alt="Our Vision for Pest Control Excellence" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-4xl font-bold mb-6 text-primary-900">Our Vision</h3>
                                <p className="text-xl text-primary-700 leading-relaxed mb-8 font-medium">
                                    Our vision is to become the <span className="font-bold text-primary-900">preeminent Pest Control and Facility Management Company in India</span>.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="w-3 h-3 bg-primary-900 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                        <span className="text-lg text-primary-700 font-medium">Leveraging latest technology for superior results</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-3 h-3 bg-primary-900 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                        <span className="text-lg text-primary-700 font-medium">Being the #1 trusted choice in the pest management industry</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-3 h-3 bg-primary-900 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                        <span className="text-lg text-primary-700 font-medium">Setting benchmarks in safety and service excellence</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="relative group">
                            <div className="bg-white rounded-3xl shadow-xl p-12 h-full border-t-8 border-primary-600 transition-transform hover:-translate-y-2 duration-300">
                                <div className="w-20 h-20 bg-primary-700 rounded-full flex items-center justify-center mb-8 shadow-lg overflow-hidden">
                                    <img src="/our_mission.jpeg" alt="Our Mission to Protect Pune Homes" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-4xl font-bold mb-6 text-primary-900">Our Mission</h3>
                                <p className="text-xl text-primary-700 leading-relaxed mb-8 font-medium">
                                    Our mission is to provide <span className="font-bold text-primary-900">efficient and professional quality service</span> that ensures safety and comfort for all our clients.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                        <span className="text-lg text-primary-700 font-medium">Prioritizing customer satisfaction at every interaction</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                        <span className="text-lg text-primary-700 font-medium">Continuous innovation in pest extermination methods</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                        <span className="text-lg text-primary-700 font-medium">Upholding the strictest environmental safety standards</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-center mb-6 text-primary-900 text-4xl font-bold">Our Core Principles</h2>
                    <p className="section-subtitle text-center max-w-3xl mx-auto mb-16 text-2xl text-primary-600">
                        The values that drive our commitment to a pest-free Pune.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="card p-8 text-center group hover:scale-105 border border-primary-200"
                            >
                                <div className={`w-24 h-24 ${value.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-primary-900">{value.title}</h3>
                                <p className="text-primary-600 leading-relaxed font-medium text-lg">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-[#FDFCF9]">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-center mb-16 text-primary-900 text-4xl font-bold">Meet Our Leadership Team</h2>

                    <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        {/* Rohini Gaikwad */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-primary-100">
                            <div className="h-56 bg-primary-900 flex items-center justify-center">
                                <img
                                    src="/rohini.jpeg"
                                    alt="Rohini Gaikwad - Business Leader at Shree Swami Samartha"
                                    className="w-40 h-40 bg-white rounded-full object-cover shadow-2xl border-4 border-primary-200"
                                />
                            </div>
                            <div className="p-10 text-center">
                                <h3 className="text-3xl font-bold mb-3 text-primary-900">Rohini Gaikwad</h3>
                                <p className="text-primary-500 font-bold text-xl mb-6 uppercase tracking-wide">Co-Founder & Business Head</p>
                                <p className="text-xl text-primary-700 leading-relaxed mb-6 font-medium">
                                    Expert in Business Administration with M.Com background.
                                </p>
                                <div className="bg-primary-50 rounded-xl p-6">
                                    <p className="text-lg text-primary-800 font-medium">
                                        <span className="font-bold text-primary-900">20 years</span> of experience in high-level business management and operations across multinational manufacturing firms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Ravindra Bagal */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-primary-100">
                            <div className="h-56 bg-primary-800 flex items-center justify-center">
                                <img
                                    src="/ravi.jpeg"
                                    alt="Ravindra Bagal - Technical Expert in Pest Management"
                                    className="w-40 h-40 bg-white rounded-full object-cover shadow-2xl border-4 border-primary-200"
                                />
                            </div>
                            <div className="p-10 text-center">
                                <h3 className="text-3xl font-bold mb-3 text-primary-900">Ravindra Bagal</h3>
                                <p className="text-primary-500 font-bold text-xl mb-6 uppercase tracking-wide">Co-Founder & Technical Head</p>
                                <p className="text-xl text-primary-700 leading-relaxed mb-6 font-medium">
                                    Highly skilled Pest Control Technician with specialized training.
                                </p>
                                <div className="bg-primary-50 rounded-xl p-6">
                                    <p className="text-lg text-primary-800 font-medium">
                                        <span className="font-bold text-primary-900">10 years</span> of direct field experience identifying and solving complex pest infestations for commercial and residential clients in Pune.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

