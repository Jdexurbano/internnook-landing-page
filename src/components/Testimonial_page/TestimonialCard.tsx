interface TestimonialCardProps {
    name: string;
    description: string;
    role: string;
    image: string;
  }
  
 function TestimonialCard({ name, description, role, image }: TestimonialCardProps) {
    return (
        <div
            className="flex flex-col items-center text-center gap-4 px-3"
            data-aos="fade-up"
            data-aos-duration="1500"
        >
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-h-80 flex-shrink-0">
                <div className="flex text-yellow-400 mb-3">
                {"★★★★★".split("").map((star, index) => (
                    <span key={index}>{star}</span>
                ))}
                </div>
                <p className="text-sm font-normal text-gray-600 text-justify w-80 max-h-80">{description}</p>
                <div className="flex items-center mt-4">
                    <img src={image} alt={name} className="w-10 h-10 rounded-full" />
                    <div className="ml-3">
                        <p className="text-sm font-semibold text-left">{name}</p>
                        <p className="text-xs text-gray-500">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  export default TestimonialCard;
  