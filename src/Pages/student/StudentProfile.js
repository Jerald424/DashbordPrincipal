import React from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'react-bootstrap'

export default function StudentProfile({ modalState }) {

    return (
        <div>
            <Modal show={modalState.getter} centered>

                <ModalBody>
                    <div className='student-details'>
                        <div className='left-part'>
                            <h6>Student Info</h6>
                            <div className='popup-name'>

                                <p className='name-label'>Name</p>
                                <p>Jerald</p>
                            </div><div className='popup-name'>
                                <p className='name-label'>Name</p>
                                <p>Jerald</p>
                            </div><div className='popup-name'>
                                <p className='name-label'>Name</p>
                                <p>Jerald</p>
                            </div><div className='popup-name'>
                                <p className='name-label'>Name</p>
                                <p>Jerald</p>
                            </div><div className='popup-name'>
                                <p className='name-label'>Name</p>
                                <p>Jerald</p>
                            </div><div className='popup-name'>
                                <p className='name-label'>Name</p>
                                <p>Jerald</p>
                            </div><div className='popup-name'>
                                <p className='name-label'>Name</p>
                                <p>Jerald</p>
                            </div>
                        </div>
                        <div className='right-part'>
                            <div className='image-part'>
                                <img src={require("../../assets/icon-gaee6b1a8b_1920.png")} className="popup-avatar" />
                            </div>
                            <div className='personal-details'>
                                <div className='popup-name'>
                                    <p className='name-label'>Place</p>
                                    <p>palayanur</p>
                                </div>  <div className='popup-name'>
                                    <p className='name-label'>Place</p>
                                    <p>palayanur</p>
                                </div>  <div className='popup-name'>
                                    <p className='name-label'>Place</p>
                                    <p>palayanur</p>
                                </div>  <div className='popup-name'>
                                    <p className='name-label'>Place</p>
                                    <p>palayanur</p>
                                </div>  <div className='popup-name'>
                                    <p className='name-label'>Place</p>
                                    <p>palayanur</p>
                                </div>  <div className='popup-name'>
                                    <p className='name-label'>Place</p>
                                    <p>palayanur</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className='modal-header-button'><button className='btn btn-sm btn-danger ' onClick={() => modalState.setter(false)}>Close</button></ModalFooter>

            </Modal>

        </div>
    )
}
