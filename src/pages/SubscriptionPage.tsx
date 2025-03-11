import SubscriptionCard from "../components/Subscription_page/SubscriptionCard";

function SubscriptionPage() {
  const cards = [
    {
      id: 1,
      title: "Free Plan",
      description: "Free plan for personalized experience",
      price: 0,
      features: [
        "Basic internship search",
        "Limited job applications per month",
        "Access to career resources",
      ],
    },
    {
      id: 2,
      title: "Premium",
      description: "Best for career growth & professionals",
      price: 249,
      features: [
        "Everything in Free Plan",
        "1-on-1 career coaching",
        "Resume & cover letter review",
        "Early access to top internships",
        "Exclusive mentorship opportunities",
        "Priority support for job applications",
      ],
    },
    {
      id: 3,
      title: "Advanced",
      description: "Great for advanced job seekers",
      price: 149,
      features: [
        "Unlimited job & internship applications",
        "AI-powered job matching",
        "Exclusive career webinars",
        "Career progress tracking & insights",
      ],
    },
  ];

  return (
    <section className="min-h-screen pb-32 pt-20 px-5 md:px-20 flex flex-col justify-center relative overflow-hidden" id="subscriptionPage">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-cyan-700 font-medium text-2xl md:text-3xl">Subscription</h1>
        <p className="text-base md:text-lg mt-2">
          Internnook connects students, companies, and schools for seamless internships.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((data) => (
          <SubscriptionCard
            key={data.id}
            title={data.title}
            description={data.description}
            price={data.price}
            features={data.features}
          />
        ))}
      </div>
    </section>
  );
}

export default SubscriptionPage;
