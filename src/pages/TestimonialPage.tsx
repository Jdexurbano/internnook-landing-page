import { useState, useEffect } from "react";
import TestimonialCard from "../components/Testimonial_page/TestimonialCard";

function TestimonialPage() {
    const testimonials = [
        { 
            id: 1,
            text: "I struggled to find the right internship until I joined InternNook. The AI-powered recommendations matched me with opportunities that fit my skills perfectly. Within weeks, I landed an amazing internship that kick-started my career. Highly recommend!",
            name: "John Doe",
            role: "Marketing Intern",
            image: "/images/testimonial_profile.png",
        },
        {
            id: 2,
            text: "I struggled with job applications until I found this platform. The 1-on-1 career coaching gave me personalized advice, and the resume review made my application stand out. Within weeks, I secured an amazing internship at a top company. Truly a game-changer for job seekers!",
            name: "Jane Smith",
            role: "Software Engineer Intern",
            image: "/images/testimonial_profile.png",
        },
        {
            id: 3,
            text: "This platform gave me the confidence to apply for internships. The AI-matched suggestions were spot-on, and I ended up getting hired at a company I love!",
            name: "Michael Lee",
            role: "Data Analyst Intern",
            image: "/images/testimonial_profile.png",
        },
        {
            id: 4,
            text: "Thanks to this platform, I secured an internship that perfectly aligned with my career goals. The personalized recommendations were incredibly accurate!",
            name: "Sarah Kim",
            role: "UX Designer Intern",
            image: "/images/testimonial_profile.png",
        },
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 768 ? 1 : 2);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex - itemsPerPage < 0 ? testimonials.length - itemsPerPage : prevIndex - itemsPerPage
        );
    };

    return (
        <section className="bg-accent py-16 px-4 md:px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 w-full">
                <div className="md:w-1/3 text-left">
                    <p className="text-blue-500 uppercase font-semibold text-sm">Testimonial</p>
                    <h2 className="text-3xl font-bold mt-2">We've built trust with reviews from real users</h2>
                    <p className="text-gray-600 mt-2 py-2">
                        Real success stories, real impact—see how InternNook is transforming careers one opportunity at a time!
                    </p>
                    <div className="flex gap-2 mt-5">
                        <button onClick={prevTestimonial} className="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg">
                            &#9664;
                        </button>
                        <button onClick={nextTestimonial} className="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg">
                            &#9654;
                        </button>
                    </div>
                </div>
                <div className="md:w-2/3 overflow-hidden relative w-full">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out w-full"
                        style={{ transform: `translateX(-${(currentIndex / itemsPerPage) * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="w-full md:w-1/2 flex-shrink-0 px-2 md:px-4">
                                <TestimonialCard
                                    name={testimonial.name}
                                    description={testimonial.text}
                                    role={testimonial.role}
                                    image={testimonial.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialPage;
