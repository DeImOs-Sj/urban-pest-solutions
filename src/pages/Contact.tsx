import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import SEO from '../components/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <FaMapMarkerAlt className="text-3xl" />,
            title: 'Our Location',
            details: 'Sai Developers, Dwarka Residency, Mundhwa - Manjari Rd, Mundhwa, Maharashtra',
            gradient: 'bg-primary-900',
        },
        {
            icon: <FaPhone className="text-3xl" />,
            title: 'Phone Numbers',
            details: '7620081685 / 9529628158',
            gradient: 'bg-primary-800',
        },
        {
            icon: <FaEnvelope className="text-3xl" />,
            title: 'Email Address',
            details: 'info@samartha7pestcontrol.co.in',
            gradient: 'bg-primary-700',
        },
        {
            icon: <FaClock className="text-3xl" />,
            title: 'Working Hours',
            details: 'Mon - Sat: 9:00 AM - 7:00 PM\nSunday: By Appointment',
            gradient: 'bg-primary-600',
        },
    ];

    return (
        <div className="min-h-screen bg-[#FDFCF9]">
            <SEO
                title="Contact Us | Hire Best Pest Control in Pune"
                description="Get in touch with Shree Swami Samartha Pest Control for a free quote. We provide reliable pest control services in Pune. Call us at 7620081685 or visit our office in Mundhwa."
                keywords="contact pest control pune, pest control quote pune, shree swami samartha contact, pest control mundhwa, hire pest control pune"
            />
            {/* Hero Section */}
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">Get in Touch</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium text-primary-100">
                        We'd love to hear from you. Contact us for any queries or to schedule a service
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="card p-8 text-center hover:scale-105 border border-primary-200"
                            >
                                <div className={`w-24 h-24 ${info.gradient} rounded-full mx-auto mb-6 flex items-center justify-center text-white shadow-lg`}>
                                    {info.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-primary-900">{info.title}</h3>
                                <p className="text-primary-600 text-lg font-medium whitespace-pre-line">{info.details}</p>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form and Map */}
                    <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                        {/* Contact Form */}
                        <div className="bg-[#FDFCF9] rounded-3xl shadow-xl p-10 md:p-12 border border-primary-100">
                            <h2 className="text-4xl font-bold mb-8 text-primary-900">Send us a Message</h2>

                            {submitted ? (
                                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                                    <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
                                    <p className="text-primary-700 font-medium">Your message has been sent successfully. We'll get back to you soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-lg font-bold text-primary-900 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 border-2 border-primary-200 rounded-xl focus:border-primary-900 focus:outline-none transition-colors text-lg bg-white"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-lg font-bold text-primary-900 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 border-2 border-primary-200 rounded-xl focus:border-primary-900 focus:outline-none transition-colors text-lg bg-white"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-lg font-bold text-primary-900 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 border-2 border-primary-200 rounded-xl focus:border-primary-900 focus:outline-none transition-colors text-lg bg-white"
                                                placeholder="+91 1234567890"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-lg font-bold text-primary-900 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 border-2 border-primary-200 rounded-xl focus:border-primary-900 focus:outline-none transition-colors text-lg bg-white"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="pest-control">Pest Control</option>
                                            <option value="fogging">Fogging Services</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-lg font-bold text-primary-900 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-6 py-4 border-2 border-primary-200 rounded-xl focus:border-primary-900 focus:outline-none transition-colors resize-none text-lg bg-white"
                                            placeholder="Tell us about your requirements..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full btn-primary flex items-center justify-center space-x-3 text-xl py-4"
                                    >
                                        <span>Send Message</span>
                                        <FaPaperPlane />
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-primary-100 h-full min-h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5967891234567!2d73.95655181744384!3d18.532509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3f1c60417f7%3A0x835ca298a992c42e!2sDwarka%20residency%2C%20Sai%20developers!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact Section */}
            <section className="py-24 bg-primary-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
                        Need Immediate Assistance?
                    </h2>
                    <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto text-primary-200 font-medium">
                        Call us now for urgent pest control services
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="tel:7620081685"
                            className="btn-secondary bg-white text-primary-900 hover:bg-primary-50 border-none text-xl px-10 py-5 inline-flex items-center justify-center space-x-3"
                        >
                            <FaPhone />
                            <span>7620081685</span>
                        </a>
                        <a
                            href="tel:9529628158"
                            className="btn-secondary border-white text-primary-900 hover:bg-white hover:text-primary-900 text-xl px-10 py-5 inline-flex items-center justify-center space-x-3"
                        >
                            <FaPhone />
                            <span>9529628158</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
