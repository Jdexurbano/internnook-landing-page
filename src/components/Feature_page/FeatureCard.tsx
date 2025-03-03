interface CardProps {
  image: string;
  name: string;
  description: string;
}

function FeatureCard({ image, name, description }: CardProps) {
  return (
    <>
      <div
        className="flex items-center gap-4 px-3"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div
          className=" min-w-50 max-h-90 p-6 flex flex-col items-center justify-center text-center
            bg-secondary shadow-gray-200 shadow-2xl rounded-lg transition-transform duration-300 
            ease-in-out hover:scale-105 hover:shadow-3xl"
        >
          <img src={`../images/${image}`} alt="" className="w-20 h-20" />
          <p className="font-bold text-sm p-2">{name}</p>
          <p className="text-sm font-normal p-2">{description}</p>
        </div>
        
      </div>
    </>
  );
}

export default FeatureCard;
