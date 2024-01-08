import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from "../firebase/firebaseInit";

const SimpleForm = () => {
    const initialFormData = {
        fullName: '',
        registrationNumber: '',
        mailId: '',
        contactNumber: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [registrationStatus, setRegistrationStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData);

        try {
            const docRef = await addDoc(collection(firestore, 'responses'), formData);
            console.log('Document written with ID: ', docRef.id);
            setRegistrationStatus('success');
            setFormData(initialFormData);
        } catch (error) {
            console.error('Error adding document: ', error);
            setRegistrationStatus('error');
        }
    };

    return (
        <div className="bg-white py-8 px-4 mx-auto max-w-2xl lg:py-16">
            <h2 className="mb-4 text-xl font-bold text-gray-900 text-center">Registration Form</h2>

            {registrationStatus === 'success' && (
                <p className="text-green-500 text-center mb-4">Registration successful!</p>
            )}

            {registrationStatus === 'error' && (
                <p className="text-red-500 text-center mb-4">Error submitting registration. Please try again.</p>
            )}

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

        </div>
    );
};

export default SimpleForm;