import TestimonialCard from "../components/Testimonial_page/TestimonialCard";

function TestimonialPage ()
{ 
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
        text: "I struggled with job applications until I found this platform. The 1-on-1 career coaching gave me personalized advice, and the resume review made my application stand out. Within weeks, I secured an amazing internship at a top company. Truly a game-changer for job seekers!",
        name: "Jane Smith",
        role: "Software Engineer Intern",
        image: "/images/testimonial_profile.png",
      },
    ]
    return(
    <>
        <section className="bg-accent py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/3 text-left">
                    <p className="text-blue-500 uppercase font-semibold text-sm">Testimonial</p>
                    <h2 className="text-3xl font-bold mt-2">We've built trust with reviews from real users</h2>
                    <p className="text-gray-600 mt-2 py-2">
                        Real success stories, real impact—see how InternNook is transforming careers one opportunity at a time!
                    </p>
                    <button type="button" className="py-3 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg 
                        text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-lightblue dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round"  d="M13 5H1m0 0L5 1M1 5l4 4"/>
                        </svg>
                    </button>
                    <button type="button" className="py-3 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg 
                        text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-lightblue dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round"  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
                <div className="md:w-2/3 flex overflow-x-auto space-x-2 scrollbar-hide">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                        key={testimonial.id}
                        name={testimonial.name}
                        description={testimonial.text}
                        role={testimonial.role}
                        image={testimonial.image}
                        />
                    ))}
                </div>
            </div> 
        </section>
    </>
    ); 
}

export default TestimonialPage;