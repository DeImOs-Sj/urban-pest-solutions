import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ServiceHistory from '../components/ServiceHistory';
import SEO from '../components/SEO';

const Services = () => {
    const mainServices = [
        {
            image: "/pestControl.jpeg",
            title: "PEST CONTROL",
            description: "Where You Need It And When You Need It",
            details: "Shree Swami Samartha are engaged as a provider of efficient and highly useful Pest Control Management Services. We tackle all types of pests including cockroaches, ants, rats, lizards, bed bugs, mosquitos, and more.",
            features: [
                "Residential Pest Control",
                "Commercial Pest Control",
                "Industrial Pest Control",
                "Eco-friendly Solutions",
                "Regular Maintenance Plans",
                "Emergency Services"
            ],
            gradient: 'bg-primary-900',
            bgGradient: 'bg-primary-50',
        },
        {
            image: "/cockroachControl.jpeg",
            title: "Cockroach Control",
            description: "We Clean Up Your Problem of Cockroaches",
            details: "Cockroaches have been reported to spread 33 kinds of bacteria, 6 kinds of parasitic worms, and at least 7 other kinds of human pathogens. They can pick up germs on the spines of their legs and bodies as they crawl through decaying matter or sewage and then carry these into food or onto food surfaces. Cockroaches can cause the spread of diseases such as dysentery, gastroenteritis, typhoid and poliomyelitis.",
            features: [
                "Baiting Systems",
                "Gel Treatments",
                "Spray Treatments",
                "Sanitation Advice",
                "Regular Monitoring",
                "Odorless Solutions"
            ],
            gradient: 'bg-primary-800',
            bgGradient: 'bg-white',
        },
        {
            image: "/antControl.jpg",
            title: "Ant Management",
            description: "An ant’s life begins as an egg.",
            details: "Adults ants belongs to one of three Castes: Queen, worker, or male. The process of development from egg to adult can take from several weeks to months, depending on the species and the environment. Workers are females that do not reproduce, but perform other jobs, such as taking care of the brood, building and cleaning the nest, and gathering food.",
            features: [
                "Colony Elimination",
                "Barrier Treatments",
                "Interior & Exterior Control",
                "Source Identification",
                "Preventive Measures",
                "Safe for Pets & Kids"
            ],
            gradient: 'bg-primary-700',
            bgGradient: 'bg-primary-50',
        },
        {
            image: "/bedbugControl.jpeg",
            title: "Bed Bug Treatment",
            description: "Prevent and exterminate bugs from your home",
            details: "The bed bug is an ectoparasite of primarily humans but will also attack poultry and various mammals. Female bed bugs lay 1 to 5 eggs per day. Developmental time takes 21 days at 86 F to 120 days at 65 F. Although the bite of bed bugs is painless, most people (80%) develop an allergic reaction to the saliva injected by the bug as it feeds.",
            features: [
                "Thorough Inspection",
                "Steam Treatment",
                "Chemical Treatment",
                "Mattress Encasement",
                "Follow-up Visits",
                "Guaranteed Results"
            ],
            gradient: 'bg-primary-600',
            bgGradient: 'bg-white',
        },
        {
            image: "/rodentControl.jpeg",
            title: "Rodent Management",
            description: "Rats and mice carry various infectious diseases",
            details: "Rats and mice carry diseases such as Salmonella and LCMV. Mice leave small drops of urine wherever they go, which can trigger asthma attacks. Rats may bite when threatened. Both rats and mice instinctively gnaw on objects, which can damage property and become dangerous if they chew on electrical wires.",
            features: [
                "Trapping Systems",
                "Bait Stations",
                "Exclusion Services",
                "Sanitation Audits",
                "Burrow Treatment",
                "Rodent Proofing"
            ],
            gradient: 'bg-primary-500',
            bgGradient: 'bg-primary-50',
        },
        {
            image: "/flyControl.jpeg",
            title: "Fly Management",
            description: "House fly adult is about (4-7.5mm) long",
            details: "House flies are general feeders on liquids, attracted to many substances from excrement to human foods. They can liquefy solid foods by regurgitation. Development from egg to adult can be as few as 6 days. They are known to spread various diseases through mechanical transfer.",
            features: [
                "Light Traps",
                "Baiting Programs",
                "Residual Sprays",
                "Source Reduction",
                "Drain Treatments",
                "Screening Solutions"
            ],
            gradient: 'bg-primary-400',
            bgGradient: 'bg-white',
        },
        {
            image: "/mosControl.jpeg",
            title: "Mosquito Management",
            description: "Female mosquitoes suck our blood",
            details: "Adult mosquitoes are about 1/4 to 3/8 inch long. They have adapted to almost every kind of aquatic situation. Larvae move actively in water and come to surface frequently to breathe. Mosquitoes are well-known to spread diseases such as West Nile Virus, malaria and dengue fever.",
            features: [
                "Larviciding",
                "Adulticiding (Fogging)",
                "Source Reduction",
                "Mist Systems",
                "Biological Control",
                "Repellent Barriers"
            ],
            gradient: 'bg-primary-900',
            bgGradient: 'bg-primary-50',
        },
        {
            image: "/termiteControl.jpeg",
            title: "Termite Management",
            description: "Subterranean termites live in underground colonies",
            details: "Subterranean termites can contain up to 2 million members. They build distinctive 'mud tubes' to gain access to food sources. They are by far the most destructive species and can collapse a building entirely, meaning possible financial ruin for a homeowner.",
            features: [
                "Pre-Construction Treatment",
                "Post-Construction Treatment",
                "Soil Treatment",
                "Wood Treatment",
                "Baiting Systems",
                "Annual Inspections"
            ],
            gradient: 'bg-primary-800',
            bgGradient: 'bg-white',
        },
        {
            image: "/lizardControl.png",
            title: "Lizard Management",
            description: "The life cycle begins with the lizard hatching from an egg",
            details: "Most lizards lay soft, leathery eggs. Juveniles grow into adults without any significant changes other than size. While mostly harmless, they can be a nuisance and their droppings can contaminate food and surfaces.",
            features: [
                "Repellent Sprays",
                "Mechanical Traps",
                "Entry Point Sealing",
                "Insect Control (Food Source)",
                "Regular Monitoring",
                "Safe Formulations"
            ],
            gradient: 'bg-primary-700',
            bgGradient: 'bg-primary-50',
        },
        {
            image: "/woodBorerControl.jpeg",
            title: "Wood Borer Management",
            description: "Powder post beetles often attack hardwoods",
            details: "Powder post beetles lay their eggs in cracks of wood and the larvae tunnel into the surface, filling it with a very fine powder like dust. Their damages are second only to termites. They can be found in hardwood floors, timbers, antiques and other objects.",
            features: [
                "Injection Treatments",
                "Surface Sprays",
                "Fumigation",
                "Wood Preservation",
                "Infestation Mapping",
                "Long-term Protection"
            ],
            gradient: 'bg-primary-600',
            bgGradient: 'bg-white',
        },
        {
            image: "/spiderControl.jpeg",
            title: "Spider Management",
            description: "A female spider lays thousands of Eggs",
            details: "Spiders hatch from eggs wrapped in silk sacs. They look like tiny adults. While many spiders are beneficial as they eat other insects, their webs can be unsightly and some species can be venomous or cause allergic reactions.",
            features: [
                "Web Removal",
                "Residual Sprays",
                "Entry Point Sealing",
                "Exterior Barriers",
                "Dusting Treatments",
                "Monitoring Traps"
            ],
            gradient: 'bg-primary-500',
            bgGradient: 'bg-primary-50',
        },
        {
            image: "/fogging.jpeg",
            title: "Fogging Service",
            description: "Advanced Fogging Technique for Insect Control",
            details: "Shree Swami Samartha are using Fogging Technique also. Fogging is a technique used for killing insects that involves using a fine pesticide spray (aerosol) which is directed by a blower. In some cases, a hot vapour may be used to carry the spray and keep it airborne for longer.",
            features: [
                "Insect Elimination",
                "Fine Pesticide Spray",
                "Advanced Blower Tech",
                "Hot Vapour Options",
                "Fast-acting Pesticides",
                "Long-lasting Effect"
            ],
            gradient: 'bg-primary-400',
            bgGradient: 'bg-white',
        }
    ];

    const faqItems = [
        {
            question: "How do I prepare for a cockroach treatment?",
            answer: "To prepare for cockroach treatment, clean your kitchen thoroughly, remove food crumbs, empty the area under the sink, and ensure all food items are sealed in airtight containers. Our technician will provide specific instructions upon arrival."
        },
        {
            question: "What is the warranty for termite control?",
            answer: "We provide extensive warranties for termite control. For pre-construction termite treatment, we offer a 5-10 year warranty, and for post-construction treatment, typically a 1-5 year warranty depending on the plan selected."
        },
        {
            question: "Is bed bug treatment a one-time process?",
            answer: "Bed bug infestations usually require at least two treatments spaced 10-15 days apart to ensure that any newly hatched eggs are also eliminated. We provide a follow-up visit to guarantee results."
        },
        {
            question: "Do you offer herbal pest control solutions?",
            answer: "Yes, we specialize in herbal and eco-friendly pest control methods that are highly effective yet safe for residential spaces, hospitals, and food industry segments."
        }
    ];

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Prepare for Professional Cockroach Treatment",
        "description": "Essential steps to take before our pest control experts arrive at your home.",
        "step": [
            {
                "@type": "HowToStep",
                "text": "Clean all kitchen surfaces and remove food waste."
            },
            {
                "@type": "HowToStep",
                "text": "Empty cabinets and drawers in the kitchen and bathroom if instructed."
            },
            {
                "@type": "HowToStep",
                "text": "Cover or store all food items in airtight containers."
            },
            {
                "@type": "HowToStep",
                "text": "Keep pets and children away from the treatment area during the process."
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <div className="min-h-screen bg-[#FDFCF9]">
            <SEO
                title="Pest Control Services Pune | Termite, Cockroach & Rodent Control"
                description="Comprehensive extermination services in Pune. Certified experts in termite treatment, cockroach gel treatment, bed bug removal, and herbal pest control."
                keywords="pest control services pune, termite treatment pune, cockroach control pune, bed bug removal Pune, rodent management, fogging services pune, lizard control, mosquito control pune, best exterminator Pune, affordable pest control Pune, top-rated pest control, professional exterminator, Hadapsar, Kharadi, Wagholi, Mundhwa"
                additionalSchema={[faqSchema, howToSchema]}
            />
            {/* Hero Section */}
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">Professional Pest Control Services</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium text-primary-100">
                        Tailored extermination solutions for residential and commercial properties in Pune.
                    </p>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-center mb-6 text-primary-900">Our Core Extermination Services</h2>
                    <p className="section-subtitle text-center max-w-3xl mx-auto mb-20 text-2xl text-primary-700">
                        Reliable and efficient solutions for a cleaner, pest-free environment.
                    </p>

                    <div className="space-y-20">
                        {mainServices.map((service, index) => (
                            <div
                                key={index}
                                className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex gap-12 items-center`}
                            >
                                {/* Icon & Title Side */}
                                <div className={`lg:w-1/2 ${service.bgGradient || 'bg-white'} rounded-3xl p-10 md:p-14 border border-primary-100 shadow-lg`}>
                                    <div className="overflow-hidden rounded-3xl mb-8 shadow-2xl">
                                        <img src={service.image} className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" alt={`${service.title} Service - Shree Swami Samartha Pest Control`} />
                                    </div>

                                    <h3 className="text-4xl font-extrabold mb-4 text-primary-900">{service.title}</h3>
                                    <p className="text-2xl font-bold text-primary-700 mb-6">{service.description}</p>
                                    <p className="text-xl text-primary-600 leading-relaxed font-medium">{service.details}</p>
                                </div>

                                {/* Features Side */}
                                < div className="lg:w-1/2 w-full" >
                                    <div className="bg-white rounded-3xl shadow-xl p-10 border border-primary-100">
                                        <h4 className="text-3xl font-bold mb-8 text-primary-900">Key Features of our {service.title}:</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start space-x-4 group">
                                                    <FaCheckCircle className="text-2xl mt-1 flex-shrink-0 text-primary-900 group-hover:scale-110 transition-transform" />
                                                    <span className="text-xl text-primary-700 group-hover:text-primary-900 transition-colors font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-10">
                                            <Link to="/contact" className="inline-block bg-primary-900 text-white font-bold py-3 px-8 rounded-full hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                                Book {service.title} Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            </section >



            {/* Service History Section */}
            <ServiceHistory />

            {/* Why Choose Us */}
            < section className="py-24 bg-white" >
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-center mb-16 text-primary-900">Why Choose Shree Swami Samartha?</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-900 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                20+
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-primary-900">Years Experience</h3>
                            <p className="text-xl text-primary-600 font-medium">Combined expertise in pest management.</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                100%
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-primary-900">Satisfaction</h3>
                            <p className="text-xl text-primary-600 font-medium">Guaranteed results for every home.</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-700 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                24/7
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-primary-900">Dedicated Support</h3>
                            <p className="text-xl text-primary-600 font-medium">Emergency assistance when you need it.</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-24 h-24 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                ✓
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-primary-900">Certified Pros</h3>
                            <p className="text-xl text-primary-600 font-medium">Highly trained technician teams.</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* CTA Section */}
            < section className="py-24 bg-primary-950 text-white" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-8">
                        Get a Free Quote Today
                    </h2>
                    <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto text-primary-200 font-medium">
                        Secure your property with Pune's trusted pest control experts.
                    </p>
                    <Link to="/contact" className="btn-secondary bg-white text-primary-900 hover:bg-primary-50 border-none text-xl px-10 py-5">
                        Contact Us Now
                    </Link>
                </div>
            </section >
        </div >
    );
};

export default Services;

