import { useState } from 'react';
import { FaPlay, FaImage, FaTimes } from 'react-icons/fa';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: '/carousel-1.png', alt: 'Pest Control Service 1', category: 'Pest Control' },
        { src: '/carousel-2.png', alt: 'Fogging Service', category: 'Fogging' },
        // Add more placeholder images as needed
        { src: 'https://via.placeholder.com/600x400?text=Service+4', alt: 'Service 4', category: 'Pest Control' },
        { src: 'https://via.placeholder.com/600x400?text=Service+6', alt: 'Service 6', category: 'Fogging' },
    ];

    const videos = [
        { src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Pest Control Process', thumbnail: 'https://via.placeholder.com/600x400?text=Video+1' },
        { src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Customer Testimonial', thumbnail: 'https://via.placeholder.com/600x400?text=Video+3' },
    ];

    return (
        <div className="min-h-screen bg-[#FDFCF9]">
            {/* Hero Section */}
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">Our Gallery</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium text-primary-100">
                        A visual tour of our professional services and successful projects
                    </p>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-center mb-16">Service Highlights</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer border border-primary-200"
                                onClick={() => setSelectedImage(img.src)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-primary-900 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <FaImage className="text-4xl mx-auto mb-2" />
                                        <p className="font-bold text-lg">{img.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Gallery */}
            <section className="py-24 bg-[#FDFCF9]">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-center mb-16">Video Showcase</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video, index) => (
                            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-primary-200 group hover:scale-105 transition-transform duration-300">
                                <div className="relative h-64 bg-black">
                                    <iframe
                                        src={video.src}
                                        title={video.title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-primary-900 mb-2">{video.title}</h3>
                                    <div className="flex items-center text-primary-600 font-medium">
                                        <FaPlay className="mr-2 text-sm" />
                                        <span>Watch Video</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white text-4xl hover:text-primary-300 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <FaTimes />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Gallery Preview"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default Gallery;
