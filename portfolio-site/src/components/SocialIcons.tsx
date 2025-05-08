import React from 'react';
import Container from 'react-bootstrap/Container';

export const SocialIcons = () => {
    return (
        <Container className="social-icons">
            <h2>
                <a className="text-purple" href="https://www.linkedin.com/in/leah-sattar-666202230/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin me-3 social-icon"></i>
                </a>
                <a className="text-purple" href="https://github.com/lsattar" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github me-3 social-icon"></i>
                </a>
                <a className="text-purple" href="https://www.facebook.com/leah.sattar" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook me-3 social-icon"></i>
                </a>
                <a className="text-purple" href="mailto:ljsattar@gmail.com">
                    <i className="bi bi-envelope-at-fill me-3 social-icon"></i>
                </a>
                <a className="text-purple" href="tel:+18608785719">
                    <i className="bi bi-telephone-fill social-icon"></i>
                </a>
            </h2>
        </Container>
    );
};
