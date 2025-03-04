interface SubcriptionCardProps {
    title: string;
    description: string;
    price: number;
    features: string [];
}

function SubcriptionCard ({ title, description, price, features }: SubcriptionCardProps) {
    return (
    <>
        <div

            className="flex items-center gap-4 px-3"
            data-aos="fade-up"
            data-aos-duration="1500"
        >
            <div
                className="min-w-80 max-h-130 p-8 flex flex-col items-left justify-center text-left
                    border-1 border-solid border-gray-300 bg-secondary shadow-gray-200 shadow-2xl 
                    rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-3xl" 
            >
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-sm text-gray-600 py-0">{description}</p>
                <p className="text-3xl font-bold mt-3">₱{price}<span className="text-lg font-normal">/month</span></p>
                <hr className="my-5 border-gray-300" />
                <div className="mt-6">
                    {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 mb-2">
                        <img src="/images/Check.png" alt="Check" className="min-w-5 max-h-5" />
                        <p className="text-sm font-medium">{feature}</p>
                    </div>
                    ))}
                </div>
                <br></br>
                <button type="button" className="text-secondary bg-primary hover:bg-accent ring-blue-300 font-medium 
                    rounded-full shadow-gray-200 shadow-2xl text-sm px-5 py-2  text-center me-2 mb-2 dark:bg-lightblue 
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Get Started 
                </button>
            </div>
        </div>
    </>
    );
}

export default SubcriptionCard;
