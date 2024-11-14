// Header.js
import React from 'react';

// Inline styles for Header component
const styles = {
    header: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
    },
    logo: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#333',
    },
    profileIcon: {
        fontSize: '24px',
        cursor: 'pointer',
    },
};

function Header() {
    return (
        <header style={styles.header}>
            <h1 style={styles.logo}>TCT</h1>
            <div style={styles.profileIcon}>👤</div>
        </header>
    );
}

export default Header;
