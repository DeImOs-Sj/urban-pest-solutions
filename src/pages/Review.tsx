import { useState } from 'react';
import { FaStar, FaUser, FaQuoteLeft } from 'react-icons/fa';

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
            review: 'Very satisfied with the cleaning service. They were punctual and did an amazing job. Highly recommended!',
            date: '1 month ago',
        },
        {
            name: 'Anita Desai',
            rating: 4,
            review: 'Good service overall. The technician was knowledgeable and explained everything clearly.',
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
                className={`${index < rating ? 'text-primary-500' : 'text-primary-200'} text-xl`}
            />
        ));
    };

    const averageRating = existingReviews.reduce((acc, review) => acc + review.rating, 0) / existingReviews.length;

    return (
        <div className="min-h-screen bg-[#FDFCF9]">
            {/* Hero Section */}
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">Customer Reviews</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium text-primary-100">
                        See what our satisfied customers have to say about our services
                    </p>
                </div>
            </section>

            {/* Rating Overview */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-[#FDFCF9] rounded-3xl shadow-xl p-10 md:p-14 text-center border border-primary-100">
                        <h2 className="text-4xl font-bold mb-8 text-primary-900">Overall Rating</h2>
                        <div className="flex items-center justify-center mb-6">
                            <span className="text-7xl font-extrabold text-primary-900 mr-6">{averageRating.toFixed(1)}</span>
                            <div>
                                <div className="flex mb-3">
                                    {renderStars(Math.round(averageRating))}
                                </div>
                                <p className="text-xl text-primary-600 font-medium">Based on {existingReviews.length} reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="py-24 bg-[#FDFCF9]">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-center mb-16">What Our Customers Say</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
                        {existingReviews.map((review, index) => (
                            <div key={index} className="card p-8 hover:scale-105 border border-primary-200 bg-white">
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
                                    <FaQuoteLeft className="absolute -top-3 -left-2 text-primary-200 text-3xl" />
                                    <p className="text-primary-700 leading-relaxed pl-8 text-lg font-medium">{review.review}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Review Form */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="section-title text-center mb-6">Share Your Experience</h2>
                        <p className="section-subtitle text-center mb-16 text-2xl">
                            We'd love to hear about your experience with our services
                        </p>

                        <div className="bg-[#FDFCF9] rounded-3xl shadow-xl p-10 md:p-14 border border-primary-100">
                            {submitted ? (
                                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                                    <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You for Your Feedback!</h3>
                                    <p className="text-primary-700 font-medium">Your review has been submitted successfully.</p>
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
                                                placeholder="John Doe"
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
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="rating" className="block text-lg font-bold text-primary-900 mb-2">
                                            Rating *
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
                                            Your Review *
                                        </label>
                                        <textarea
                                            id="review"
                                            name="review"
                                            required
                                            value={formData.review}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-6 py-4 border-2 border-primary-200 rounded-xl focus:border-primary-900 focus:outline-none transition-colors resize-none text-lg bg-white"
                                            placeholder="Share your experience with our services..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full btn-primary flex items-center justify-center space-x-3 text-xl py-4"
                                    >
                                        <span>Submit Review</span>
                                        <FaStar />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary-950 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-8">
                        Experience Our Quality Service
                    </h2>
                    <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto text-primary-200 font-medium">
                        Join our satisfied customers and experience the difference
                    </p>
                    <a href="/contact" className="btn-secondary bg-white text-primary-900 hover:bg-primary-50 border-none text-xl px-10 py-5">
                        Book a Service
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Review;
