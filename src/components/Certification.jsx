import cert1 from "../images/certification/Responsice_Web_Design_Certification.PNG"
import cert2 from "../images/certification/JavaScript_Algorithms_and_Data_Structures.PNG"

export default function Certification (props) {
  return (
    <section className={`${props.themeMode ? 'bg-dark bg-img' : 'bg-light'}`} id="certification">
      <h1 className={`mb-5 text-center ${props.themeMode ? 'text-gradient' : ''}`}>Certification</h1>
      <div className="container d-flex">
        <div className="row g-4" data-aos="fade-right">
          <div className="col-md-6">
            <p className="h4">Responsive Web-Design Certification</p>
            <a href="https://www.freecodecamp.org/certification/fcc853b957a-7c20-42ee-81f4-42b92d0ba865/responsive-web-design" target="_blank" rel="noreferrer">View Link</a>
            <img src={cert1} alt="" className="img-fluid"/>
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <p className="h4">JavaScript Algorithms and Data Structures</p>
            <a href="https://www.freecodecamp.org/certification/fcc853b957a-7c20-42ee-81f4-42b92d0ba865/javascript-algorithms-and-data-structures" target="_blank" rel="noreferrer">View Link</a>
            <img src={cert2} alt="" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>
  )
}