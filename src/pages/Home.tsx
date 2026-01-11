import { FaCheckCircle, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

const Home = () => {
  const services = [
    {
      photo: "/pestControl.jpeg",
      title: "Pest Control",
      description:
        "Where You Need It And When You Need It. We provide efficient and highly useful Pest Control Management Services.",
    },
    {
      photo: "/fogging.jpeg",
      title: "Fogging",
      description:
        "Using advanced fogging technique with fine pesticide spray directed by a blower for effective insect control.",
    },
    {
      photo: "/cleaning.jpeg",
      title: "Cleaning Services",
      description:
        "Professional house cleaning service tailored to your requirements with dedicated expert team.",
    },
    {
      photo: "/all_services.jpg",
      title: "Other Services",
      description:
        "Export Import Consultancy, Society Registration, Accounts Outsourcing, GST Services, and more.",
    },
  ];

  const clients = [
    { name: "Capgemini", image: "/capgemini.png" },
    { name: "Residency Club", image: "/residency-club.jpg" },
    { name: "Optima Height", image: "/optima-height.jpg" },
    { name: "Sheraton Hotel", image: "/sheraton-hotel.jpg" },
    { name: "Barclays", image: "/barclays.jpg" },
    { name: "Nyati Elan", image: "/nyati-elan.jpg" },
    { name: "Bramha Suncity", image: "/bramha-suncity.jpg" },
    { name: "Season 24 Banquet Hall", image: "/season-24.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      {/* Hero Section with Carousel */}
      <section className="container mx-auto px-4 pt-8 pb-12">
        <div className="text-center mb-10">
          <h1 className="text-6xl md:text-8xl font-extrabold text-primary-900 mb-6 tracking-tight">
            SHREE SWAMI SAMARTHA
          </h1>
          <p className="text-2xl md:text-3xl text-primary-700 font-bold max-w-4xl mx-auto leading-relaxed">
            Premium Pest Control & Cleaning Services
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

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center">About Us</h2>
            <div className="bg-[#FDFCF9] rounded-3xl shadow-xl p-10 md:p-16 border border-primary-100">
              <p className="text-xl md:text-2xl text-primary-800 leading-relaxed mb-8 font-medium">
                Shree Swami Samartha, a Pest Control Company established in
                January 2023 by{" "}
                <span className="font-extrabold text-primary-900 decoration-4 underline decoration-accent-400">
                  Rohini Gaikwad (M.Com - Owner)
                </span>{" "}
                with Specialization in Business Administration having 17 years'
                Experience in MNC's & Manufacturing Companies.
              </p>
              <p className="text-xl md:text-2xl text-primary-800 leading-relaxed mb-8 font-medium">
                &{" "}
                <span className="font-extrabold text-primary-900 decoration-4 underline decoration-accent-400">
                  Ravindra Bagal (Technician - Owner)
                </span>{" "}
                having 6 years' experience in Pest Control Service Industries.
                He is working on Ground Level to understand Customer Problems &
                what difficulties they are facing due to Cockroach, Ant, Rat,
                Lizard, Bed Bugs, Mosquitos etc.
              </p>
              <p className="text-xl md:text-2xl text-primary-800 leading-relaxed font-medium">
                Company Provides various pest control services to residential,
                Commercial & Industrial Segment. Apart from pest control and
                fogging service we have separate set up for Cleaning Service for
                our esteemed Customers. We have dedicated expert team for each
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
                <FaStar className="text-white text-3xl" />
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
                <FaCheckCircle className="text-white text-3xl" />
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
          <h2 className="section-title text-center">Meet the Partners</h2>
          <p className="text-center text-xl text-primary-600 mb-16 max-w-3xl mx-auto font-medium">
            Our experienced leadership team brings together expertise in
            business administration and hands-on pest control services.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Partner 1 */}
            <div className="card p-10 text-center bg-[#FDFCF9]">
              <img
                src="/rohini.jpeg"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-8 border-4 border-white shadow-xl"
                alt="Rohini Gaikwad"
              />
              <h3 className="text-3xl font-bold mb-3 text-primary-900">
                Rohini Gaikwad
              </h3>
              <p className="text-primary-600 font-bold text-lg mb-6 uppercase tracking-wide">
                Partner - Business Administration
              </p>
              <p className="text-xl text-primary-700 leading-relaxed font-medium">
                M.Com with Specialization in Business Administration having 17
                years' Experience in MNC's & Manufacturing Companies.
              </p>
            </div>

            {/* Partner 2 */}
            <div className="card p-10 text-center bg-[#FDFCF9]">
              <img
                src="/ravi.jpeg"
                className="w-48 h-48 object-cover rounded-full mx-auto mb-8 border-4 border-white shadow-xl"
                alt="Ravindra Bagal"
              />
              <h3 className="text-3xl font-bold mb-3 text-primary-900">
                Ravindra Bagal
              </h3>
              <p className="text-primary-600 font-bold text-lg mb-6 uppercase tracking-wide">
                Partner - Technical Expert
              </p>
              <p className="text-xl text-primary-700 leading-relaxed font-medium">
                Technician having 6 years' experience in Pest Control Service
                Industries, working on ground level to understand customer
                problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 text-white">Our Services</h2>
          <p className="text-2xl text-primary-100 text-center max-w-3xl mx-auto mb-16 font-medium">
            Comprehensive pest control and cleaning solutions tailored to your
            needs
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
                <p className="text-primary-100 text-lg leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-[#FDFCF9]">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">
            Services Rendered by Ravindra Bagal
          </h2>
          <p className="text-center text-primary-600 mb-16 text-2xl font-medium">
            Thanks for giving us an opportunity to serve you with our Quality &
            Assured services
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100 group"
              >
                <div className="h-32 w-full flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="font-bold text-xl text-primary-800 text-center">{client.name}</p>
              </div>
            ))}
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
