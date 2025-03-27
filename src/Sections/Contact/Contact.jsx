import React from 'react'
import { ContactContainer, ContactWrapper, InfoContainer } from './contactStyled'

import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { useSelector } from 'react-redux';

const Contact = () => {


    const color = useSelector(state => state.background?.color)

    return (
        <ContactWrapper color={color}>

            <h2>CONCTACTO</h2>

            <ContactContainer>

                <InfoContainer>
                    <h3>Email</h3>
                    <div>
                       <div className='icon-container'><TfiEmail /></div> 
                        <a href='mailto:matty199905@hotmail.com' rel="noopener" target='_blank'>matty199905@hotmail.com</a></div>


                </InfoContainer>

                <InfoContainer>
                    <h3>Whatsapp</h3>
                    <div>
                        <div className='icon-container'><FaWhatsapp /></div>
                        <a href='https://wa.me/5491132046562' rel="noopener" target='_blank'>+54 9 11 3204-6562</a></div>

                </InfoContainer>

                <InfoContainer>
                    <h3>Ubicación</h3>
                    <div>
                       <div className='icon-container'><IoLocationOutline /></div> 
                        <span>Martínez, Buenos Aires, Arg.</span></div>

                </InfoContainer>

            </ContactContainer>

        </ContactWrapper>
    )
}

export default Contact
