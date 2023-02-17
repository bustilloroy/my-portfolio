import goal from '../images/undraw_target_re_fi8j.svg'

export default function About(props) {
  return (
    <section className={`${props.themeMode ? "bg-dark bg-img" : "bg-light"}`} id="about">
      <h1 className={`mb-5 ${props.themeMode ? 'text-gradient' : ''}`}>
        <i className="bi bi-file-earmark-person"></i> About Me
      </h1>
      <div className="container">
        <div className="row mb-5">
          <div className="col card-goal" data-aos='fade-right'>
            <div className="row row-cols-1 g-4">
              <div className="col">
                <div className={`card ${props.themeMode ? 'bg-dark border shadow-light' : 'bg-light shadow-lg'}`}>
                  <div className="card-body">
                    <div className={`card-title h2 ${props.themeMode ? 'text-gradient' : ''}`}>My Goal</div>
                    <p className="card-text">My <strong>short term</strong> goal is to get a job in reputable company where I can start utilize my skills and improve my career path and my <strong>long term</strong> career goal is to be in a respectable position in that organization.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className={`card ${props.themeMode ? 'bg-dark border shadow-light' : 'bg-light shadow-lg'}`}>
                  <div className="card-body">
                    <div className={`card-title h2 ${props.themeMode ? 'text-gradient' : ''}`}>My Traits</div>
                    <p className="card-text">I believe my <strong>strongest traits</strong> is that, I’ve always been a <strong>great team player</strong>, I’m good at producing quality work in team environment and I’m a <strong>fast-learner</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col text-center d-none d-sm-flex" data-aos='fade-left'>
            <img src={goal} className='img-fluid' alt=''/>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-md-6" data-aos="fade-right">
          <div className={`card ${props.themeMode ? 'bg-dark border shadow-light' : 'bg-light shadow-lg'}`} >
            <div className={`card-header mb-3 h4 ${props.themeMode ? 'text-gradient' : ''}`}>
              Personal Information
            </div>
              <div className="container py-3">
              {props.datas.map((item, index) => {
                return(
                    <div className="row g-3" key={index}>
                      <div className="col-lg-6">
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping" style={{width: 98}}>Age</span>
                          <input type="text" className="form-control" disabled value={item.age} aria-label="Age" aria-describedby="addon-wrapping"/>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping" style={{width: 98}}>Gender</span>
                          <input type="text" className="form-control" disabled value={item.gender} aria-label="Gender" aria-describedby="addon-wrapping"/>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping" style={{width: 98}}>BirthDate</span>
                          <input type="text" className="form-control" disabled value={item.birthDate} aria-label="Birth Date" aria-describedby="addon-wrapping"/>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping" style={{width: 98}}>Birth Place</span>
                          <input type="text" className="form-control" disabled value={item.birthPlace} aria-label="Birth Place" aria-describedby="addon-wrapping"/>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping" style={{width: 98}}>Height</span>
                          <input type="text" className="form-control" disabled value={item.height} aria-label="Height" aria-describedby="addon-wrapping"/>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping" style={{width: 98}}>Nationality</span>
                          <input type="text" className="form-control" disabled value={item.nationality} aria-label="Nationality" aria-describedby="addon-wrapping"/>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-group flex-nowrap">
                          <span className="input-group-text" id="addon-wrapping" style={{width: 98}}>Status</span>
                          <input type="text" className="form-control" disabled value={item.status} aria-label="Status" aria-describedby="addon-wrapping"/>
                        </div>
                      </div>
                    </div>
                );})}
            </div>
          </div>
          </div>
          <div className="col-md-6">
            <div className="container">
              {props.timeLine.map((item, index) => {
                return(
                  <div className="row" id='dot' data-aos="fade-up" key={index}>
                    <div className="col-auto flex-column d-sm-flex">
                      <div className="row h-50">
                        <div className="col border-end border-primary"></div>
                          <div className="col"></div>
                      </div>
                        <h5 className="m-2 circle-badge">
                          <span className="badge rounded-circle bg-primary text-dark border">
                            &nbsp;
                          </span>
                        </h5>
                      <div className="row h-50">
                        <div className="col border-end border-primary"></div>
                        <div className="col"></div>
                      </div>
                    </div>
                    <div className="col py-2 ">
                      <div className={`card ${props.themeMode ? 'bg-dark border card-light-shadow' : 'bg-light card-about'}`} id='card' style={{transition: '.3s'}}>
                        <div className="card-header">
                          <div className="float-end h6">{item.schoolYear}</div>
                          <div className="card-title h6">{item.level}</div>
                        </div>
                      <div className="card-body">
                        <p className='card-text'>{item.school}</p>
                          {item.course && <p className='card-text'>{item.course}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              );})}
            </div>
          </div>
        </div>
      </div>
    </section>
);}