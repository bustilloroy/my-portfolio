
export default function Projects(props) {

  return(
  <section className={`projects ${props.themeMode ? 'bg-dark bg-img' : 'bg-light'}`} id='projects'>
      <h1 className={`mb-5 ${props.themeMode ? 'text-gradient' : ''}`}><i className="bi bi-list-check"></i> My Personal Projects</h1>
      <div className='container-md'>
        <div className='row'>
            {/* {props.card} */}
          {props.card.map((item, index) => {
            return(
              <div className="col-sm-6 col-md-12 col-lg-6 g-3 card-content" key={index}  data-aos={index % 2 === 0 ? 'fade-right': 'fade-left'}>
                <div className={`card shadow ${props.themeMode ? 'bg-dark border' : 'bg-light'}`}>
                  <div className="row g-0">
                    <div className="col-md-5 d-none d-md-flex">
                        <img src={require(`../images/projects/${item.img}`)} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <a href={item.link} className={`btn btn${props.themeMode ? '' : '-outline'}-secondary me-1`} target='_blank' rel='noreferrer'><i className="bi bi-box-arrow-right"></i> Visit Link</a>
                        <a href={item.codeLink} className={`btn btn${props.themeMode ? '' : '-outline'}-primary`} target='_blank' rel='noreferrer'><i className="bi bi-box-arrow-right"></i> View Code</a>
                      </div>
                      <div className='card-body'>
                        <h5 className='card-title'>Tools :</h5>
                        {item.tools.map((item, index) => {
                          return (
                            <img src={require(`../images/${item}`)} key={index} className='mx-1' style={{width: 30}} alt=''/>
                          );})}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}  
      </div>
    </div>
  </section>
  );
}