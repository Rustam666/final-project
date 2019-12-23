import React from 'react';
import '../../components/bootstrap/bootstrap-grid.css'
import '../../components/bootstrap/style.css'
import  '../../components/bootstrap/bootstrap-reboot.css'
import '../../components/main.scss'
import ContactSection from "../../components/contact-section/contact";
import Banner from "../../components/banner/banner";

const Contacts = () => (
    <div>
        <Banner title='Contact Us'/>
        <ContactSection/>
    </div>
);

export default Contacts