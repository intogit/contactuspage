const Email = () => {
  return (
    <div>
      <div className="row">
        <div className="row_content d-flex justify-content-center">
          <div className="row">
            <div className="icon pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="rgba(0,0,0,.8)"
                class="bi bi-envelope bi-10x"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            </div>
          </div>
          <div className="row px-3">
            <div>
              <h2 className="contact_info_title">Email Us</h2>
              <h6 className="contact_info_value">example@gmail.com<br></br>example@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
