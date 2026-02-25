import { useState } from 'react';
import { FaPlay, FaImage, FaTimes } from 'react-icons/fa';
import SEO from '../components/SEO';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        { src: '/image1.jpeg', alt: 'Professional Cockroach Treatment in Pune', category: 'Cockroach Control' },
        { src: '/fogging.jpeg', alt: 'Industrial Fogging Service in Pune', category: 'Fogging' },
        { src: '/image3.jpg', alt: 'Termite Protection Service', category: 'Termite Control' },
        { src: '/image5.jpeg', alt: 'Residential General Pest Control', category: 'General Pest Control' },
    ];

    const videos = [
        { src: 'https://rr3---sn-2ocvhc-5n.googlevideo.com/videoplayback?expire=1772026101&ei=1dyeab2XA56_88EPmNTjkQU&ip=2401:4900:8924:51df:9b40:bd86:1e6d:f3ed&id=221155fd6c2ad687&itag=18&source=contrib_service_geo_ugc&begin=0&requiressl=yes&xpc=EghoqJzIP3oBAQ==&met=1772018901,&mh=le&mm=32&mn=sn-2ocvhc-5n&ms=su&mv=m&mvi=3&pl=51&rms=su,su&sc=yes&susc=gugc&app=fife&ic=1061&eaua=iCDlJm1P4KI&pcm2=yes&mime=video/mp4&vprv=1&rqh=1&dur=17.368&lmt=1770154742544564&mt=1772018445&txp=0000224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,susc,app,ic,eaua,pcm2,mime,vprv,rqh,dur,lmt&sig=AJEij0EwRgIhALQzSXpMcQ2VX5itrBwm9Woe8G4dEhmxAYfAhwN3PcKhAiEAomyu99P2PO3zXsuqq9zeJtodz9MsYWtclpOjtO1B7v0=&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms,sc&lsig=APaTxxMwRAIgTea2_LKhCmgAeJ5Dq-fKDUpSMvvY9WFbM4JuF3FppecCIGfHjyyopJH3UNKeNSQ7ol_HjFycElct-lfhNGpINmXJ', thumbnail: 'https://via.placeholder.com/600x400?text=Process+Video' },
        { src: 'https://rr5---sn-cvh7knek.googlevideo.com/videoplayback?expire=1772025985&ei=YdyeaeCvMsmcssUPrN2foQo&ip=2401:4900:8924:51df:9b40:bd86:1e6d:f3ed&id=e37523656f229b99&itag=18&source=picasa&begin=0&requiressl=yes&xpc=Eghoy-b0JXoBAQ==&met=1772018785,&mh=CM&mm=32&mn=sn-cvh7knek&ms=su&mv=m&mvi=5&pl=51&rms=su,su&sc=yes&susc=ph&app=fife&ic=945&pcm2=yes&mime=video/mp4&vprv=1&prv=1&rqh=1&dur=42.956&lmt=1735737013306718&mt=1772018445&txp=0000224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,susc,app,ic,pcm2,mime,vprv,prv,rqh,dur,lmt&sig=AJEij0EwRgIhAPlPWSEh0qP3ykIHtnpKc-TkMl2EVg5AxkXKCcgoyHCTAiEA0_IWf3MhcCFit2s0J_SPtQkZoieIsSeuiPCIYQHsGZY=&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms,sc&lsig=APaTxxMwRAIgYy6pB07rxop2MQExSSlgt0TEKub18RJJP9KnCl-yJyECICF7VZG4rsiJAkGnBNAoCayhaM1H_15tXdU4mpdvxR86', title: 'Why Clients Trust Shree Swami Samartha', thumbnail: 'https://via.placeholder.com/600x400?text=Trust+Video' },
    ];

    return (
        <div className="min-h-screen bg-[#FDFCF9]">
            <SEO
                title="Service Gallery | Professional Extermination in Action"
                description="See our Pune pest control teams in action. Browse photos and videos of our residential, commercial, and industrial pest management projects."
                keywords="pest control gallery, fogging service photos, pest control videos, shree swami samartha projects, professional exterminators pune"
            />
            {/* Hero Section */}
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">Our Service Gallery</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium text-primary-100">
                        A visual portfolio of our pest management excellence and dedicated field team.
                    </p>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="section-title text-center mb-16 text-primary-900 text-4xl font-bold uppercase">Work Highlights</h2>

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
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-primary-900 bg-opacity-40 opacity-0  duration-300 flex items-center justify-center">
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
                    <h2 className="section-title text-center mb-16 text-primary-900 text-4xl font-bold uppercase">Expertise in Motion</h2>

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

