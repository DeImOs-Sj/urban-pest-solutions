import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const carouselImages = [
    {
        src: "/image1.jpeg",
        title: "Expert Pest Control",
        subtitle: "Professional technicians at your service",
    },
    {
        src: "/image2.jpg",
        title: "Expert Pest Control",
        subtitle: "Professional technicians at your service",
    },
    {
        src: "/image3.jpg",
        title: "Expert Pest Control",
        subtitle: "Professional technicians at your service",
    },
    {
        src: "/image4.jpeg",
        title: "Expert Pest Control",
        subtitle: "Professional technicians at your service",
    },
    {
        src: "/image5.jpeg",
        title: "Our Technician",
        subtitle: "Professional technicians at your service",
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? carouselImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === carouselImages.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full h-[600px] md:h-[700px] group overflow-hidden rounded-2xl shadow-2xl my-8">
            <div
                style={{ backgroundImage: `url(${carouselImages[currentIndex].src})` }}
                className="w-full h-full bg-center bg-cover duration-500 transition-all ease-in-out transform hover:scale-105"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up">
                        {carouselImages[currentIndex].title}
                    </h2>
                    <p className="text-xl md:text-3xl text-gray-100 font-semibold drop-shadow-md animate-fade-in-up animation-delay-200">
                        {carouselImages[currentIndex].subtitle}
                    </p>
                </div>
            </div>

            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black transition-all">
                <FaChevronLeft onClick={prevSlide} size={30} />
            </div>

            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black transition-all">
                <FaChevronRight onClick={nextSlide} size={30} />
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => setCurrentIndex(slideIndex)}
                        className={`text-2xl cursor-pointer transition-all duration-300 ${currentIndex === slideIndex ? "text-white scale-125" : "text-white/50"
                            }`}
                    >
                        •
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
