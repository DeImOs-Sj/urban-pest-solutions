import { FaAward, FaUsers, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const About = () => {
    const values = [
        {
            icon: <FaAward className="text-4xl" />,
            title: 'Quality Service',
            description: 'We are committed to delivering the highest quality pest control and cleaning services.',
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
            {/* Hero Section */}
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">About Us</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium text-primary-100">
                        Learn more about our journey, mission, and the team behind Shree Swami Samartha
                    </p>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="section-title text-center mb-16">Our Story</h2>

                        <div className="bg-[#FDFCF9] rounded-3xl shadow-xl p-10 md:p-16 space-y-8 border border-primary-100">
                            <p className="text-xl text-primary-800 leading-relaxed font-medium">
                                <span className="font-extrabold text-primary-900">Shree Swami Samartha</span> is a Pest Control Company established in{' '}
                                <span className="font-bold">January 2023</span> with a vision to provide exceptional pest control and cleaning services to the people of Pune and beyond.
                            </p>

                            <p className="text-xl text-primary-800 leading-relaxed font-medium">
                                Founded by <span className="font-extrabold text-primary-900">Rohini Gaikwad (M.Com - Owner)</span>, who brings 20 years of invaluable experience in MNC's and Manufacturing Companies with specialization in Business Administration. Her expertise in business management ensures that our operations run smoothly and efficiently.
                            </p>

                            <p className="text-xl text-primary-800 leading-relaxed font-medium">
                                Our technical expertise comes from <span className="font-extrabold text-primary-900">Ravindra Bagal (Technician - Owner)</span>, who has dedicated 6 years to mastering the pest control industry. Ravindra's hands-on approach and commitment to understanding customer problems at the ground level sets us apart from the competition.
                            </p>

                            <p className="text-xl text-primary-800 leading-relaxed font-medium">
                                We provide comprehensive pest control services to residential, commercial, and industrial segments. Our services extend beyond pest control to include professional fogging and cleaning services, all delivered by our dedicated expert teams.
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
                                <div className="w-24 h-24 bg-primary-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-4xl font-bold mb-6 text-primary-900">Our Vision</h3>
                                <p className="text-xl text-primary-700 leading-relaxed mb-8 font-medium">
                                    Our vision is to become the <span className="font-bold text-primary-900">preeminent Pest Control and Facility Management Company in India</span>.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="w-3 h-3 bg-primary-900 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                        <span className="text-lg text-primary-700 font-medium">Provide the latest technology to our customers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-3 h-3 bg-primary-900 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                        <span className="text-lg text-primary-700 font-medium">Be the #1 choice in the industry</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-3 h-3 bg-primary-900 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                        <span className="text-lg text-primary-700 font-medium">Set new standards in service excellence</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="relative group">
                            <div className="bg-white rounded-3xl shadow-xl p-12 h-full border-t-8 border-primary-600 transition-transform hover:-translate-y-2 duration-300">
                                <div className="w-24 h-24 bg-primary-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-4xl font-bold mb-6 text-primary-900">Our Mission</h3>
                                <p className="text-xl text-primary-700 leading-relaxed mb-8 font-medium">
                                    Our mission is to provide <span className="font-bold text-primary-900">quality service in an efficient and professional manner</span> to ensure safety and comfort.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                        <span className="text-lg text-primary-700 font-medium">Ensure customer satisfaction at every step</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                        <span className="text-lg text-primary-700 font-medium">Continually improve our services and processes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                                        <span className="text-lg text-primary-700 font-medium">Maintain the highest safety standards</span>
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
                    <h2 className="section-title text-center mb-6">Our Core Values</h2>
                    <p className="section-subtitle text-center max-w-3xl mx-auto mb-16 text-2xl">
                        The principles that guide everything we do
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
                    <h2 className="section-title text-center mb-16">Meet Our Leadership</h2>

                    <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        {/* Rohini Gaikwad */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-primary-100">
                            <div className="h-56 bg-primary-900 flex items-center justify-center">
                                <img
                                    src="/rohini.jpeg"
                                    alt="Rohini Gaikwad"
                                    className="w-40 h-40 bg-white rounded-full object-cover shadow-2xl border-4 border-primary-200"
                                />
                            </div>
                            <div className="p-10 text-center">
                                <h3 className="text-3xl font-bold mb-3 text-primary-900">Rohini Gaikwad</h3>
                                <p className="text-primary-500 font-bold text-xl mb-6 uppercase tracking-wide">Co-Founder & Business Head</p>
                                <p className="text-xl text-primary-700 leading-relaxed mb-6 font-medium">
                                    M.Com with Specialization in Business Administration
                                </p>
                                <div className="bg-primary-50 rounded-xl p-6">
                                    <p className="text-lg text-primary-800 font-medium">
                                        <span className="font-bold text-primary-900">20 years</span> of experience in MNC's & Manufacturing Companies
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Ravindra Bagal */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-primary-100">
                            <div className="h-56 bg-primary-800 flex items-center justify-center">
                                <img
                                    src="/ravi.jpeg"
                                    alt="Ravindra Bagal"
                                    className="w-40 h-40 bg-white rounded-full object-cover shadow-2xl border-4 border-primary-200"
                                />
                            </div>
                            <div className="p-10 text-center">
                                <h3 className="text-3xl font-bold mb-3 text-primary-900">Ravindra Bagal</h3>
                                <p className="text-primary-500 font-bold text-xl mb-6 uppercase tracking-wide">Co-Founder & Technical Head</p>
                                <p className="text-xl text-primary-700 leading-relaxed mb-6 font-medium">
                                    Certified Pest Control Technician
                                </p>
                                <div className="bg-primary-50 rounded-xl p-6">
                                    <p className="text-lg text-primary-800 font-medium">
                                        <span className="font-bold text-primary-900">6 years</span> of hands-on experience in Pest Control Services
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
