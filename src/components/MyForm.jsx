import React from 'react';

const MyForm = () => {
    return (

        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900">
                    HACTRIX-24 Registration
                </h2>
                <form action="#">
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 text-left"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Enter your full name"
                                required=""
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="registration-number"
                                className="block mb-2 text-sm font-medium text-gray-900 text-left"
                            >
                                Registration Number
                            </label>
                            <input
                                type="text"
                                name="registration-number"
                                id="registration-number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Enter your registration number"
                                required=""
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 text-left"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Enter your email"
                                required=""
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="contact-number"
                                className="block mb-2 text-sm font-medium text-gray-900 text-left"
                            >
                                Contact No.
                            </label>
                            <input
                                type="tel"
                                name="contact-number"
                                id="contact-number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Enter your contact number"
                                required=""
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="department"
                                className="block mb-2 text-sm font-medium text-gray-900 text-left"
                            >
                                Department
                            </label>
                            <input
                                type="text"
                                name="department"
                                id="department"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Enter your department"
                                required=""
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="section"
                                className="block mb-2 text-sm font-medium text-gray-900 text-left"
                            >
                                Section
                            </label>
                            <input
                                type="text"
                                name="section"
                                id="section"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Enter your section"
                                required=""
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="faculty-advisor"
                                className="block mb-2 text-sm font-medium text-gray-900 text-left"
                            >
                                Faculty Advisor
                            </label>
                            <input
                                type="text"
                                name="faculty-advisor"
                                id="faculty-advisor"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="Enter faculty advisor's name"
                                required=""
                            />
                        </div>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-gery-800 focus:ring-4 focus:ring-primary-300 mt-8"
                        >
                            Register
                        </a>
                    </div>
                </form>
            </div>
        </section>

    );
};

export default MyForm;