import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postOrder } from '../../features/art/OrderSlice'
import { useNavigate } from 'react-router-dom'
import { cleanOrder } from '../../features/art/artSlice'
import videoFile from '../../video/video2.mp4'
import cl from './OrdersInfo.module.css'

export const OrdersInfo = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [number, setNumber] = useState('');
    const [adress, setAdress] = useState('');
    const [email, setEmail] = useState('');
    const [payments, setPayments] = useState('');
    //validation
    const [nameError, setNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [numberError, setNumberError] = useState('');
    const [adressError, setAdressError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [paymentsError, setPaymentsError] = useState('');

    const validateForm = () => {

        setNameError('');
        setLastNameError('');
        setNumberError('');
        setAdressError('');
        setEmailError('');
        setPaymentsError('');

        switch (true) {
            case name.length < 2:
                setNameError('Name length should be greater than 2');
                break;
            case name.length > 0 && !/^[a-zA-Z]+$/.test(name):
                setNameError('Name must contain only numbers');
                break;
            case lastName.length < 2:
                setLastNameError('Last name length should be greater than 2');
                break;
            case lastName.length > 0 && !/^[a-zA-Z]+$/.test(lastName):
                setLastNameError('Last name must contain only numbers');
                break;
            case number.length > 0 && !/^\d+$/.test(number):
                setNumberError('Phone number must contain only numbers');
                break;
            case number.length < 8:
                setNameError('Correct your number');
                break;
            case adress.length < 5:
                setAdressError('Address length should be greater than 5');
                break;
            case email.length > 0 && !/^\S+@\S+\.\S+$/.test(email):
                setEmailError('Email format is incorrect');
                break;
            case payments.length === 0:
                setPaymentsError('Choose a payment method');
                break;
            default:
                return true;
        }

        return false;
    };

    const handleFormSubmit = () => {
        if (validateForm()) {
            dispatch(postOrder(order));
            alert('Thank you for your order, the manager will contact you');
            dispatch(cleanOrder());
            navigate('/collection');
        } else {
            alert('Please correct the form errors before submitting.');
        }
    };

    const card = useSelector(state => state.arts.card);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const order = {
        name,
        lastName,
        number,
        adress,
        payments,
        email,
        orders: [...card]
    }
    return (
        <div>
            <div style={{ display: 'flex', position: 'absolute', width: '100%', top: '0' }}>
                <video style={{ width: '100%', zIndex: '0', padding: '0px', margin: '0' }} autoPlay muted loop>
                    <source src={videoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={cl.box}>
                <div className={cl.collectBox}>
                    <div className={cl.myInfo}>
                        {nameError && <p className={cl.errorMsg}>{nameError}</p>}
                        <input className={cl.inputClit} value={name} onChange={e => {
                            setName(e.target.value)
                        }} placeholder='Name' type='text' />
                        {lastNameError && <p className={cl.errorMsg}>{lastNameError}</p>}
                        <input className={cl.inputClit} value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Last Name' type='text' />
                    </div>
                    <div className={cl.myOption}>
                        {numberError && <p className={cl.errorMsg}>{numberError}</p>}
                        <input className={cl.inputClit} value={number} onChange={e => setNumber(e.target.value)} placeholder='Number' type='text' />
                        {adressError && <p className={cl.errorMsg}>{adressError}</p>}
                        <input className={cl.inputClit} value={adress} onChange={e => setAdress(e.target.value)} placeholder='Adress' type='text' />
                        {emailError && <p className={cl.errorMsg}>{emailError}</p>}
                        <input className={cl.inputClit} value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type='text' />

                        <h1>Payment method</h1>
                        {paymentsError && <p className={cl.errorMsg}>{paymentsError}</p>}
                        <select value={payments} onChange={e => {
                            if (e.target.value !== "") {
                                setPayments(e.target.value)
                            }
                        }}>
                            <option value="">Choose Payment Method</option>
                            <option>Cart</option>
                            <option>Cash</option>
                        </select>
                    </div>
                    <div className={cl.myProd}>
                        {card.map(item => (
                            <div>
                                <h2>{item.title}</h2>
                                <h2>{item.price}&#x24;</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleFormSubmit}>Order</button>
            </div>
        </div>
    )
}
