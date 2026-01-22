import { useState, useEffect } from "react";

const clients = [
    {
        name: "Capgemini",
        image: "/capgemini.png",
        description: "Pest Control, Fogging & Snake Control - Capgemini Technology Services Talwade, Pune"
    },
    {
        name: "Residency Club",
        image: "/residency-club.jpg",
        description: "Pest, Rodent & Fogging Control : Residency Club, Pune"
    },
    {
        name: "Optima Height",
        image: "/optima-height.jpg",
        description: "Herbal Pest Control, Optima Heights, Kesnand, Pune"
    },
    {
        name: "Sheraton Hotel",
        image: "/sheraton-hotel.jpg",
        description: "Pest, Rodent & Fogging Control : Sheraton Hotel, Pune"
    },
    {
        name: "Barclays",
        image: "/barclays.jpg",
        description: "Rodent, Mosquito, Pest Control Services – Barclays, Kharadi, Pune"
    },
    {
        name: "Nyati Elan",
        image: "/nyati-elan.jpg",
        description: "Ant Cockroach Control : Nyati Elan, Pune"
    },
    {
        name: "Bramha Suncity",
        image: "/bramha-suncity.jpg",
        description: "Cockroach Control : Bramha Suncity, Pune"
    },
    {
        name: "Season 24 Banquet Hall",
        image: "/season-24.jpg",
        description: "Rodent, Pest Control : Seasons 24 Banquet Hall, Wagholi, Pune"
    },
];

const ClientCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight">
                        Services Rendered by Ravindra Bagal
                    </h2>
                    <p className="text-2xl text-primary-50 font-bold max-w-3xl mx-auto drop-shadow-lg">
                        Thanks for giving us an opportunity to serve you with our Quality & Assured services
                    </p>
                </div>

                <div className="max-w-5xl mx-auto h-[500px] md:h-[600px] relative">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col items-center justify-center ${index === currentIndex
                                ? "opacity-100 scale-100 translate-y-0"
                                : "opacity-0 scale-95 translate-y-10 pointer-events-none"
                                }`}
                        >
                            <div className="w-full flex flex-col items-center justify-center group">
                                <div className="h-64 md:h-80 w-full flex items-center justify-center mb-10">
                                    <img
                                        src={client.image}
                                        alt={client.name}
                                        className="max-h-full max-w-full object-contain filter brightness-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="text-center max-w-3xl px-4">
                                    <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                                        {client.name}
                                    </h3>
                                    <p className="text-xl md:text-2xl text-primary-50 font-medium leading-relaxed drop-shadow-md opacity-90">
                                        {client.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-12 space-x-3">
                    {clients.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === index ? "w-12 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" : "w-3 bg-white/30 hover:bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientCarousel;
