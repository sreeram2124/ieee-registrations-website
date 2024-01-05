import React from 'react';
import { Footer } from 'flowbite-react';

const MyFooter = () => {
    return (

        <Footer container>
            <Footer.Copyright href="#" by="IEEE SRM" year={2024} />
            <Footer.LinkGroup>
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
            </Footer.LinkGroup>
        </Footer>

    );
};

export default MyFooter;
