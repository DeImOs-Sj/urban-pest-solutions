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
            title: 'Cockroach Control / Management',
            content: `Cockroaches and their faeces may cause allergic reactions, especially amongst sensitive individuals, eg. Asthmatics Exposure may result from ingestion or through the inhalation of materials derived from cockroaches in airborne dust. In addition, food may be tainted with the characteristic smell of cockroach, which is produced by faeces and salivary/abdominal gland secretions, or by the dead insects.`
        },
        {
            id: 'ant',
            title: 'Ant Management',
            content: `Finally, the pupa emerges as an adult. Young adults are often lighter in color, but darken as they age. The process of development from egg to adult can take from several weeks to months, depending on the species and the environment. Did you know that ants, like all insects, are full-grown when they become adults? Their exoskeletons prevent them from getting any larger, Furthermore, adult ants belong to one of three castes: queen, worker, or male. Queens are females that were fed more as larvae. They are larger than workers and lay all the eggs in a colony – up to millions in some species! Queens initially have wings and fly to find a mate(s), but they tear them off before starting a new colony. A queen can live for decades under the right conditions. Workers are females that were fed less as larvae. They do not reproduce, but perform other jobs, such as taking care of the brood, building and cleaning the nest, and gathering food. Workers are wingless and typically survive for several months. Males have wings and fly to mate with queens. They live for only a few weeks and never help with the chores of the colony.`
        },
        {
            id: 'bedbug',
            title: 'Bed Bug Treatment / Management',
            content: `Developmental time (egg to adult) takes 21 days at 86 F to 120 days at 65 F. The threshold for egg hatching , nymphal development, and adult activity is 55 to 59 F. Below 61 F adults enter semi-hibernation and the heat stress death point is 111 to 113 F. without a blood meal, once-fed nymphs can survive an average 51 days (range 28 to 73 ) at 81 f and 70 to 75% RH. Being poorly fed can greatly prolong the life cycle (up to several years in some studies). With normal feeding and reproductive cycles, individuals can live up to 316 days. Although the bite of bed bugs is painless, most people (80%) develop an allergic reaction to the saliva injected by the bug as it feeds. A swelling usually results from feeding but there is no red spot such as is characteristic with flea bites. Swelling may be severe and extend beyond the immediate bite area in highly sensitive individuals. Although bed bugs have been suspect in the transmission of many diseases or disease organism in humans, in most cases conclusive evidence is lacking.`
        },
        {
            id: 'rodent',
            title: 'Rodent Management',
            content: `The house mouse gnaws objects eats and contaminates stored food and transmits disease by droppings, urine, bites, and direct contact or contact with cats, fleas and mites. An opening larger than 1/4 in (6 mm) permits a house mouse to enter a structure.`
        },
        {
            id: 'fly',
            title: 'Fly Management',
            content: `During the day, they rest less than 5 ft. from the ground: at night, mainly above 5 ft, but near their food sources. House flies are general feeders on liquids: attracted to many substances, from excrement to human foods House flies can liquefy solid foods by regurgitation. Adult female lays oval, white eggs singly in clusters of 20-50, laying 350-900 eggs in her lifetime. Eggs hatch in 8-20 hours. Larvae go through 3 instars in 3-7 days at 70-90 degrees F. Full grown larvae go to a cool dry place to pupate, traveling up to 150 fee in 3-4 days. Pupa goes from yellowish to black during a period of a few fays to a month, depending on temperature and humidity. After emerging, the body the wings dry within about an hour. Development from egg to adult can be as few as 6 days, with 10-12 generations per summer adults live 15-25 days.`
        },
        {
            id: 'mosquito',
            title: 'Mosquito Management',
            content: `Larvae move actively in water and come to surface frequently to breathe .The flight range of mosquitoes varies with the species, temperature, wind direction, time of year, and distance to blood meal sources. Normal flight ranges of mosquitoes are in the range of ½ mile to 10 mile, depending on species. Female mosquitoes suck our blood. Male mosquitoes feed on plant nectars. Mosquitoes are well-known to spread diseases such as West Nile Virus, malaria and dengue fever.`
        },
        {
            id: 'termite',
            title: 'Termite Management',
            content: `Reproductive subterranean termites are approximately one inch long Subterranean termites feed on products containing cellulose. Subterranean termites swarm in the spring- groups of reproductive termites go off to state new colonies. Subterranean termites need contact with the soil to survive and live underground. They can build tunnels through cracks in concrete. Subterranean termites are by far the most destructive species. They can collapse a building entirely, meaning possible financial ruin for a homeowner. The hard, saw-toothed jaws of termites work like sears and are able to bite off extremely small fragments of wood, one piece at a time.`
        },
        {
            id: 'woodborer',
            title: 'Wood Borer Management',
            content: `Adult powder post beetles are very active at night, enjoy flying and are attracted to the light. Powder post beetles often attack hardwoods, and can be found in hardwood floors, timbers and crates, antiques and other objects made of hardwood materials. Powder post beetles damages are second only to termites.`
        },
        {
            id: 'lizard',
            title: 'Lizard Management',
            content: `Incubation time varies. Frilled lizard eggs hatch in approximately 70 days while green iguana eggs hatch in 90 days. Hatchling lizards break open the egg with their egg tooth or caruncle. They remain in the egg for approximately 12 to 24 hours to absorb the remaining yolk before emerging from the egg. A few species of lizards, including the Solomon Island and blue-tongued skink give birth to live young. After hatching or birth, juvenile lizards are fully able to fend for themselves. In most species, lizard parents do not provide care or protection for the young. Juveniles grow into adults without any significant changes other than size. Once fully grown, lizards are adults and may begin mating. The mating process varies by species. For example, the frilled lizard mates during the wet season between October and March. Males attract females by spreading their frill. After mating, females lay 8 to 23 eggs. Females may lay up to two clutches each breeding season. Green iguanas begin mating when they are approximately 16 months old. Mating occurs during the dry season, usually in the fall. Males attract females with their colors and displays such as head-bobbing and push-ups. Females lay a clutch of 12 to 30 eggs.`
        },
        {
            id: 'spider',
            title: 'Spider Management',
            content: `Other spiderlings climb onto their mother's back after hatching where she feeds them. Spiderlings jump off their mother's back when they are ready. The last stage of a spider is the adult stage. Spiders sometimes die right after their spiderlings hatch. Adult spiders lay their eggs before Winter. Adult spiders spin webs to catch or hunt their prey.`
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFCF9]">
            <SEO
                title="Pest Control Details | Learn About Pests & Treatments"
                description="Detailed information about various pests like cockroaches, ants, bed bugs, termites, and more. Learn about their life cycles and how Shree Swami Samartha Pest Control manages them."
                keywords="cockroach facts, ant life cycle, bed bug behavior, termite damage, mosquito diseases, pest control information pune"
            />
            <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Pest Control Services</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto font-medium text-primary-100">
                        Detailed information about our comprehensive pest management solutions
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto space-y-16">
                    {pests.map((pest) => (
                        <div key={pest.id} id={pest.id} className="bg-white rounded-3xl p-10 shadow-lg border border-primary-100 scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-6 text-primary-900 border-b-2 border-primary-200 pb-4">
                                {pest.title}
                            </h2>
                            <div className="text-lg text-primary-800 leading-relaxed font-medium space-y-4">
                                {pest.content.split('\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PestControlDetails;
