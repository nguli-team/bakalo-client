import React, { useState } from 'react';
import Recaptcha from 'react-recaptcha';
import { Link } from 'react-router-dom';

const ResetPass: React.FC = () => {
  const initialState = {
    isVerified: false
  };

  const [data, setData] = useState(initialState);

  const onloadCallback = () => {
    // eslint-disable-next-line no-console
    console.log('captcha successfully loaded');
  };

  const verifyCallback = (response: string) => {
    // eslint-disable-next-line no-console
    console.log(response);
    if (response) {
      setData({
        ...data,
        isVerified: true
      });
    }
  };
  return (
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
          <Recaptcha
            sitekey="6LfuJMUaAAAAANbKelhqJaR_pYDNbpgVVqXPOXBs"
            render="explicit"
            onloadCallback={onloadCallback}
            verifyCallback={verifyCallback}
          />
        </div>
        <button type="submit" className="my-5 py-1 px-2 w-24 bg-red text-white rounded-md text-xl">
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
  );
};

export default ResetPass;
