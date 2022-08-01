import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ReactStickyBox from 'react-sticky-box'

export default function StudentMobile({ data, modalState }) {
    return (
        <div className='student-mobile'>
            <div className='mobile-total-cards'>
                <ReactStickyBox offsetTop={50} offsetBottom={20} className="sticky-header-for-table">
                    <div className='student-mobile-heading'>
                        <p>SNO</p>
                        <p>PERSONAL INFO</p>
                        <p>SHOOL INFO</p>
                        <p>OTHERS</p>
                    </div>
                </ReactStickyBox>
                {
                    data.map((res, index) => {
                        return (
                            <div className='student-mobile-seperate-card'>
                                <div className='sno'>
                                    <p className='s-no'>{index + 1}</p>
                                </div>
                                <div className='personal-info'>
                                    <div className='name-part'>
                                        <p className='name-label'>NAME</p>
                                        <div className='name-button'>
                                            <p className='name-answer'>{res.name}</p>
                                            <FontAwesomeIcon icon={faUser} className='user-button' onClick={() => modalState(true)} />
                                        </div>
                                    </div>
                                    <div className='name-part'>
                                        <p className='name-label'>PLACE</p>
                                        <p className='name-answer'>{res.place}</p>
                                    </div>

                                </div>
                                <div className='personal-info'>
                                    <div className='name-part'>
                                        <p className='name-label'>SCHOOL DAYS</p>
                                        <p className="name-answer">{res.schollDays}</p>
                                    </div>
                                    <div className='name-part'>
                                        <p className="name-label">PRESENT DAYS</p>
                                        <p className="name-answer">{res.present}</p>
                                    </div>
                                    <div className='name-part'>
                                        <p className='name-label'>ABSENT DAYS</p>
                                        <p className="name-answer">{res.absent}</p>
                                    </div >
                                </div>
                                <div className='personal-info'>
                                    <div className='name-part'>
                                        <p className='name-label'>CLASS</p>
                                        <p className='name-answer'>{res.class}</p>
                                    </div>
                                    <div className='name-part'>
                                        <p className='name-label'>MARK</p>
                                        <p className='name-answer'> {res.mark}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}
