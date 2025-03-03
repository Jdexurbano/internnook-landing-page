interface StepCardProps {
  image: string;
  title: string;
  description: string;
  number: number;
  isLast?: boolean;
}

function AboutCard({ image, title, description, number, isLast }: StepCardProps) {
  return (
    <div 
      className={`flex flex-col items-center text-center gap-3 px-8 relative ${!isLast ? "border-r border-gray-300" : ""}`}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <span className="absolute text-7xl font-semibold text-gray-200 opacity-80 top-2 left-34 -translate-x-1/2">
        {number}
      </span>
      <div className="relative flex flex-col items-center gap-2">
        <img src={`../images/${image}`} alt={title} className="w-20 h-20 relative z-10" />
        <p className="font-bold text-lg">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default AboutCard;
