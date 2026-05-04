import { FaClipboardCheck, FaHeart, FaShieldAlt } from "react-icons/fa";

const tips = [
    {
        id: 1,
        title: "Check Animal Health",
        description: "Choose an active animal with clear eyes, clean skin, and normal walking.",
        icon: <FaHeart />,
    },
    {
        id: 2,
        title: "Know The Age",
        description: "Make sure the animal meets the correct Qurbani age before booking.",
        icon: <FaClipboardCheck />,
    },
    {
        id: 3,
        title: "Buy From Trusted Sellers",
        description: "Review animal details, price, weight, and seller location carefully.",
        icon: <FaShieldAlt />,
    },
];

const QurbaniTips = () => {
    return (
        <section className="my-10">
            <div className="bg-[#F6FAF4] rounded-lg p-5 md:p-8">
                <div className="text-center max-w-2xl mx-auto mb-7">
                    <p className="text-[#C68A2D] font-semibold mb-2">Helpful Guide</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F2A24]">Qurbani Tips</h2>
                    <p className="text-[#6D756F] mt-3">
                        Simple things to remember before choosing your Qurbani animal.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {tips.map((tip) => (
                        <div key={tip.id} className="bg-white rounded-lg shadow-sm p-5 border border-[#E7F0E6]">
                            <div className="h-12 w-12 rounded-full bg-[#E7F0E6] text-[#145C39] flex items-center justify-center text-xl mb-4">
                                {tip.icon}
                            </div>
                            <h3 className="text-lg font-bold text-[#1F2A24] mb-2">{tip.title}</h3>
                            <p className="text-[#6D756F] text-sm leading-6">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QurbaniTips;
