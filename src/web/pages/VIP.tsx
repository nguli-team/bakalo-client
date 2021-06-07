import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { unwrapResult } from '@reduxjs/toolkit';
import FaqList from '../../utils/FaqList';
import TOS from '../../utils/TermsOfSale';
import TOU from '../../utils/TermsOfUse';
import { ModalVIP, Navbar } from '../components';
import { AppDispatch } from '../redux/store';
import { registerVip } from '../redux/VipMiddleware';

const VIP: React.FC = () => {
  const faqInfo = FaqList.map((faq) => {
    return (
      <div>
        <div className="my-1">{faq.q}</div>
        <div className="my-4">{faq.a}</div>
        <hr />
      </div>
    );
  });

  const TermsOfSale = TOS.map((tos) => {
    return (
      <div className="my-1">
        {tos.num}. {tos.text}
      </div>
    );
  });

  const TermsOfUse = TOU.map((tou) => {
    return (
      <div className="my-1">
        {tou.num}. {tou.text}
      </div>
    );
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible((wasModalVisible) => !wasModalVisible);
  };

  const [vipRegistrationForm, setVipRegistrationForm] = useState({
    email: '',
    confirmEmail: ''
  });
  const updateRegistrationForm = (event: { target: any }) => {
    const { target } = event;
    switch (target.name) {
      case 'email':
        setVipRegistrationForm({ ...vipRegistrationForm, email: target.value });
        break;
      case 'confirmEmail':
        setVipRegistrationForm({ ...vipRegistrationForm, confirmEmail: target.value });
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch<AppDispatch>();

  // eslint-disable-next-line consistent-return
  const submitVipRegistration = async (event: any) => {
    event.preventDefault();
    if (vipRegistrationForm.email !== '') {
      if (vipRegistrationForm.email === vipRegistrationForm.confirmEmail) {
        const result = await dispatch(registerVip({ email: vipRegistrationForm.email })).then(
          unwrapResult
        );
        if (result) {
          toast('Registration Successful! Please check your email.');
        }
      }
    }
    return 0;
  };

  return (
    <div>
      <Navbar />
      <div className="flex bg-gradient-to-b from-purple-dark via-purple-darkLight to-purple-light w-full min-h-screen text-white justify-center">
        <div className="flex-1 my-20">
          <div className="grid grid-cols-2 gap-4 lg:mx-48">
            <div className="col-span-2 box-border relative">
              <div className="shadow-xl">
                <p className="p-2 ml-2">Support bakalo-- beli Tiket VIP</p>
              </div>
              <div className="p-2 mx-2 text-sm my-2">
                <p>
                  Bakalo Pass memungkinkan pengguna melewati pengetikan verifikasi CAPTCHA saat
                  memposting dan melaporkan posting di gambar bakalo dan papan diskusi. Ide untuk
                  Passes datang langsung dari komunitas dan diperkenalkan sebagai cara bagi pengguna
                  untuk menunjukkannya mendukung dan menerima fitur yang nyaman sebagai imbalan.
                  Tiket masuk berharga $ 20 per tahun, yang mana sekitar $ 1,67 per bulan — atau
                  kurang dari satu botol soda berukuran 20oz.
                </p>

                <p className="mt-2">
                  Jika Anda kesulitan membeli bakalo Pass, silakan kirim email ke support@bakalo.li
                </p>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="bg-purple-dark box-border relative">
                <div className="shadow-xl">
                  <p className="p-2 ml-2">Beli Tiket VIP</p>
                </div>
                <form method="post" onSubmit={submitVipRegistration}>
                  <div className="flex flex-col mx-10 my-5">
                    <h3>E-mail Anda</h3>
                    <input
                      className="my-2 px-2  w-full sm:w-1/2  text-black"
                      type="email"
                      name="email"
                      required
                      placeholder=""
                      onChange={updateRegistrationForm}
                    />

                    <h3>Verifikasi E-mail</h3>
                    <input
                      className="my-2 mb-5 px-2 w-full sm:w-1/2 text-black"
                      type="email"
                      name="confirmEmail"
                      required
                      placeholder=""
                      onChange={updateRegistrationForm}
                    />
                    <hr />
                    <div className="text-center text-md my-3">
                      <h3>Biaya</h3>
                      <h2>$20.00 USD</h2>
                    </div>
                    <hr />
                    <div className="flex-row my-2 mx-2 text-center text-sm">
                      <input type="checkbox" id="acceptterms" required />
                      <label htmlFor="accepterms">
                        {' '}
                        Saya telah membaca dan menyetujui Terms of Sale dan Terms of Use.
                      </label>
                    </div>
                    <div className="bg-white text-black text-sm text-center w-1/2 rounded p-0.5 my-3 place-self-center hover:bg-opacity-50">
                      <button type="submit">Bayar dengan Mata Uang Digital</button>
                    </div>
                    <button
                      type="button"
                      onClick={toggleModal}
                      className="text-center text-yellow hover:opacity-60"
                    >
                      <h3> klik di sini jika Anda sudah membeli bakalo Pass.</h3>
                    </button>
                    <p className="text-xs my-3">
                      Catatan: Anda harus mengaktifkan JavaScript dan cookie browser untuk
                      menyelesaikan pembelian ini. Harap berikan alamat email yang valid, karena
                      Anda mungkin kesulitan menerima kredensial Pass jika gagal melakukannya.
                    </p>
                  </div>
                </form>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-purple-dark box-border relative">
                <div className="shadow-xl">
                  <p className="p-2 ml-2">Terms of Sale</p>
                </div>
                <div className="p-4 text-xs">{TermsOfSale}</div>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-purple-dark box-border relative">
                <div className="shadow-xl">
                  <p className="p-2 ml-2">Terms of Use</p>
                </div>
                <div className="p-4 text-xs">{TermsOfUse}</div>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 bg-purple-dark box-border relative">
              <div className="shadow-xl">
                <p className="p-2 ml-2">Frequently Asked Questions</p>
              </div>
              <div className="p-4 text-sm">{faqInfo}</div>
            </div>
          </div>
        </div>
        <ModalVIP isModalVisible={isModalVisible} closeModal={toggleModal} />
      </div>
    </div>
  );
};
export default VIP;
