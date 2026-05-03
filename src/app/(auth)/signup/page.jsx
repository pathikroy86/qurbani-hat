import React from 'react';

const RegisterPage = () => {
    return (
        <div className='md:h-[600] flex justify-center items-center'>
            <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" required />
                    <p className="validator-hint hidden">Required</p>
                </fieldset>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input validator" placeholder="Email" required />
                    <p className="validator-hint hidden">Required</p>
                </fieldset>
                <label className='fieldset'>
                    <span className='label'>Image URL</span>
                    <input type="url" className="input validator" required placeholder="https://" value="https://"
                        pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$"
                        title="Must be valid URL" />
                    <p className="validator-hint">Must be valid URL</p>
                </label>
                <label className="fieldset">
                    <span className="label">Password</span>
                    <input type="password" className="input validator" required placeholder="Password" minLength="8"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                    <p className="validator-hint hidden">Required</p>
                </label>
                <button className="btn bg-[#1F7A4D] text-white mt-4" type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;