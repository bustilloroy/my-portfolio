import cv1 from '../images/cv1.png'
import cv2 from '../images/cv2.png'

export default function Modal() {
    return (
        <>
            <div className="modal fade" id="cvModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-fullscreen-lg-down modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">My CV</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={cv1} alt="" className="img-fluid"/>
                        <img src={cv2} alt="" className="img-fluid"/>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary rounded-pill px-4"><i className="bi bi-download"></i> Download CV</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}