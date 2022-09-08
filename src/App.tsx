import { useState } from 'react';
import './App.css';

interface CardInfo {
  nameOnCard: string;
  cardNumber: string;
  expiry: string;
  cvv: number | undefined;
}

function App() {

  const [ cardInfo, setCardInfo ] = useState<CardInfo>({
    nameOnCard: '',
    cardNumber: '',
    expiry: '',
    cvv: undefined,
  })

  return (
    <div className="mx-auto my-12 w-[600px] rounded-xl border border-gray-100 p-6 shadow-lg">
      <section className="card-info-container">
        <div className="card-info">
          <div className="w-3/4 antialiased">
            <h3 className="h-32 text-xl font-semibold tracking-wider">Untitled.</h3>
            <div className="mb-2 flex items-center justify-between">
              <div className="text-xl uppercase">{cardInfo.nameOnCard !== '' ? cardInfo.nameOnCard : "NAME"}</div>
              <div>{cardInfo.expiry !== '' ? cardInfo.expiry : 'XX/XX'}</div>
            </div>
            <div className="flex justify-between font-mono text-2xl">
              <span>{cardInfo.cardNumber.substring(0, 4) !== '' ? cardInfo.cardNumber.substring(0, 4) : 'XXXX'}</span>
              <span>{cardInfo.cardNumber.substring(4, 8) !== '' ? cardInfo.cardNumber.substring(4, 8) : 'XXXX'}</span>
              <span>{cardInfo.cardNumber.substring(8, 12) !== '' ? cardInfo.cardNumber.substring(8, 12) : 'XXXX'}</span>
              <span>{cardInfo.cardNumber.substring(12, 16) !== '' ? cardInfo.cardNumber.substring(8, 12) : 'XXXX'}</span>
            </div>
          </div>
        </div>
      </section>

      <h3 className="mb-2 text-2xl font-light tracking-wider">Update payment method</h3>
      <p className="mb-4 text-lg text-gray-500">Update your card details.</p>
      <form>
        <div className="form-grid">
          <div className="flex flex-col">
            <label className="form-label" htmlFor="txtNameOnCard"> Name on card </label>
            <input 
              type="text" 
              className="form-input" 
              name="name" 
              id="txtNameOnCard" 
              value={cardInfo.nameOnCard}
              onChange={(e) => {
                setCardInfo((current) => ({
                  ...current, 
                  nameOnCard: String(e.target.value)
                }));
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="txtExpiry"> Expiry </label>
            <input 
              type="text" 
              className="form-input" 
              name="expiry" 
              id="txtExpiry"
              value={cardInfo.expiry}
              onChange={(e) => {
                setCardInfo((current) => ({
                  ...current, 
                  expiry: String(e.target.value)
                }));
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="txtCardNumber"> Card Number </label>
            <input 
              type="text" 
              className="form-input" 
              name="card_number" 
              id="txtCardNumber" 
              value={cardInfo.cardNumber}
              onChange={(e) => {
                setCardInfo((current) => ({
                  ...current, 
                  cardNumber: String(e.target.value)
                }));
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="form-label" htmlFor="txtCvv"> CVV </label>
            <input 
              type="password" 
              className="form-input" 
              name="txtCvv" 
              id="txtCvv" 
              value={cardInfo.cvv}
              onChange={(e) => {
                setCardInfo((current) => ({
                  ...current, 
                  cvv: Number(e.target.value)
                }));
              }}
            />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 text-lg">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-submit" type="submit">Update</button>
        </div>
      </form>
    </div>

  );
}

export default App;
