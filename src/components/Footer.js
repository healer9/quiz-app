import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <h3>Copyright &copy; {currentYear}, All rights reserved.</h3>
        </footer>
    )
}

export default Footer