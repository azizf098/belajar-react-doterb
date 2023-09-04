import React, { Component } from 'react';
import '../style/contact.css';
 
class Contact extends Component {
    render() {
        return (
            <div className="card">
                <div className="container">
                    <div className="Titel underline">
                        Contact
                    </div>
                    <br></br>
                    <div className="mt-6 conten text-center">
                    <div className="mb-2">
                        <h1 className='block text-sm font-semibold text-gray-800'>Nama : Aziz F</h1>
                    </div>
                    <div className="mb-2">
                        <h1 className='block text-sm font-semibold text-gray-800'>Alamat : Kopo Sayati</h1>
                    </div>
                    <div className="mb-2">
                        <h1 className='block text-sm font-semibold text-gray-800'>Sekolah : SMK ASSALAAM BANDUNG</h1>
                    </div>
                    <div className="mb-2">
                        <h1 className='block text-sm font-semibold text-gray-800'>Email : azizferdiansyah098@gmail.com</h1>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Contact;