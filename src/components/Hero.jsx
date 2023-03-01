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
                            <img src={bg} alt="" className='img-fluid hexagon' />
                            <img src={img} alt="" className='hero-img'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}