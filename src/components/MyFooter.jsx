import React from 'react';

const MyFooter = () => {
    return (
        <footer className="bg-white py-4 px-6 sm:flex sm:justify-between">
            <div className="text-sm text-gray-600 mb-4">
                © 2024 IEEE SRM
            </div>
            <div className="flex space-x-4">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Home</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Licensing</a>
            </div>
        </footer>
    );
};

export default MyFooter;
