import React from 'react'
import Main from "../Main"
import "./student.css"

export default function Student() {
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
            <Main>
                <div className='student-table'>
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
                                <th>Avg</th>
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
                                            <td><button className='btn btn-sm btn-dark table-button'><img src={require(".././../assets/businessman-128.png")} className="table-icon" /></button></td>
                                            <td><button className='btn btn-sm btn-warning table-button'><img src={require("../../assets/icons8-edit-30.png")} className="table-icon" /></button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Main>
        </div>
    )
}
