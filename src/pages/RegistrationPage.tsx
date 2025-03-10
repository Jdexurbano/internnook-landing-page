function RegistrationPage () {
    return (
        <>
            <section id= "registrationPage" className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-20">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    Pre-register Now and <br /> Access Exclusive Internship Opportunities!
                    </h2>
                    <p className="text-gray-500 mt-4">All your information is completely confidential</p>
                </div>
                <form className="w-full max-w-lg space-y-4">
                    <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-5 border border-gray-300 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required/>
                    <input
                    type="email"
                    placeholder="Company Email"
                    className="w-full px-4 py-5 border border-gray-300 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required/>
                    <input
                    type="text"
                    placeholder="Company Address"
                    className="w-full px-4 py-5 border border-gray-300 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required/>
                    <input
                    type="text"
                    placeholder="Contact Person"
                    className="w-full px-4 py-5 border border-gray-300 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required/>
                    <input
                    type="tel"
                    placeholder="Contact Number"
                    className="w-full px-4 py-5 border border-gray-300 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required/>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-5 rounded-lg transition"
                        >
                        Pre-register Now
                    </button>
                </form> 
                          
            </section>
        </>
    );
}

export default RegistrationPage;