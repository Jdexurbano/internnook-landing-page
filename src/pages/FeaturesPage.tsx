import FeatureCard from "../components/Feature_page/FeatureCard";

function FeaturesPage() {
  const cards = [
    {
      id: 1,
      name: "AI-Powered Matching",
      description:
        "Connects companies with top student candidates suited for their intern positions using advanced AI algorithms.",
      image: "ai.png",
      
    },
    {
      id: 2,
      name: "Smart Contract Generator",
      description:
        "Automatically generates and facilitates digital signing of MOA between students, companies, and schools",
      image: "docs.png",
    },
    {
      id: 3,
      name: "ATS CV Generator",
      description:
        "Helps students create resumes optimized for Applicant Tracking Systems, increasing visibility to employers.",
      image: "cv.png",
    },
    {
      id: 4,
      name: "Skills Analysis & Upskilling",
      description:
        "Analyzes students’ skills and provides personalized recommendations to enhance their capabilities.",
      image: "skill.png",
    },
    {
      id: 5,
      name: "Real-Time Student Monitoring",
      description:
        "Enables schools to monitor and coordinate with their students throughout the internship process.",
      image: "computer.png",
    },
    {
      id: 6,
      name: "Google Calendar Integration",
      description:
        "Automatically syncs appointments and deadlines to Google Calendar for students and schools.",
      image: "calendar.png",
    },
  ];

  return (
    <>
      <section className="min-h-screen bg-accent pb-32 pt-16 px-5 md:px-20" id="featurePage">
        <div className="text-center py-10">
          <h1 className="text-cyan-700 font-medium text-2xl md:text-3xl">
            Features
          </h1>
          <p className="text-base font-normal md:text-lg mt-2">
            Internnook connects students, companies, and schools through innovative features
          </p>
          <p className="text-base font-normal md:text-lg">
            designed to simplify and enhance the internship experience.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((data) => (
            <FeatureCard
              key={data.id}
              image={data.image}
              name={data.name}
              description={data.description}

            />
          ))}
        </div>
      </section>
    </>
  );
}

export default FeaturesPage;
