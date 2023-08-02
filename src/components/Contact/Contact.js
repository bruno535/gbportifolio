import React, { useState } from 'react';
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

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
            const response = await fetch('https://formspree.io/f/xbjvlwro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form data submitted successfully');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error sending form data:', error);
        }
    };

    return (
        <div className="contact-container">
            <h2>Contato</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Mensagem"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;
