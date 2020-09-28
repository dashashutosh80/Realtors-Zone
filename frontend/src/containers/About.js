import React, { useState, useEffect, Fragment } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import House from '../assets/images/HouseImage1.jpg';

const About = () => {
    const [topSeller, setTopSeller] = useState([]);
    const [realtors, setRealtors] = useState([]);

    useEffect(() => {
        axios.defaults.headers = {
            "Content-Type": "application/json"
        };

        const getTopSeller = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/realtors/topseller');
                setTopSeller(res.data);
            }
            catch (err) {

            }
        };

        getTopSeller();
    }, []);

    useEffect(() => {
        axios.defaults.headers = {
            "Content-Type": "application/json"
        };
        const getRealtors = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/realtors/');
                setRealtors(res.data);
            }
            catch (err) {

            }
        };
        getRealtors();
    }, []);

    const getAllRealtors = () => {
        let allRealtors = [];
        let results = [];

        realtors.map(realtor => {
            return allRealtors.push(
                <Fragment key={realtor.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={realtor.photo} alt='' />
                    </div>
                    <h3 className='about__realtor'>{realtor.name}</h3>
                    <p className='about__contact'>{realtor.email}</p>
                    <p className='about__contact'>{realtor.phone}</p>
                    <p className='about__about'>{realtor.description}</p>
                </Fragment>
            );
        });

        for (let i = 0; i < realtors.length; i += 3) {
            results.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {allRealtors[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i + 1] ? allRealtors[i + 1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i + 2] ? allRealtors[i + 2] : null}
                    </div>
                </div>
            );
        };

        return results;
    }

    const getTopSeller = () => {
        let result = [];

        topSeller.map(seller => {
            return result.push(
                <Fragment key={seller.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={seller.photo} alt='' />
                    </div>
                    <h3 className='about__topseller'>Top Seller:</h3>
                    <p className='about__contact'>{seller.name}</p>
                    <p className='about__contact'>{seller.email}</p>
                    <p className='about__contact'>{seller.phone}</p>
                    <p className='about__about'>{seller.description}</p>
                </Fragment>
            );
        });
        return result;
    }

    return (
        <main className='about'>
            <Helmet>
                <title>Realtor's Zone - About</title>
                <meta name='description' content="About Realtor's Zone" />
            </Helmet>
            <header className='about__header'>
                <h1 className='about__heading'>About Realtor's Zone:</h1>
            </header>
            <section className='about__info'>
                <div className='row'>
                    <div className='col-3-of-4'>
                        <h2 className='about__subheading'>We show you the best houses out there</h2>
                        <p className='about__paragraph'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                        Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                        theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
                        dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                        <div className='about__display'>
                            <img className='about__display' src={House} alt='' />
                        </div>
                        <p className='about__paragraph'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                        have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                    <div className='col-1-of-4'>
                        {getTopSeller()}
                    </div>
                </div>
            </section>
            <section className='about__team'>
                <div className='row'>
                    <h2 className='about__subheading'>Meet the team that brings you the best choices</h2>
                </div>
                {getAllRealtors()}
            </section>
        </main>
    )
};

export default About;
