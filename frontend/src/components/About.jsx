import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function About() {
    return (
        <>
            <Navbar />
            <div className="max-w-screen-lg mx-auto p-4 mt-16">
                <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-pink-500">Our Mission</h2>
                    <p className="mt-4 text-lg">
                        Our mission is to provide high-quality education and resources to individuals who are looking to improve their skills and knowledge. We believe in fostering a community of learners who can grow and succeed together.
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-pink-500">Our Values</h2>
                    <ul className="list-disc pl-6 mt-4 text-lg">
                        <li>Integrity: We believe in being honest and transparent in everything we do.</li>
                        <li>Innovation: We strive to provide the most up-to-date resources and educational tools.</li>
                        <li>Inclusivity: We aim to create an environment where everyone can thrive and feel supported.</li>
                        <li>Excellence: We are dedicated to offering the highest quality educational materials and experiences.</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-pink-500">Our Team</h2>
                    <p className="mt-4 text-lg">
                        Our team is made up of passionate educators, developers, and designers who are committed to helping individuals reach their potential. With diverse backgrounds and expertise, we work together to create meaningful and impactful learning experiences.
                    </p>
                </div>

                <div className="text-center mt-8">
                    <h3 className="text-xl font-semibold text-pink-500">Get In Touch</h3>
                    <p className="mt-2 text-lg">
                        Have questions? Feel free to reach out to us. We're always here to help!
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
