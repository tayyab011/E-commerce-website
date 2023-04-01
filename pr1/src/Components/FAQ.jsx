import React from 'react';

const FAQ = () => {
    return (
      <div data-theme='autumn'>
        <h1 className='text-red-900 bg-orange-200 p-20 text-center text-5xl text-bold'>FAQs</h1>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-3xl p-10">
            What is the return policy at OIKAWA?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl px-25">
            <p>
              At OIKAWA, we have a hassle-free return policy. If for any reason
              you are not satisfied with your purchase, you can return it within
              30 days of the purchase date for a full refund or exchange.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-3xl p-10">
            Does OIKAWA offer free shipping?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl p-25">
            <p>Yes, we offer free shipping on all orders within India.</p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-3xl p-10">
            Can I cancel my order after I have placed it?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl p-25">
            <p>
              Yes, you can cancel your order before it is shipped. Once the
              order has been shipped, you will need to return it for a refund or
              exchange
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-3xl p-10">
            How long does it take for my order to be delivered?t
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl p-25">
            <p>
              Orders are typically delivered within 3-7 business days from the
              date of purchase, depending on your location.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-3xl p-10">
            Does OIKAWA offer a warranty on its products?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl p-25">
            <p>
              Yes, we offer a warranty on all our products. Please refer to our
              warranty policy for more information.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-3xl p-10">
            Are all the products on the OIKAWA website in stock?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl p-25">
            <p>
              hWe make every effort to keep all our products in stock, but there
              may be times when an item is temporarily out of stock. In such
              cases, we will notify you of the expected delivery date.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-3xl p-10">
            How do I know which size to order?
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-2xl p-25">
            <p>
              We have a size chart on our website that will help you determine
              the right size for you. If you have any questions, our customer
              service team is always available to help.
            </p>
          </div>
        </div>
        
      </div>
    );
};

export default FAQ;