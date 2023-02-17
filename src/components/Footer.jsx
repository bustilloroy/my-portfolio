export default function Footer(props) {
  return (
    <section className={`${props.themeMode ? 'bg-dark' : 'bg-light'}`} id='footer'>
      <div className="container">
          <div className="d-flex align-items-center justify-between flex-column">
            <p className="h4 mb-4">Socials</p>
            <div className="d-flex align-items-center justify-between mb-4">
              <a href='https://instagram.com/roy.bustillo?igshid=ZDdkNTZiNTM=' className='nav-link me-3' rel="noreferrer" target='_blank'><i className="bi bi-instagram h4"></i></a>
              <a href='https://www.facebook.com/profile.php?id=100089335414873' className='nav-link me-3' rel="noreferrer" target='_blank'><i className="bi bi-facebook h4"></i></a>
              <a href='https://www.linkedin.com/in/roy-jr-bustillo-91039a252/' className='nav-link me-3' rel="noreferrer" target='_blank'><i className="bi bi-linkedin h4"></i></a>
            </div>
            <p className="card-title mb-2 text-center"><i className="bi bi-c-circle-fill"> </i>2023 - Roy Bustillo - My Porfolio</p>
          </div>
      </div>
    </section>
  );
}