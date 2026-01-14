
const ServiceHistory = () => {
    const history = [
        "Pest Control, Fogging & Snake Control - Capgemini Technology Services Talwade, Pune",
        "Herbal Pest Control, Optima Heights, Kesnand, Pune",
        "Cockroach Control – City Hospital, Dhanori, Pune",
        "Rodent, Mosquito, Pest Control Services – Barclays, Kharadi, Pune",
        "Pest & Rodent Control : Crowne Plaza, Pune",
        "Pest, Rodent & Fogging Control : Residency Club, Pune",
        "Pest, Rodent & Fogging Control : Sheraton Hotel, Pune",
        "Ant Cockroach Control : Nyati Elan, Pune",
        "Cockroach Control : Bramha Suncity, Pune",
        "Rodent, Pest Control : Seasons 24 Banquet Hall, Wagholi, Pune",
        "Cleaning Service"
    ];

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
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight">
                        Our Service Footprint
                    </h2>
                    <p className="text-2xl text-primary-50 font-bold max-w-3xl mx-auto drop-shadow-lg">
                        Delivering excellence across major corporate and residential landmarks in Pune
                    </p>
                </div>

                <div className="max-w-6xl mx-auto space-y-4">
                    {history.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#1B2B1B]/90 hover:bg-[#253B25] transition-all duration-500 py-5 px-8 rounded-xl border border-white/5 shadow-2xl transform hover:scale-[1.01] cursor-default group"
                        >
                            <p className="text-white text-center text-xl md:text-2xl font-bold tracking-wide drop-shadow-sm">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceHistory;
