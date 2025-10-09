import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <div className='max-w-7xl mx-auto w-11/12'>
                <footer className="flex flex-col sm:flex-row justify-between items-center bg-base-200 text-base-content py-10 sm:items-start gap-10">
                    <nav className='flex flex-col items-center justify-center gap-2'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='flex flex-col items-center justify-center gap-2'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col items-center justify-center gap-2'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
                <footer className="flex justify-between bg-base-200 text-base-content border-base-300 border-t py-4">
                    <div>
                        <h1 className='text-lg mb-2'>Book Shelf Industries Ltd.</h1>
                        <h1 className='text-lg'>Providing reliable Books since 2013</h1>
                    </div>
                    <nav className="">
                        <h1 className='text-xl font-semibold mb-2'>Social Links</h1>
                        <div className="grid grid-flow-col gap-4">
                            <a>
                                <Twitter></Twitter>
                            </a>
                            <a>
                                <Linkedin></Linkedin>
                            </a>
                            <a>
                                <Facebook></Facebook>
                            </a>
                        </div>
                    </nav>
                </footer>
            </div>
            <p className='text-center p-8'><small>Copyright © 2025 - All right reserved</small></p>
        </div>
    );
};

export default Footer;