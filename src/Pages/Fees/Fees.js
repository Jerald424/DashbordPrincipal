import React, { useState } from 'react'
import Main from '../Main'
import Student from '../student/Student'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import StudentProfile from '../student/StudentProfile'
export default function Fees() {
    const [modalShow, setModalShow] = useState(false)
    const tableData = [
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
    ]
    return (
        <div>
            <Main >
                <div className='student-table d-none d-md-block'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Mark</th>
                                <th>Place</th>
                                <th>SchoolDays</th>
                                <th>Present</th>
                                <th>Absent</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData.map((res, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{res.name}</td>
                                            <td>{res.class}</td>
                                            <td>{res.mark}</td>
                                            <td>{res.place}</td>
                                            <td>{res.schollDays}</td>
                                            <td>{res.present}</td>
                                            <td>{res.absent}</td>
                                            <td><button onClick={() => setModalShow(true)} className='btn btn-sm btn-success'><FontAwesomeIcon icon={faUser} style={{ color: 'white' }} /> </button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <StudentProfile modalState={{ getter: modalShow, setter: setModalShow }} />

                </div>

            </Main>

        </div>
    )
}
