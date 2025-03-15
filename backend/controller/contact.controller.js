import Contact from "../model/contact.model.js";

export const submitContactForm = async (req, res) => {
    try {
        const { fullname, email, message } = req.body;

        // Create a new contact form submission
        const newContact = new Contact({
            fullname,
            email,
            message,
        });

        // Save it to the database
        await newContact.save();

        res.status(201).json({
            message: "Your message has been successfully received.",
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};