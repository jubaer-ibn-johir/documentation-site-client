import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';
import UseCourses from '../../hooks/UseCourses';
import ScrollToTop from 'react-scroll-to-top';

const stripePromise = loadStripe('pk_test_51L0UcsIFjt8xvGHkZh0UClsyUEwizGqQxOfATx5z1osYgwu3MBGOWKN7qVI4M29Vcd9i6ZJGIUwgtaKlpCC4y0hC00NtQIly3N')

const Payment = () => {
    const [payment, setPayment] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/course`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                ;
                setPayment(data)
            })
    }, [payment])
    return (
        <div className='bg-slate-400'>
            <ScrollToTop smooth color="red" top='20' />
            <div className='h-screen flex justify-center items-center'>
                <div className='lg:w-1/2 mx-auto'>
                    <div className="card w-full max-w-md bg-base-100 shadow-xl my-12 ">
                        <div className="card-body">
                            <p className="text-success font-bold">Hello </p>
                            <h2 className="card-title"><span className='text-primary'>Please Pay for this course</span></h2>
                            <p className='text-xl'>And Please pay BDT 4500</p>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm
                                    payment={payment}
                                >
                                </CheckoutForm>
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;