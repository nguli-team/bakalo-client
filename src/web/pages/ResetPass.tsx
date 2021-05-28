import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import { Navbar } from '../components';

const ResetPass: React.FC = () => {
  const initialState = {
    isVerified: false
  };

  const [data, setData] = useState(initialState);

  const verifyCallback = (response: string | null) => {
    if (response) {
      setData({ ...data, isVerified: true });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col h-screen w-full">
        <div className="grid grid-cols-1 relative mx-5 sm:mx-24 md:mx-48">
          <h1 className="text-3xl text-white mb-5 mt-10">Bakalo Pass Reset</h1>
          <hr />
          <div className="flex flex-col sm:flex-row mt-5 gap-5">
            <p className="text-white text-xl">Email</p>
            <input
              className="mb-3 px-2 h-8 w-full sm:w-max"
              type="text"
              name="token"
              placeholder=""
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-5 gap-5">
            <p className="text-white text-xl">Verifikasi</p>
            <ReCAPTCHA
              sitekey="6LfuJMUaAAAAANbKelhqJaR_pYDNbpgVVqXPOXBs"
              onChange={verifyCallback}
            />
          </div>
          <button
            type="submit"
            className="my-5 py-1 px-2 w-24 bg-red text-white rounded-md text-xl"
          >
            Submit
          </button>
          <div className="text-xs my-5 text-white">
            <p>
              Catatan: Anda harus memasukkan alamat email yang terkait dengan Bakalo Pass Anda untuk
              mengatur ulang PIN-nya.
            </p>
            <p>
              Belum punya Bakalo Pass? Klik di{' '}
              <Link to="/VIP/" className="text-yellow hover:opacity-60">
                {' '}
                sini
              </Link>{' '}
              untuk mempelajari lebih lanjut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
