import React, { useState } from 'react';

const RegForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        registrationNumber: '',
        mailId: '',
        contactNumber: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section className="bg-white py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 text-center">Registration Form</h2>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="w-full">
                    <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 text-left">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Enter your full name"
                        required
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="registrationNumber" className="block mb-2 text-sm font-medium text-gray-900 text-left">
                        Registration Number
                    </label>
                    <input
                        type="text"
                        name="registrationNumber"
                        id="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Enter your registration number"
                        required
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="mailId" className="block mb-2 text-sm font-medium text-gray-900 text-left">
                        Mail ID
                    </label>
                    <input
                        type="email"
                        name="mailId"
                        id="mailId"
                        value={formData.mailId}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Enter your mail ID"
                        required
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="contactNumber" className="block mb-2 text-sm font-medium text-gray-900 text-left">
                        Contact Number
                    </label>
                    <input
                        type="tel"
                        name="contactNumber"
                        id="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Enter your contact number"
                        required
                    />
                </div>
                <div className="w-full flex justify-center">
                    <button
                        type="submit"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-gray-500 focus:ring-4 focus:ring-primary-300 mt-8"
                    >
                        Register
                    </button>
                </div>
            </form>
        </section>
    );
};

export default RegForm;