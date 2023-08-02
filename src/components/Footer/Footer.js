import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    © {new Date().getFullYear()} Gabriela Araujo - Todos os direitos
                    reservados
                </p>
                <p className="footer-text">
                    Aventure-se comigo nas redes sociais:
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Instagram
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Facebook
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Twitter
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
