import React from 'react';

const MyStatistics = () => {
    return (

        <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-bold">23+</dt>
                        <dd className="font-light text-gray-500">
                            Teams
                        </dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-bold">71+</dt>
                        <dd className="font-light text-gray-500">
                            Members
                        </dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl md:text-4xl font-bold">4+</dt>
                        <dd className="font-light text-gray-500">
                            Sponsors
                        </dd>
                    </div>
                </dl>
            </div>
        </section>

    );
};

export default MyStatistics;
