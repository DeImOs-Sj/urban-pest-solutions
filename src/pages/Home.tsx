import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import ServiceHistory from "../components/ServiceHistory";
import ClientCarousel from "../components/ClientCarousel";
import SEO from "../components/SEO";

const Home = () => {
  const services = [
    {
      photo: "/pestControl.jpeg",
      title: "Pest Control",
      description:
        "Efficient and highly useful Pest Control Management Services for your home and business.",
      link: "/services",
    },
    {
      photo: "/cockroachControl.jpeg",
      title: "Cockroach Control",
      description:
        "We Clean Up Your Problem of Cockroaches. Cockroaches are known to spread 33 kinds of bacteria.",
      link: "/services",
    },
    {
      photo: "/antControl.jpg",
      title: "Ant Management",
      description:
        "Effective ant management services to control colonies and prevent infestation in your property.",
      link: "/services",
    },
    {
      photo: "/bedbugControl.jpeg",
      title: "Bed Bug Treatment",
      description:
        "Prevent and exterminate bugs from your home with the cleanest methods and specific products.",
      link: "/services",
    },
    {
      photo: "/rodentControl.jpeg",
      title: "Rodent Management",
      description:
        "Rats and mice carry various infectious diseases. We provide professional rodent control.",
      link: "/services",
    },
    {
      photo: "/flyControl.jpeg",
      title: "Fly Management",
      description:
        "Professional fly control services to keep your environment hygienic and disease-free.",
      link: "/services",
    },
    {
      photo: "/mosControl.jpeg",
      title: "Mosquito Management",
      description:
        "Comprehensive mosquito control to protect you from West Nile Virus, malaria and dengue.",
      link: "/services",
    },
    {
      photo: "/termiteControl.jpeg",
      title: "Termite Management",
      description:
        "Subterranean termites are the most destructive species. We provide expert termite control.",
      link: "/services",
    },
    {
      photo: "/lizardControl.png",
      title: "Lizard Management",
      description:
        "Lizard control services to keep your premises free from these unwanted reptiles.",
      link: "/services",
    },
    {
      photo: "/woodBorerControl.jpeg",
      title: "Wood Borer Management",
      description:
        "Powder post beetles often attack hardwoods. We provide specialized wood borer treatment.",
      link: "/services",
    },
    {
      photo: "/spiderControl.jpeg",
      title: "Spider Management",
      description:
        "Effective spider control and web removal services for a cleaner home environment.",
      link: "/services",
    },
    {
      photo: "/fogging.jpeg",
      title: "Fogging Service",
      description:
        "Advanced fogging technique for killing insects using fine pesticide spray and hot vapour.",
      link: "/services",
    },
  ];

  const faqItems = [
    {
      question: "What is the cost of pest control in Pune?",
      answer: "The cost of pest control in Pune varies depending on the type of service, the size of your property, and the severity of the infestation. At Shree Swami Samartha, we provide affordable and transparent pricing starting from competitive rates for residential apartments."
    },
    {
      question: "Which is the best pest control service in Pune?",
      answer: "Shree Swami Samartha Pest Control is highly rated for its professional expertise, 20+ years of combined experience, and eco-friendly solutions. We serve major areas like Hadapsar, Kharadi, Wagholi, and Mundhwa."
    },
    {
      question: "Are your pest control treatments safe for pets and children?",
      answer: "Yes, we use government-approved (CIB&RC), eco-friendly, and odorless chemicals that are safe for your family and pets. We follow strict safety protocols to ensure a hazard-free environment."
    },
    {
      question: "How long does a typical pest control treatment take?",
      answer: "A standard residential treatment usually takes between 45 to 90 minutes. However, advanced treatments like termite management or heavy cockroach infestations may take longer."
    },
    {
      question: "Do you provide a warranty for your services?",
      answer: "Yes, we offer service warranties ranging from 4 months to 5 years, depending on the type of treatment (e.g., termite control has longer warranties). If the pests return during the warranty period, we provide free re-treatment."
    }
  ];

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
        title="Best Pest Control in Pune | Professional Exterminator Services"
        description="Providing the best pest control in Pune. Experts in termite, cockroach, and rodent control for homes and businesses. Serving Hadapsar, Kharadi, Wagholi, and Mundhwa."
        keywords="pest control pune, best pest control in pune, termite treatment pune, cockroach control pune, bed bug treatment, rodent control, fogging services pune, residential pest control, commercial pest control pune, herbal pest control pune, organic pest control, exterminator pune, Hadapsar, Kharadi, Magarpatta, Wagholi, Mundhwa, Amanora, Viman Nagar, Kalyani Nagar"
        additionalSchema={[faqSchema]}
      />
      {/* Hero Section with Carousel */}
      <section className="container mx-auto px-4 pt-8 pb-12">
        <div className="text-center mb-10">
          <h1 className="text-6xl md:text-8xl font-extrabold text-primary-900 mb-6 tracking-tight uppercase">
            Shree Swami Samartha
          </h1>
          <p className="text-2xl md:text-3xl text-primary-700 font-bold max-w-4xl mx-auto leading-relaxed">
            Standard Pest Control Services & Exterminator Pune
          </p>
        </div>

        <Carousel />

        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <Link
            to="/services"
            className="btn-primary text-xl"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="btn-secondary text-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-primary-900 uppercase tracking-wider">Professional Pest Control in Pune</h2>
              <p className="text-xl text-primary-800 leading-relaxed mb-6 font-medium">
                Your home deserves a safe, pest-free environment. Shree Swami Samartha Pest Control Services provides reliable and professional extermination solutions in Pune. From cockroach control to advanced termite treatment, our dedicated experts ensure high-quality service for residential and commercial properties.
              </p>
              <Link to="/services" className="inline-flex items-center text-primary-700 font-bold text-lg hover:text-primary-900 transition-colors">
                View All Extermination Services <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/home2.png"
                  alt="Professional Pest Control Services in Pune"
                  className="w-full h-[360px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center">About Shree Swami Samartha Pest Control</h2>
            <div className="bg-[#FDFCF9] rounded-3xl shadow-xl p-10 md:p-16 border border-primary-100">
              <p className="text-xl md:text-2xl text-primary-800 leading-relaxed mb-8 font-medium">
                Shree Swami Samartha, a Pest Control Company established in
                January 2023 by{" "}
                <span className="font-extrabold text-primary-900 decoration-4 underline decoration-accent-400">
                  Rohini Gaikwad (M.Com - Owner)
                </span>{" "}
                with Specialization in Business Administration having 20 years of
                Experience in MNC's & Manufacturing Companies.
              </p>
              <p className="text-xl md:text-2xl text-primary-800 leading-relaxed mb-8 font-medium">
                &{" "}
                <span className="font-extrabold text-primary-900 decoration-4 underline decoration-accent-400">
                  Ravindra Bagal (Technician - Owner)
                </span>{" "}
                having 10 years of experience in Pest Control Service Industries, He had worked on Ground Level only to learn Pest Control Business Activities, how they works, What problems & difficulties Customers are facing due to Cockroach, Ant, Rat, Lizard,  Bed Bugs, Mosquitos etc.
              </p>
              <p className="text-xl md:text-2xl text-primary-800 leading-relaxed font-medium">
                Company Provides various pest control services as well as fogging service to residential,
                Commercial & Industrial Segment. We have dedicated expert team for each
                section. Head office is at Pune, Maharashtra, India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Vision */}
            <div className="card p-12 border-t-8 border-primary-700 hover:border-primary-900">
              <div className="w-20 h-20 bg-primary-700 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <img src="/our_vision.jpeg" alt="Our Vision for Pest Free Pune" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-4xl font-bold mb-6 text-primary-900">
                Our Vision
              </h3>
              <p className="text-xl text-primary-700 leading-relaxed font-medium">
                Our vision is to become the preeminent Pest Control and Facility
                Management Company in India, Providing the latest technology to
                our customers and being the #1 choice in Industry.
              </p>
            </div>

            {/* Mission */}
            <div className="card p-12 border-t-8 border-primary-500 hover:border-primary-700">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mb-8 shadow-lg">
                <img src="/our_mission.jpeg" alt="Our Mission to Provide Safe Environment" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-4xl font-bold mb-6 text-primary-900">
                Our Mission
              </h3>
              <p className="text-xl text-primary-700 leading-relaxed font-medium">
                Our mission is to provide quality service in an efficient and
                professional manner to ensure safety and comfort. Our focus is
                to continually improve and ensure customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Meet Our Experienced Partners</h2>
          <p className="text-center text-xl text-primary-600 mb-16 max-w-3xl mx-auto font-medium">
            Our leadership team combines business excellence with deep technical expertise in pest management services.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Partner 1 */}
            <div className="card p-10 text-center bg-[#FDFCF9]">
              <img
                src="/rohini.jpeg"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-8 border-4 border-white shadow-xl"
                alt="Rohini Gaikwad - Partner at Shree Swami Samartha Pest Control"
              />
              <h3 className="text-3xl font-bold mb-3 text-primary-900">
                Rohini Gaikwad
              </h3>
              <p className="text-primary-600 font-bold text-lg mb-6 uppercase tracking-wide">
                Partner - Business Administration
              </p>
              <p className="text-xl text-primary-700 leading-relaxed font-medium">
                M.Com with Specialization in Business Administration having 20
                years' Experience in MNC's & Manufacturing Companies.
              </p>
            </div>

            {/* Partner 2 */}
            <div className="card p-10 text-center bg-[#FDFCF9]">
              <img
                src="/ravi.jpeg"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-8 border-4 border-white shadow-xl"
                alt="Ravindra Bagal - Partner & Technical Expert"
              />
              <h3 className="text-3xl font-bold mb-3 text-primary-900">
                Ravindra Bagal
              </h3>
              <p className="text-primary-600 font-bold text-lg mb-6 uppercase tracking-wide">
                Partner - Technical Expert
              </p>
              <p className="text-xl text-primary-700 leading-relaxed font-medium">
                Having 10 years’ experience in Pest Control Service Industries, He had worked on Ground Level only to learn Pest Control Business Activities, how they works, What problems & difficulties Customers are facing due to Cockroach, Ant, Rat, Lizard,  Bed Bugs, Mosquitos etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 text-white">Expert Pest Control & Extermination Services</h2>
          <p className="text-2xl text-primary-100 text-center max-w-4xl mx-auto mb-16 font-medium">
            Standard pest control and management solutions tailored for Pune's residential, commercial, and industrial segments.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-primary-800 rounded-2xl p-6 text-center group hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-2 border border-primary-700"
              >
                <div className="overflow-hidden rounded-xl mb-6 h-48">
                  <img
                    src={service.photo}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    alt={service.title}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-primary-100 text-lg leading-relaxed font-medium mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-block bg-white text-primary-900 font-bold py-2 px-6 rounded-full hover:bg-primary-50 transition-colors duration-300"
                >
                  Know More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service History Section */}
      <ServiceHistory />

      {/* Clients Section */}
      <ClientCarousel />

      {/* Industry Resources Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-primary-900">Industry Insights & Safety Standards</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="http://ppqs.gov.in/divisions/cib-rc"
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-2xl bg-primary-50 hover:bg-primary-100 transition-colors border border-primary-100 group"
              >
                <h3 className="text-xl font-bold mb-4 text-primary-900 group-hover:text-primary-700">CIB&RC India</h3>
                <p className="text-primary-700 font-medium">Central Insecticides Board & Registration Committee guidelines for pesticide use in India.</p>
              </a>
              <a
                href="https://www.who.int/teams/control-of-neglected-tropical-diseases/vector-ecology-and-management/vector-control"
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-2xl bg-primary-50 hover:bg-primary-100 transition-colors border border-primary-100 group"
              >
                <h3 className="text-xl font-bold mb-4 text-primary-900 group-hover:text-primary-700">WHO Standards</h3>
                <p className="text-primary-700 font-medium">World Health Organization global standards for vector control and public health safety.</p>
              </a>
              <a
                href="https://www.pestworld.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-2xl bg-primary-50 hover:bg-primary-100 transition-colors border border-primary-100 group"
              >
                <h3 className="text-xl font-bold mb-4 text-primary-900 group-hover:text-primary-700">PestWorld Tips</h3>
                <p className="text-primary-700 font-medium">Professional insights and educational resources on pest management from NPMA.</p>
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-24 bg-primary-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-2xl md:text-3xl text-primary-200 mb-12 max-w-3xl mx-auto font-medium">
            Contact us today for a free consultation and let us help you create
            a pest-free, clean environment.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-primary-900 hover:bg-primary-50 border-none text-xl px-10 py-5">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

