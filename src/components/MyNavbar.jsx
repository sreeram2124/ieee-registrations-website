import React from 'react';
import { Navbar } from 'flowbite-react';

const hoverClasses = 'hover:text-blue-800';

const MyNavbar = () => {
    return (

        <Navbar fluid rounded>
            <Navbar.Brand href="#">
                <img src="/img/IEEE_SRM_SB.png" className="mr-3 h-6 sm:h-0 md:h-9 lg:h-12" alt="IEEE SRM" />
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Navbar.Link href="https://ieeesrmist.com" className={hoverClasses}>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#" className={hoverClasses}>
                    Login
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default MyNavbar;
