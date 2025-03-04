import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
function ContactPage () {
    return (
    <>  
        <footer id="contactPage" className="bg-white py-20 text-gray-700">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6">
                <div className="md:w-1/3">
                    <img src="/images/LOGO_blue_png.png" alt="Internnook Logo" className="h-8 mb-2 mx-auto md:mx-0" />
                    <p className="text-sm">Internship made easy, <br /> right at your nook.</p>
                </div>
                <div className="md:w-1/3">
                    <h4 className="font-semibold text-blue-600">Office</h4>
                    <p className="text-sm">
                        MT Villanueva Avenue, <br />
                        Liboton, Naga City, <br />
                        Philippines
                    </p>
                </div>
                <div className="md:w-1/3">
                    <h4 className="font-semibold text-blue-600">Contact</h4>
                    <p className="text-sm">(+63) 9482650912</p>
                    <p className="text-sm">hello@internnook.com</p>
                </div>

                <div className="md:w-1/3">
                    <h4 className="font-semibold text-blue-600">Follow us</h4>
                    <div className="flex justify-center md:justify-start gap-4 mt-2">
                        <a href="https://www.facebook.com/ncftigretbi" className="text-gray-500 hover:text-blue-600"><FaFacebookF size={18} /></a>
                        <a href="https://www.facebook.com/ncftigretbi" className="text-gray-500 hover:text-blue-600"><FaTwitter size={18} /></a>
                        <a href="https://www.facebook.com/ncftigretbi" className="text-gray-500 hover:text-blue-600"><FaInstagram size={18} /></a>
                    </div>
                </div>

            </div>
                <div className="text-center text-sm text-gray-500 mt-8">
                    © 2024, Internnook. All rights reserved.
            </div>
        </footer>
    </>
    );
}

export default ContactPage;