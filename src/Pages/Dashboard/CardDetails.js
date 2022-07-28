import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardDetails(props) {
  return (
    <div>
      <Card className='seperate-card'>
        <Card.Img src={props.image} className="card-img" />
        <Card.ImgOverlay>
          <div className='card-detail'>
            <div className='count'>
              <h5>{props.totalCount}</h5>
              <p>count</p>
            </div>
            <div className='male-female'>
              <div className='male'>
                <h6>{props.count1}</h6>
                <p>{props.heading1}</p>
              </div>
              <div className='female'>
                <h6>{props.count2}</h6>
                <p>{props.heading2}</p>
              </div>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}
