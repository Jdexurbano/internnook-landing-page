interface TestimonialCardProps {
    name: string;
    description: string;
    role: string;
    image: string;
}

function TestimonialCard({ name, description, role, image }: TestimonialCardProps) {
    return (
        <div className="flex flex-col items-center text-center px-4 w-full">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex-shrink-0">
                <div className="flex text-yellow-400 mb-3">
                    {Array(5).fill("★").map((star, index) => (
                        <span key={index}>{star}</span>
                    ))}
                </div>
                <p className="text-sm font-normal text-gray-600 text-justify max-h-40 overflow-hidden sm:text-base lg:max-h-48">
                    {description}
                </p>
                <div className="flex items-center mt-4">
                    <img src={image} alt={name} className="w-10 h-10 rounded-full object-cover sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16" />
                    <div className="ml-3 text-left">
                        <p className="text-sm font-semibold sm:text-base">{name}</p>
                        <p className="text-xs text-gray-500 sm:text-sm">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;