import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const PestControlDetails = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    const pests = [
        {
            id: 'cockroach',
            title: 'Cockroach Extermination & Management',
            content: `Cockroaches are known carriers of various diseases and their faeces can cause severe allergic reactions, especially amongst sensitive individuals and asthmatics. Exposure often results from ingestion or inhalation of airborne cockroach allergens. Beyond health risks, cockroaches taint food with unpleasant odors produced by their salivary glands and secretions. Our professional cockroach control services in Pune focus on eliminating these pests from the source using safe, effective methods.`
        },
        {
            id: 'ant',
            title: 'Ant Colony Management',
            content: `Ants live in complex colonies with a highly structured social hierarchy consisting of queens, workers, and males. A single queen can lay millions of eggs, ensuring the colony's rapid growth. Most DIY methods only target the visible workers, but professional management addresses the entire colony, including the queen. Whether you're dealing with sugar ants or carpenter ants, our targeted treatments provide long-term prevention for your home in Pune.`
        },
        {
            id: 'bedbug',
            title: 'Bed Bug Eradication Services',
            content: `Bed bugs are resilient pests that can survive for months without a blood meal. Their developmental cycle is highly dependent on temperature, thriving in human environments. While their bites are often painless initially, many people develop allergic reactions to the saliva injected during feeding. Our bed bug treatment involves intensive inspection and multi-stage processes to ensure every hiding spot is treated, giving you a peaceful night's sleep.`
        },
        {
            id: 'rodent',
            title: 'Rodent & Rat Control',
            content: `Mice and rats are significant threats to both property and health. They contaminate food with urine and droppings, and their constant gnawing can damage electrical wiring, creating fire hazards. A mouse can enter a structure through an opening as small as 1/4 inch. Our rodent management program combines exclusion techniques with effective baiting and trapping to keep your premises rodent-free.`
        },
        {
            id: 'fly',
            title: 'Flies & Hygiene Management',
            content: `House flies are not just a nuisance; they are carriers of over a hundred different pathogens. They liquefy solid foods by regurgitation, contaminating everything they touch. With a rapid lifecycle—sometimes only 6 days from egg to adult—an infestation can explode quickly. Our fly management services focus on sanitation advice and baiting systems to break the breeding cycle.`
        },
        {
            id: 'mosquito',
            title: 'Comprehensive Mosquito Control',
            content: `Mosquitoes are the world's deadliest animals, spreading diseases like Dengue, Malaria, and West Nile Virus. In Pune, where seasonal outbreaks are common, effective mosquito management is crucial. We target both larvae in stagnant water and adult mosquitoes through professional fogging and residual sprays, protecting your family from mosquito-borne illnesses.`
        },
        {
            id: 'termite',
            title: 'Advanced Termite (Deemak) Protection',
            content: `Subterranean termites are the most destructive pests for homeowners, capable of causing total structural failure. They often work undetected behind walls and under floors. Our anti-termite treatments use advanced barriers and soil treatments to stop these 'silent destroyers' before they cause irreversible financial damage to your Pune property.`
        },
        {
            id: 'woodborer',
            title: 'Wood Borer Management',
            content: `Powder post beetles or wood borers can turn expensive hardwood furniture into dust. They are active at night and highly destructive to antiques, flooring, and structural timbers. Our specialized wood borer treatments involve deep-injection and surface treatments to preserve your valuable woodwork for years to come.`
        },
        {
            id: 'lizard',
            title: 'Lizard & Reptile Repellent',
            content: `While generally harmless, house lizards are often unwelcome due to their droppings and appearance. Lizard management focuses on reducing their food sources (insects) and applying specialized repellents to keep them away from your living spaces. We provide clean and effective solutions for lizard-free homes.`
        },
        {
            id: 'spider',
            title: 'Safe Spider Management',
            content: `Spiders can be helpful but also create messy webs and, in some cases, pose a risk of bites. Our spider management services include web removal and residual treatments to prevent spiders from nesting in and around your home, ensuring a clean and comfortable environment.`
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFCF9]">
            <SEO
                title="Pest Encyclopedia & Treatment Info | Pune Pest Control"
                description="Learn everything about common pests in Pune. Detailed guides on cockroaches, termites, bed bugs, and more. Understand your pest problem and how to solve it."
                keywords="cockroach facts, ant life cycle, bed bug behavior, termite damage, mosquito diseases, pest control information pune, deemak treatment pune"
            />
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Pest Knowledge Center</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium text-primary-100">
                        In-depth information on the pests we manage and the science behind our treatments.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary-900 mb-4">Identify & Understand Your Pest Problem</h2>
                        <p className="text-xl text-primary-600">Click on any pest to learn more about its behavior and our treatment methods.</p>
                    </div>

                    {pests.map((pest) => (
                        <article key={pest.id} id={pest.id} className="bg-white rounded-3xl p-10 shadow-lg border border-primary-100 scroll-mt-32 hover:shadow-xl transition-shadow">
                            <h2 className="text-3xl font-bold mb-6 text-primary-900 border-b-2 border-primary-200 pb-4">
                                {pest.title}
                            </h2>
                            <div className="text-lg text-primary-800 leading-relaxed font-medium space-y-4">
                                {pest.content.split('\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PestControlDetails;

