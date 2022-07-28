import React from 'react'
import CardDetails from './CardDetails'
import ChartData from './ChartData'
import "./dashboard.css"
import TotalInstitution from './TotalInstitution'

export default function Dashboard() {

    return (
        <div className='total-dashboard'>
            <div className='three-cards mt-3'>
                <CardDetails image={"https://media.istockphoto.com/photos/multiethnic-group-of-latin-american-college-students-smiling-picture-id1349297974?b=1&k=20&m=1349297974&s=170667a&w=0&h=HXhZJOkouT4BWGa-or0-AriJlmXJHZdCZBQqGwu6yvs="} totalCount={52728} count1={2323} count2={6767} heading1={"Male"} heading2={"Female"} />
                <CardDetails image={"https://marvel-b1-cdn.bc0a.com/f00000000026007/resilienteducator.com/wp-content/uploads/2014/11/math-teacher.jpg"} totalCount={5235} count1={2434} count2={423} heading1={"Teching"} heading2={"Non Teaching"} />
                <CardDetails image={"https://media.istockphoto.com/photos/multiethnic-group-of-latin-american-college-students-smiling-picture-id1349297974?b=1&k=20&m=1349297974&s=170667a&w=0&h=HXhZJOkouT4BWGa-or0-AriJlmXJHZdCZBQqGwu6yvs="} totalCount={52728} count1={2323} count2={6767} heading1={"Male"} heading2={"Female"} />
            </div>
            <div className='row p-0 m-0  my-5 '>
                <div className='col-md-6 p-0 '>
                    <div className='chart-part p-0'>
                        <h6>Fess Collection Chart</h6>
                        <ChartData />
                    </div>

                </div>
                <div className='col-md-6 p-0'>
                    <TotalInstitution />
                </div>
            </div>
        </div>
    )
}
