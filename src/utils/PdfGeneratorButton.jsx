import React, { useState } from 'react';
import { generatePdf } from './PdfGenerator';
import AuthenticationModal from './AuthenticationModal';

const PdfGeneratorButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleGeneratePdf = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAuthenticate = () => {
        generatePdf();
    };

    return (
        <>
            <button
                onClick={handleGeneratePdf}
                className="hover:underline md:hover:text-blue-800"
            >
                Login
            </button>

            {isModalOpen && (
                <AuthenticationModal onClose={handleCloseModal} onAuthenticate={handleAuthenticate} />
            )}
        </>
    );
};

export default PdfGeneratorButton;
