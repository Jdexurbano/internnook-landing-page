import PricingCard from "../components/Pricing_page/PricingCard";

function PricingPage() {
  const cards = [
    {
      id: 1,
      title: "Free Plan",
      description:
        "Free plan for personalize experience",
      price: 0,
      features: [
        "Basic internship search",
        "Limited job application per month",
        "Access to career resources"
      ]
    },
    {
      id: 2,
      title: "Premium ",
      description:
        "Best for career growth & professionals",
      price: 249,
      features: [
        "Everything in Premium",
        "1-on-1 career coaching",
        "Resume & cover letter review",
        "Early access to top internships",
        "Exclusive mentorship opportunities",
        "Priority support for job applications and career queries"
      ]
    },
    {
      id: 2,
      title: "Advance ",
      description:
        "Great for advanced job seekers",
      price: 149,
      features: [
        "Unlimited job & internship applications",
        "AI-powered job matching",
        "Exclusive career webinars & resources",
        "Career progress tracking & insights"
      ]
    },
    
  ];
  return (
    <>
      <section className="h-210 pb-20 pt-16 md:px-20 " id="pricePage">
        <div className=" flex justify-center items-cente">
          <div className="text-center max-w-[29rem]">
            <h1 className="text-cyan-700 font-medium text-1xl md:text-2xl">
              Subscription
            </h1>
            <p className="text-base font-normal md:text-lg tracking-normal">
              Internnook connects students, companies, and schools for seamless
              internships.
            </p>
          </div>
        </div>
        <div className="px-20 py-20 grid md:grid-cols-3 gap-2 md:gap-10 ">
          {cards.map((data) => {
            return (
              <PricingCard
                key={data.id}
                title={data.title}
                description={data.description}
                price={data.price}
                features={data.features}
              />
            );
          })}         
        </div>
      </section>
    </>
  );
}

export default PricingPage;
