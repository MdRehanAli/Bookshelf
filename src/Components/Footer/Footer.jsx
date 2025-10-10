import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <div className='text-white bg-black'>
            <div className=''>
                <footer className="flex flex-col sm:flex-row justify-between items-center py-10 sm:items-start gap-10 max-w-7xl mx-auto w-11/12 border-b-1">
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
                <footer className='max-w-7xl mx-auto w-11/12'>
                    <div className="flex flex-col sm:flex-row justify-between items-center border-base-300 border-t py-8 gap-8">
                        <div className='flex flex-col sm:flex-row items-center gap-2'>
                            <div>
                                <h1 className='text-lg mb-2'>Book Shelf Industries Ltd.</h1>
                                <h1 className='text-lg'>Providing reliable Books since 2021</h1>
                            </div>
                        </div>
                        <nav className="flex flex-col">
                            <h1 className='sm-text-center text-left text-xl font-semibold mb-2'>Social Links</h1>
                            <div className="sm-text-center text-left grid grid-flow-col gap-4">
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
                    </div>
                </footer>
            </div>
            <p className='text-center pt-4 pb-8'><small>Copyright © 2025 - All right reserved</small></p>
        </div>
    );
};

export default Footer;