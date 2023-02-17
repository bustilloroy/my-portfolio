export default function Footer(props) {
  return (
    <section className={`${props.themeMode ? 'bg-dark' : 'bg-light'}`} id='footer'>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="d-flex align-item-center justify-content-center">
              <p className="h4 card-title me-3">Social</p>
              <div className='d-flex'>
                <a href='https://instagram.com/roy.bustillo?igshid=ZDdkNTZiNTM=' className='nav-link me-3' rel="noreferrer" target='_blank'><i className="bi bi-instagram h4"></i></a>
                <a href='https://www.facebook.com/profile.php?id=100089335414873' className='nav-link me-3' rel="noreferrer" target='_blank'><i className="bi bi-facebook h4"></i></a>
              </div>
            </div>
          </div>
          <div className="col-6" style={{borderLeft: '1px solid gray'}}>
            <p className="card-title mb-2 text-center"><i className="bi bi-c-circle-fill"> </i>2023 - Roy Bustillo - My Porfolio</p>
          </div>
        </div>
      </div>
    </section>
  );
}