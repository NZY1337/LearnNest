import { ChatBubbleLeftRightIcon, TrashIcon, PencilSquareIcon, HeartIcon } from '@heroicons/react/24/outline';

const features = [
    {
        name: 'Spam report',
        description: 'Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum.',
        icon: TrashIcon,
    },
    {
        name: 'Compose in markdown',
        description: 'Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus.',
        icon: PencilSquareIcon,
    },
    {
        name: 'Email commenting',
        description: 'Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis.',
        icon: ChatBubbleLeftRightIcon,
    },
    {
        name: 'Customer connections',
        description: 'Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis.',
        icon: HeartIcon,
    },
];

export default function SupportFeatures() {
    return (
        <section className="bg-gray-900 py-24 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12">Stay on top of customer support</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {features.map((feature) => (
                        <div key={feature.name} className="flex items-start gap-4">
                            <div className="bg-indigo-500 rounded-lg p-3">
                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">{feature.name}</h3>
                                <p className="text-gray-400 text-base">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
