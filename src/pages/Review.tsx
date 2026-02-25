import { useState } from 'react';
import { FaStar, FaUser, FaQuoteLeft } from 'react-icons/fa';
import SEO from '../components/SEO';

const Review = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: 5,
        review: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const existingReviews = [
        {
            name: 'Priya Sharma',
            rating: 5,
            review: 'Excellent service! The team was professional and thorough. Our pest problem was completely resolved.',
            date: '2 weeks ago',
        },
        {
            name: 'Rajesh Patel',
            rating: 5,
            review: 'Very satisfied with the pest control service. They were punctual and did an amazing job. Highly recommended!',
            date: '1 month ago',
        },
        {
            name: 'Anita Desai',
            rating: 4,
            review: 'Good service overall. The tech was knowledgeable and explained the process carefully.',
            date: '1 month ago',
        },
        {
            name: 'Vikram Singh',
            rating: 5,
            review: 'Outstanding pest control service! Ravindra personally came and solved our mosquito problem. Very professional.',
            date: '2 months ago',
        },
        {
            name: 'Meera Kulkarni',
            rating: 5,
            review: 'Best pest control service in Pune! They use safe products and the results are long-lasting.',
            date: '2 months ago',
        },
        {
            name: 'Amit Joshi',
            rating: 5,
            review: 'Highly professional team. They handled our office pest control with minimal disruption to our work.',
            date: '3 months ago',
        },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Review submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', rating: 5, review: '' });
        }, 3000);
    };

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <FaStar
                key={index}
                className={`${index < rating ? 'text-accent-400' : 'text-primary-200'} text-xl`}
            />
        ));
    };


    return (
        <div className="min-h-screen bg-[#FDFCF9]">
            <SEO
                title="Customer Reviews | Rated 4.9/5 for Pune Pest Control"
                description="Read why hundreds of Pune homeowners trust Shree Swami Samartha. Verified customer reviews for cockroach, termite, and mosquito services."
                keywords="pest control reviews pune, customer testimonials, best pest control feedback, shree swami samartha reviews, top rated exterminators pune"
            />
            {/* Hero Section */}
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">Client Testimonials</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium text-primary-100">
                        Honest feedback from residential and commercial clients across Pune.
                    </p>
                </div>
            </section>

            {/* Rating Overview */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-[#FDFCF9] rounded-3xl shadow-xl p-10 md:p-14 text-center border border-primary-100">
                        <h2 className="text-4xl font-bold mb-8 text-primary-900">Our Reputation</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center mb-6">
                            <span className="text-7xl font-extrabold text-primary-900 md:mr-6 mb-4 md:mb-0">4.9 / 5</span>
                            <div>
                                <div className="flex justify-center mb-3">
                                    {renderStars(Math.round(4.9))}
                                </div>
                                <p className="text-xl text-primary-600 font-medium">Based on 500+ Local Pune Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-24 bg-[#FDFCF9]">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-center mb-16 text-primary-900 text-4xl font-bold uppercase">Success Stories</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
                        {existingReviews.map((review, index) => (
                            <article key={index} className="card p-8 hover:scale-105 border border-primary-200 bg-white">
                                <div className="flex items-center mb-6">
                                    <div className="w-14 h-14 bg-primary-900 rounded-full flex items-center justify-center text-white mr-4 shadow-lg">
                                        <FaUser className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-primary-900">{review.name}</h3>
                                        <p className="text-sm text-primary-500 font-medium">{review.date}</p>
                                    </div>
                                </div>

                                <div className="flex mb-6">
                                    {renderStars(review.rating)}
                                </div>

                                <div className="relative">
                                    <FaQuoteLeft className="absolute -top-3 -left-2 text-primary-100 text-3xl" />
                                    <p className="text-primary-700 leading-relaxed pl-8 text-lg font-medium italic">"{review.review}"</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Review Form */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="section-title text-center mb-6 text-primary-900 text-4xl font-bold">Leave a Review</h2>
                        <p className="section-subtitle text-center mb-16 text-2xl text-primary-600">
                            Your feedback helps us maintain the highest standards of pest management.
                        </p>

                        <div className="bg-[#FDFCF9] rounded-3xl shadow-xl p-10 md:p-14 border border-primary-100">
                            {submitted ? (
                                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                                    <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-green-700 mb-2">Review Submitted!</h4>
                                    <p className="text-primary-700 font-medium">Thank you for sharing your experience with us.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <label htmlFor="name" className="block text-lg font-bold text-primary-900 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-6 py-4 border-2 border-primary-200 rounded-xl focus:border-primary-900 focus:outline-none transition-colors text-lg bg-white"
                                                placeholder="Name"
                                            />
                                        </div>

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
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="rating" className="block text-lg font-bold text-primary-900 mb-2">
                                            Service Rating *
                                        </label>
                                        <select
                                            id="rating"
                                            name="rating"
                                            required
                                            value={formData.rating}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 border-2 border-primary-200 rounded-xl focus:border-primary-900 focus:outline-none transition-colors text-lg bg-white"
                                        >
                                            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                                            <option value="4">⭐⭐⭐⭐ Very Good</option>
                                            <option value="3">⭐⭐⭐ Good</option>
                                            <option value="2">⭐⭐ Fair</option>
                                            <option value="1">⭐ Poor</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="review" className="block text-lg font-bold text-primary-900 mb-2">
                                            Describe your Experience *
                                        </label>
                                        <textarea
                                            id="review"
                                            name="review"
                                            required
                                            value={formData.review}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-6 py-4 border-2 border-primary-200 rounded-xl focus:border-primary-900 focus:outline-none transition-colors resize-none text-lg bg-white"
                                            placeholder="What did you like about our pest control service?"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full btn-primary flex items-center justify-center space-x-3 text-xl py-4"
                                    >
                                        <span>Post Review</span>
                                        <FaStar />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary-950 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-8">
                        Ready for a Pest-Free Space?
                    </h2>
                    <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto text-primary-200 font-medium">
                        Join our community of satisfied Pune clients.
                    </p>
                    <a href="/contact" className="btn-secondary bg-white text-primary-900 hover:bg-primary-50 border-none text-xl px-10 py-5">
                        Schedule an Inspection
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Review;

