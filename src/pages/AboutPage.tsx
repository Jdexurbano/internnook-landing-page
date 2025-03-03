import AboutCard from "../components/About_page/AboutCard";
function AboutPage() {
  const steps = [
    {
      id: 1,
      title: "Create Your Profile",
      description: "Sign up and set up your profile",
      image: "profile.png",
    },
    {
      id: 2,
      title: "Get Matched",
      description: "Our AI pairs you with the best opportunities or candidates.",
      image: "go.png",
    },
    {
      id: 3,
      title: "Start Your Journey",
      description: "Sign agreements digitally and begin your internship.",
      image: "journey.png",
    },
  ];

  return (
    <section id="aboutPage" className="min-h-screen py-16">
      <div className="flex justify-center items-center mb-10">
        <div className="text-center max-w-[29rem]">
          <h1 className="text-cyan-700 font-medium text-xl md:text-2xl">How it Works</h1>
          <p className="text-base font-normal md:text-lg tracking-normal text-gray-700">
            InternNook connects students, companies, and schools for seamless internships.
          </p>
        </div>
      </div>
      <div className="py-10 bg-white text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex-1 ${index !== steps.length - 1 ? "" : ""}`}>
                <AboutCard 
                  image={step.image} 
                  title={step.title} 
                  description={step.description} 
                  number={step.id} 
                  isLast={index === steps.length - 1}
                />
              </div>
            ))}
          </div>

          {/* Hero Image */}
          <div className="flex justify-center items-center mt-10">
            <img
              src="/images/Hero_1.png"
              alt="Hero"
              className="object-contain h-[200px] max-w-md sm:w-[800px] sm:h-[250px] lg:h-[400px] lg:max-w-2xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
