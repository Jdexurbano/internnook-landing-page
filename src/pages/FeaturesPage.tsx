import FeatureCard from "../components/Feature_page/FeatureCard";

function FeaturesPage() {
  const cards = [
    {
      id: 1,
      name: "AI-Powered Matching",
      description:
        "Connects companies with top student candidates suited for their intern positions using advanced AI algorithms.",
      image: "case.png",
      
    },
    {
      id: 2,
      name: "Smart Contract Generator",
      description:
        "Automatically generates and facilitates digital signing of MOA between students, companies, and schools",
      image: "computer.png",
    },
    {
      id: 3,
      name: "ATS CV Generator",
      description:
        "Helps students create resumes optimized for Applicant Tracking Systems, increasing visibility to employers.",
      image: "docs.png",
    },
    {
      id: 4,
      name: "Skills Analysis & Upskilling",
      description:
        "Analyzes students’ skill and provides personalized recommendations to enhance their capabilities.",
      image: "ai.png",
    },
    {
      id: 5,
      name: "Real-Time Student Monitoring",
      description:
        "Enables schools to monitor and coordinate with their students throughout the internship process.",
      image: "ai.png",
    },
    {
      id: 6,
      name: "Google Calendar Integration",
      description:
        "Automatically syncs appointments and deadlines to Google Calendar for students and schools.",
      image: "ai.png",
    },
  ];
  return (
    <>
      <section className="h-210 bg-accent pb-20 pt-16 md:px-20 " id="featurePage">
        <div className="text-center py-10">
          <h1 className="text-cyan-700 font-medium text-1xl md:text-2xl">
            Features
          </h1>
          <p className="text-base font-normal md:text-lg tracking-normal">
            Internnook connects students, companies, and schools through innovative 
          </p>
          <p>
            features designed to simplify and enhance the internship experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 ">
          {cards.map((data) => {
            return (
              <FeatureCard
                key={data.id}
                image={data.image}
                name={data.name}
                description={data.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default FeaturesPage;
