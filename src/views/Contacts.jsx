import "../index.css";

function Contacts() {
  return (
    <section className="contactpage">
      <div className="container">
        <div className="glass" data-text="Email" style={{ "--r": -15 }}>
          <svg viewBox="0 0 512 512" height="1em">
            <path d="M502.3 190.8L327.4 338.3c-15.8 13.2-39 13.2-54.8 0L9.7 190.8C3.5 186 0 178.6 0 170.6V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v74.6c0 8-3.5 15.4-9.7 20.2z" />
          </svg>
        </div>

        <div className="glass" data-text="Phone" style={{ "--r": 5 }}>
          <svg viewBox="0 0 512 512" height="1em">
            <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.8 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36.2 76.7-98.3 138.8-175 175l-49.6-60.6c-6.7-8.3-18.2-11.1-28-6.9l-112 48c-10.6 4.9-16.5 16.5-13.9 27.8l24 104C16.8 466.1 25 472 34.5 472 273.3 472 472 273.3 472 34.5c0-9.5-5.9-17.7-14.6-19.9z" />
          </svg>
        </div>

        <div className="glass" data-text="Location" style={{ "--r": 25 }}>
          <svg viewBox="0 0 384 512" height="1em">
            <path d="M168 0C75.4 0 0 75.4 0 168c0 131.7 168 344 168 344s168-212.3 168-344C336 75.4 260.6 0 168 0zm0 256c-48.6 0-88-39.4-88-88s39.4-88 88-88 88 39.4 88 88-39.4 88-88 88z" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
