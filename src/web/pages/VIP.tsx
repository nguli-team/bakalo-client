import React from 'react';
import { Link } from 'react-router-dom';
import FaqList from '../../utils/FaqList';
import TOS from '../../utils/TermsOfSale';
import TOU from '../../utils/TermsOfUse';

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

  return (
    <div className="flex bg-gradient-to-b from-purple-dark via-purple-darkLight to-purple-light w-full min-h-screen text-white justify-center">
      <div className="flex-1 my-20">
        <div className="grid grid-cols-2 gap-4 lg:mx-48">
          <div className="col-span-2 box-border relative">
            <div className="shadow-xl">
              <p className="p-2 ml-2">Support bakalo-- buy a VIP Ticket</p>
            </div>
            <div className="p-2 mx-2 text-sm my-2">
              <p>
                A bakalo Pass allows users to bypass typing a CAPTCHA verification when posting and
                reporting posts on the bakalo image and discussion boards. The idea for Passes came
                directly from the community and were introduced as a way for users to show their
                support and receive a convenient feature in return. Passes cost $20 per year, which
                is about $1.67 per month—or less than a single 20oz bottle of soda.
              </p>

              <p className="mt-2">
                Forgot your PIN? Reset it{' '}
                <Link to="/" className="text-yellow">
                  {' '}
                  here.
                </Link>{' '}
              </p>

              <p className="mt-2">
                If your Pass has expired or is expiring in less than 6 months, you can renew it
                <Link to="/" className="text-yellow">
                  {' '}
                  here.
                </Link>
              </p>

              <p className="mt-2">
                If you have trouble purchasing a bakalo Pass, please e-mail bakalo@lolo.com
              </p>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="bg-purple-dark box-border relative">
              <div className="shadow-xl">
                <p className="p-2 ml-2">Purchase a VIP Ticket</p>
              </div>
              <form action="">
                <div className="flex flex-col mx-10 my-5">
                  <h3>Your E-mail</h3>
                  <input
                    className="my-2 px-2  w-full sm:w-1/2  text-black"
                    type="email"
                    name="email"
                    placeholder=""
                  />

                  <h3>Verify E-mail</h3>
                  <input
                    className="my-2 px-2 w-full sm:w-1/2 text-black"
                    type="email"
                    name="verifyemail"
                    placeholder=""
                  />
                  <div className="flex-row my-3 ml-8 text-sm">
                    <input type="checkbox" id="giftpass" />
                    <label htmlFor="giftpass">
                      {' '}
                      Purchase this Pass as a gift for someone else?
                    </label>
                  </div>
                  <hr />
                  <div className="text-center text-md my-3">
                    <h3>Cost</h3>
                    <h2>$20.00 USD</h2>
                  </div>
                  <hr />
                  <div className="flex-row my-2 mx-2 text-center text-sm">
                    <input type="checkbox" id="acceptterms" />
                    <label htmlFor="accepterms">
                      {' '}
                      I have read and agree to the Terms of Sale and Terms of Use.
                    </label>
                  </div>
                  <div className="bg-white text-black text-sm text-center w-2/5 rounded p-0.5 my-3 place-self-center hover:bg-opacity-50">
                    <button type="submit">Pay with Digital Currency</button>
                  </div>
                  <Link to="/" className="text-center text-yellow">
                    <h3> click here if you have already purchased a bakalo Pass.</h3>
                  </Link>
                  <p className="text-xs my-3">
                    Note: You must have JavaScript and browser cookies enabled in order to complete
                    this purchase. Please provide a valid e-mail address, as you may have trouble
                    receiving your Pass credentials if you fail to do so.
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
    </div>
  );
};
export default VIP;
