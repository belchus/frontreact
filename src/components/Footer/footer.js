import React from 'react';
import './footer.css';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer" style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px 0' }}>
            <div className="social-icons">
                <a href="https://api.whatsapp.com/send?phone=NUMERO_DE_TELEFONO" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={24} style={{ marginRight: '10px', color: '#fff' }} />
                </a>
                <a href="https://www.instagram.com/usuario/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} style={{ marginRight: '10px', color: '#fff' }} />
                </a>
            </div>
            <p>
                Arrepentimiento
            </p>
            <p>© 2024 Mi Empresa. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
