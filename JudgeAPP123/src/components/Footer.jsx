import React from 'react';

export default function Footer() {
    function currentYear() {
        return <>{(new Date().getFullYear())}</>
    }
    return (
        <footer className="footer footer-center footer-bottom p-4 bg-base-300 text-base-content shadow-md">
            <div>
                <p>Copyright &copy; {currentYear()} JudgeApp All Rights Reserved</p>
            </div>
        </footer>
    )
}
