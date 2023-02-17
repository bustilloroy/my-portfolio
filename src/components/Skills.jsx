import skillsLogo from '../images/undraw_percentages_re_a1ao.svg'

export default function Skills(props) {
  return (
    <section className={`skills ${props.themeMode ? "bg-dark bg-img" : "bg-light"}`} id="skills">
      <h1 className={`mb-5 ${props.themeMode ? 'text-gradient' : ''}`}>
        <i className="bi bi-list-stars"></i> Technical Skills
      </h1>
      <div className="container-md">
        <div className="row">
          <div className="col-sm-6 d-none d-sm-flex" data-aos="fade-right">
            <img src={skillsLogo} alt='' className='img-fluid'/>
          </div>
          <div className="col-sm-6" data-aos="fade-left">
            <div className={`card ${props.themeMode ? "bg-dark border shadow-light" : "bg-light shadow"}`}>
              <div className={`card-header h4 ${props.themeMode ? 'text-gradient' : ''}`}>Basic / Frameworks / Extension</div>
                <div className="card-body">
                  <p className='card-title lead'>Basics</p>
                  <div className="row text-center">
                    {props.row.map(item => {
                      return(
                        <div className='col-auto' key={item.img}>
                          <img src={require('../images/'+(item.img))} alt="" className='object-fit'/>
                          <p className='lead'>{item.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="card-body">
                <p className='card-title lead'>Frameworks / Extension</p>
                  <div className="row text-center">
                    {props.row2.map(item => {
                      return(
                        <div className='col-auto' key={item.img}>
                          <img src={require('../images/'+(item.img))} alt="" className='object-fit'/>
                          <p className='lead'>{item.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
