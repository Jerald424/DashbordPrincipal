import { faAddressCard, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Main from "../Main"
import "./student.css"
import StudentMobile from './StudentMobile'
import StudentProfile from './StudentProfile'
import { Bars, Circles, InfinitySpin } from 'react-loader-spinner'



export default function Student() {
    const [modalShow, setModalShow] = useState(false)
    const tableData = [
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 }, { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 }, { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 }, { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 }, { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 }, { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
        { name: 'Jerald', class: '12th', mark: 44, place: 'palayanur', schollDays: 234, present: 134, absent: 90 },
    ]
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const sliceData = tableData?.slice(0, itemsPerPage)
    const handleLoadMore = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setItemsPerPage(itemsPerPage + 5)

        }, 2000)
    }
    const noOfItems = tableData.length
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div>
            <Main>
                <div className='student-table d-none d-sm-block'>
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
                                sliceData.map((res, index) => {
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
                                            <td><button className='btn btn-sm btn-primary ' onClick={() => setModalShow(true)}><FontAwesomeIcon icon={faUser} style={{ color: 'white' }} /> </button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
                <div className='d-block d-sm-none'>
                    <StudentMobile data={sliceData} modalState={setModalShow} />
                </div>
                {itemsPerPage < noOfItems ? (isLoading ? <div className='loading-part'> <InfinitySpin height={80} width={80} color="red" className='loader-icon' /> </div> : <div className='load-part'>
                    <button className='btn btn-success btn-sm' onClick={handleLoadMore}>Load more </button>
                </div>) : <p className='text-center m-0 '>All data displayed</p>

                }



                <StudentProfile modalState={{ getter: modalShow, setter: setModalShow }} />
            </Main>
        </div>
    )
}
