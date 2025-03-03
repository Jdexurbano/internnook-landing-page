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
    <section id="aboutPage" className="min-h-screen py-25">
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
          <div className="flex justify-center items-center w-full -mt-10 md:-mt-40 lg:-mt-80">
            <img
              src="/images/CBM_HERO1.png"
              alt="Hero"
              className="object-cover w-full max-w-[900px] h-auto 
              sm:h-[450px] md:h-[650px] lg:h-[300px] xl:h-[850px] 
              rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
