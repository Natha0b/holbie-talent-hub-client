import React from 'react';
import Head from 'next/head';


const HomePage = () => {
    return (
        <div>
            <Head>
                <title>El título de mi página</title>
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One"
                    rel="stylesheet"
                    type="text/css"
                />
                <link rel="stylesheet" href="/style.css" />
            </Head>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>

                </ul>
            </nav>
            <main>
            </main>
        </div>
    );
};

export default HomePage;