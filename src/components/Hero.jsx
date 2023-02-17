import img from '../images/barong-grad-pic.png'
import cv1 from '../images/cv1.PNG'
import cv2 from '../images/cv2.PNG'
import cv from '../cv/Bustillo_Roy_CV.pdf'
import bg from '../images/—Pngtree—png free buckle blue gradient_3781709.png'

export default function Hero(props) {
    return (
        <>
        {/* Modal Section */}
        <div className="modal fade" id="cvModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-scrollable modal-fullscreen-lg-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">My CV</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img src={cv1} alt="" className="img-fluid"/>
                        </div>
                        <div className='col-lg-6'>
                            <img src={cv2} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href={cv} download className="btn btn-primary rounded px-4"><i className="bi bi-download"></i> Download CV</a>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
        {/* End Modal Section */}
            <section className={`hero text-center ${props.themeMode ? 'bg-dark bg-img' : 'bg-light'}`}>
                <div className='container'>
                    <div className='row' id='row'>
                        <div className='col-lg-6' id='col-1'>
                            <h1>Hello, I am <span className='text-gradient'>Roy Bustillo</span></h1>
                            <p className='lead'>I'm a fresh-graduate from <strong>STI-College Munoz Edsa</strong> , I Studied <strong>BS Information</strong> and I am looking for a job as <strong>Web Developer</strong>.</p>
                            <div className='cv-btn'>
                                <button className='btn btn-secondary rounded px-3' data-bs-toggle="modal" data-bs-target="#cvModal"><i className="bi bi-eye"> </i>View CV</button>
                                <a href={cv} download className='btn btn-primary rounded px-3'><i className="bi bi-download"> </i>Download</a>
                            </div>
                        </div>
                        <div className='col-lg-6' id='col-2'>
                        {/* <div className='position-absolute w-75 blob'>
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#7B8FA1" d="M42.5,-67.6C56,-57.5,68.3,-47.2,76.1,-33.7C83.9,-20.2,87.1,-3.6,84.2,11.6C81.2,26.9,72.1,40.7,61.4,53.3C50.6,65.9,38.3,77.2,24,81.1C9.7,84.9,-6.5,81.3,-21.1,75.4C-35.7,69.6,-48.6,61.4,-59,50.5C-69.5,39.6,-77.5,25.9,-80.1,11.2C-82.7,-3.6,-80,-19.4,-72.6,-32.1C-65.1,-44.7,-53,-54.1,-40.1,-64.4C-27.2,-74.7,-13.6,-85.9,0.5,-86.6C14.5,-87.3,29.1,-77.6,42.5,-67.6Z" transform="translate(100 100)" />
                            </svg>
                        </div> */}
                            <img src={bg} alt="" className='img-fluid hexagon' />
                            <img src={img} alt="" className='hero-img'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}