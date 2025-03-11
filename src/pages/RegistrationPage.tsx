import { useState } from "react";

function RegistrationPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const form = event.currentTarget;
        const formData = new FormData(form);
        
        fetch(form.action, {
            method: "POST",
            body: formData,
            mode: "no-cors", 
        })
        .then(() => {
            setIsSubmitted(true);
            form.reset();
        })
        .catch(() => {
            console.log("Something went wrong");
        });
    };

    return (
        <>
            <section id="registrationPage" className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-20">
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">
                        Pre-register Now and <br /> Access Exclusive Internship Opportunities!
                    </h2>
                    <p className="text-gray-500 mt-4">All your information is completely confidential</p>
                </div>
                <form
                    action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSfDi7cmdoYhuU5S1r2KNHgSmBTH6-TBxSYBjt_pXbZw362aFA/formResponse"
                    method="POST"
                    className="w-full max-w-lg space-y-4"
                    onSubmit={handleSubmit}
                >
                    <input
                        name="entry.1361204234"
                        type="text"
                        placeholder="Company Name"
                        className="w-full px-4 py-5 border border-gray-300 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        name="entry.659408088"
                        type="email"
                        placeholder="Company Email"
                        className="w-full px-4 py-5 border border-gray-300 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        name="entry.1318067195"
                        type="text"
                        placeholder="Company Address"
                        className="w-full px-4 py-5 border border-gray-300 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        name="entry.1869060843"
                        type="text"
                        placeholder="Contact Person"
                        className="w-full px-4 py-5 border border-gray-300 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        name="entry.1688736167"
                        type="tel"
                        placeholder="Contact Number"
                        className="w-full px-4 py-5 border border-gray-300 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-5 rounded-lg transition"
                    >
                        Pre-register Now
                    </button>
                </form>

                {/* Modal */}
                {isSubmitted && (
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-300 text-center relative">
                            <h3 className="text-lg font-semibold text-green-600">Success!</h3>
                            <p className="mt-2 text-gray-700">Your registration has been successfully submitted.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default RegistrationPage;
