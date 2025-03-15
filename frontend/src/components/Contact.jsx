import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();  // Initialize the navigate function

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4001/contact/submit", formData);
            setSubmitted(true);
            setErrorMessage("");

            // Redirect to the homepage after successful form submission
            setTimeout(() => {
                navigate("/");  // Redirect to home page
            }, 2000);  // Delay the redirect to show the success message for a moment
        } catch (error) {
            console.error("Error submitting contact form:", error);
            setErrorMessage("There was an error submitting your message. Please try again.");
        }
    };

    return (
        <>
            <Navbar />
            <div className="max-w-screen-lg mx-auto p-4 mt-16">
                <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

                {submitted ? (
                    <div className="text-center text-green-600">
                        <h2>Thank you for reaching out!</h2>
                        <p>We'll get back to you soon.</p>
                        <p>Redirecting you to the homepage...</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="fullname" className="block text-lg font-semibold text-pink-500">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold text-pink-500">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg font-semibold text-pink-500">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            ></textarea>
                        </div>

                        {errorMessage && (
                            <div className="text-red-500 text-center">{errorMessage}</div>
                        )}

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700 duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Contact;