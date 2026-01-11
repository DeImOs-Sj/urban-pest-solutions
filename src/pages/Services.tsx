import { FaFileInvoiceDollar, FaPlane, FaHandshake, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
    const mainServices = [
        {
            image: "/pestControl.jpeg",
            title: 'Pest Control',
            description: 'Where You Need It And When You Need It',
            details: 'Shree Swami Samartha are engaged as a provider of efficient and highly useful Pest Control Management Services. We tackle all types of pests including cockroaches, ants, rats, lizards, bed bugs, mosquitos, and more.',
            features: [
                'Residential Pest Control',
                'Commercial Pest Control',
                'Industrial Pest Control',
                'Eco-friendly Solutions',
                'Regular Maintenance Plans',
                'Emergency Services'
            ],
            gradient: 'bg-primary-900',
            bgGradient: 'bg-primary-50',
        },
        {
            image: "/fogging.jpeg",
            title: 'Fogging Services',
            description: 'Advanced Fogging Technique',
            details: 'Shree Swami Samartha uses advanced fogging technique for killing insects. Fogging involves using a fine pesticide spray (aerosol) which is directed by a blower. Fast-acting pesticides like pyrethroids are typically used for maximum effectiveness.',
            features: [
                'Indoor Fogging',
                'Outdoor Fogging',
                'Thermal Fogging',
                'ULV Fogging',
                'Mosquito Control',
                'Disease Prevention'
            ],
            gradient: 'bg-primary-800',
            bgGradient: 'bg-primary-50',
        },
        {
            image: "/cleaning.jpeg",
            title: 'Cleaning Services',
            description: 'Professional House Cleaning',
            details: 'Shree Swami Samartha provides professional house cleaning services in a very professional manner and as per the requirements of the customers. Our dedicated expert team ensures your space is spotless and hygienic.',
            features: [
                'Deep Cleaning',
                'Regular Maintenance',
                'Office Cleaning',
                'Post-Construction Cleaning',
                'Carpet & Upholstery Cleaning',
                'Sanitization Services'
            ],
            gradient: 'bg-primary-700',
            bgGradient: 'bg-primary-50',
        },
    ];

    const otherServices = [
        {
            icon: <FaFileInvoiceDollar />,
            title: 'Export Import Consultancy',
        },
        {
            icon: <FaHandshake />,
            title: 'Society Registration & Audit',
        },
        {
            icon: <FaFileInvoiceDollar />,
            title: 'Accounts Outsourcing',
        },
        {
            icon: <FaFileInvoiceDollar />,
            title: 'Income Tax Return',
        },
        {
            icon: <FaFileInvoiceDollar />,
            title: 'GST Registration & Return',
        },
        {
            icon: <FaFileInvoiceDollar />,
            title: 'Tally Sales & Service',
        },
        {
            icon: <FaPlane />,
            title: 'Tours & Travels',
        },
        {
            icon: <FaFileInvoiceDollar />,
            title: 'PAN, TAN Application',
        },
        {
            icon: <FaFileInvoiceDollar />,
            title: 'TDS Return, DSC',
        },
        {
            icon: <FaFileInvoiceDollar />,
            title: 'Shop Act Registration',
        },
        {
            icon: <FaFileInvoiceDollar />,
            title: 'Online Rent Agreement',
        },
        {
            icon: <FaFileInvoiceDollar />,
            title: 'Registered Partnership Deed',
        },
    ];

    return (
        <div className="min-h-screen bg-[#FDFCF9]">
            {/* Hero Section */}
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">Our Services</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium text-primary-100">
                        Comprehensive pest control, cleaning, and business consultancy services tailored to your needs
                    </p>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-center mb-6">Core Services</h2>
                    <p className="section-subtitle text-center max-w-3xl mx-auto mb-20 text-2xl">
                        Professional solutions for a cleaner, pest-free environment
                    </p>

                    <div className="space-y-20">
                        {mainServices.map((service, index) => (
                            <div
                                key={index}
                                className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-12 items-center`}
                            >
                                {/* Icon & Title Side */}
                                <div className={`lg:w-1/2 ${service.bgGradient} rounded-3xl p-10 md:p-14 border border-primary-100 shadow-lg`}>
                                    <img src={service.image} className={`w-32 h-32 ${service.gradient} rounded-3xl mx-auto lg:mx-0 mb-8 flex items-center justify-center text-white shadow-2xl`} />

                                    <h3 className="text-4xl font-extrabold mb-4 text-primary-900">{service.title}</h3>
                                    <p className="text-2xl font-bold text-primary-700 mb-6">{service.description}</p>
                                    <p className="text-xl text-primary-600 leading-relaxed font-medium">{service.details}</p>
                                </div>

                                {/* Features Side */}
                                < div className="lg:w-1/2 w-full" >
                                    <div className="bg-white rounded-3xl shadow-xl p-10 border border-primary-100">
                                        <h4 className="text-3xl font-bold mb-8 text-primary-900">What We Offer:</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start space-x-4 group">
                                                    <FaCheckCircle className="text-2xl mt-1 flex-shrink-0 text-primary-900 group-hover:scale-110 transition-transform" />
                                                    <span className="text-xl text-primary-700 group-hover:text-primary-900 transition-colors font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </section >

            {/* Other Services */}
            < section className="py-24 bg-[#FDFCF9]" >
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-center mb-6">Additional Services</h2>
                    <p className="section-subtitle text-center max-w-3xl mx-auto mb-16 text-2xl">
                        Comprehensive business and consultancy services to support your needs
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {otherServices.map((service, index) => (
                            <div
                                key={index}
                                className="card p-8 flex items-center space-x-6 hover:scale-105 border border-primary-200"
                            >
                                <div className="w-16 h-16 bg-primary-900 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg">
                                    {service.icon}
                                </div>
                                <h3 className="font-bold text-xl text-primary-900">{service.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Why Choose Us */}
            < section className="py-24 bg-white" >
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-center mb-16">Why Choose Us?</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-900 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                17+
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-primary-900">Years Combined Experience</h3>
                            <p className="text-xl text-primary-600 font-medium">In business and pest control</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                100%
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-primary-900">Customer Satisfaction</h3>
                            <p className="text-xl text-primary-600 font-medium">Quality guaranteed</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-700 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                24/7
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-primary-900">Support Available</h3>
                            <p className="text-xl text-primary-600 font-medium">We're here when you need us</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                ✓
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-primary-900">Certified Professionals</h3>
                            <p className="text-xl text-primary-600 font-medium">Trained and experienced</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* CTA Section */}
            < section className="py-24 bg-primary-950 text-white" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-8">
                        Ready to Experience Our Services?
                    </h2>
                    <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto text-primary-200 font-medium">
                        Contact us today for a free consultation and customized service plan
                    </p>
                    <Link to="/contact" className="btn-secondary bg-white text-primary-900 hover:bg-primary-50 border-none text-xl px-10 py-5">
                        Get a Free Quote
                    </Link>
                </div>
            </section >
        </div >
    );
};

export default Services;
