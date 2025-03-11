import { HashLink as Link } from "react-router-hash-link";

function HomePage() {
  const link = [
    { id: 1, 
      name: "Pre-registration", 
      address: "#registrationPage" 
    },
    { id: 2, 
      name: "How it Works?",
      address: "#aboutPage" 
    },
    
  ];

  return (
    <>
      <section className="relative min-h-screen bg-primary" id="homePage">
        <div className="px-6 pt-25 flex flex-col lg:flex-row lg:justify-center items-center lg:items-start">
          <div className="text-secondary text-center lg:text-left flex flex-col items-center lg:items-start gap-4 lg:gap-7 lg:w-[1000px] lg:ml-14 lg:pt-8" 
              data-aos="fade-right" 
              data-aos-duration="1700" 
              data-aos-delay="550">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mt-3">
              Internship made easy,<br className="hidden sm:inline" /> right at your nook.
            </h1>
            <p className="text-base font-medium">
              We are internook, an internship simplifier – hub.
            </p>
            <p className="text-base">
              Bridging the gap between students, companies, and schools to create successful internship experiences.
            </p>
            <ul className="flex flex-col sm:flex-row gap-4 mt-4 font-medium text-secondary w-full sm:w-auto">
              {link.map((data) => (
                <Link to={data.address} key={data.id} smooth>
                  <li className="border-2 border-accent bg-accent text-white cursor-pointer font-semibold text-sm px-6 py-3 rounded-lg active:scale-95 
                    hover:scale-105 transition-transform duration-200 w-full sm:w-auto lg:w-[200px] text-center">
                    {data.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <img
             src="../images/CBM_HERO.png"
             alt=""
             className="object-contain w-full max-w-3xl h-auto sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px]-mt-20 md:-mt-16 lg:-mt-39"
            //  data-aos="fade-up"
            //  data-aos-duration="1700"
            //  data-aos-delay="550"
          />
        </div>
        
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="w-full max-h-[150px] md:max-h-[150px]"
            viewBox="0 0 1470 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 18.3969L61.625 25.4025C123.25 32.9085 246.5 46.9196 369.75 39.9141C493 32.9085 616.25 3.88541 739.5 0.38262C862.75 -3.12017 986 18.3969 1109.25 25.4025C1232.5 32.9085 1355.75 25.4025 1417.37 21.8997L1479 18.3969V148H1417.37C1355.75 148 1232.5 148 1109.25 148C986 148 862.75 148 739.5 148C616.25 148 493 148 369.75 148C246.5 148 123.25 148 61.625 148H0V18.3969Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </>
  );
}

export default HomePage;
