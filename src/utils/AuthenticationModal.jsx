import React, { useState } from 'react';

const AuthenticationModal = ({ onClose, onAuthenticate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleAuthenticate = () => {
        if (username === 'secretary@ieeesrmist.com' && password === 'iloveieee') {
            onAuthenticate();
            onClose();
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-white p-6 max-w-md mx-auto rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center text-blue-800">Authentication Required</h2>
                <label className="block mb-4">
                    <span className="text-gray-700">Username:</span>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Password:</span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />
                </label>
                <button
                    onClick={handleAuthenticate}
                    className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
                >
                    Authenticate
                </button>
            </div>
        </div>
    );
};

export default AuthenticationModal;
