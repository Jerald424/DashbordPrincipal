import React from 'react'
import ChartData from './ChartData'

export default function TotalInstitution() {
    const institutionData = [
        { name: 'DBCY', place: 'Yelagiri', totalSTD: 72368, increasePercentage: '+10%', badgeColor: 'success', collageColor: 'dark', type: 'Arts&Sciencs' },
        { name: 'Sacred_Heart', place: 'Thirupatur', totalSTD: 72368, increasePercentage: '+10%', badgeColor: 'secondary', collageColor: 'success', type: 'Agri culture' },
        { name: 'DBCY', place: 'Yelagiri', totalSTD: 72368, increasePercentage: '+10%', badgeColor: 'success', collageColor: 'dark', type: 'Arts&Sciencs' },
        { name: 'Lakshmi_Collage', place: 'Bangaram', totalSTD: 72368, increasePercentage: '+10%', badgeColor: 'secondary', collageColor: 'primary', type: 'ITI Institution' },
        { name: 'DBCY', place: 'Yelagiri', totalSTD: 72368, increasePercentage: '+10%', badgeColor: 'primary', collageColor: 'success', type: 'Agri culture' },
        { name: 'DBCY', place: 'Yelagiri', totalSTD: 72368, increasePercentage: '+10%', badgeColor: 'success', collageColor: 'primary', type: 'ITI Institution' },
        { name: 'DR.Muruga_Polytechnic', place: 'Melore', totalSTD: 72368, increasePercentage: '+10%', badgeColor: 'success', collageColor: 'success', type: 'Agri culture' },
        { name: 'DBCY', place: 'Yelagiri', totalSTD: 72368, increasePercentage: '+10%', badgeColor: 'primary', collageColor: 'primary', type: 'ITI Institution' },
        { name: 'DR.Rks_Collage', place: 'Kallakurichi', totalSTD: 72368, increasePercentage: '+10%', badgeColor: 'primary', collageColor: 'dark', type: 'Arts&Sciencs' },
    ]
    const placeColor = []
    const collageColor = ["success", "dark", 'primary', 'warning']

    institutionData.filter(res => {
        const isDuplicate = placeColor.includes(res.type)
        if (!isDuplicate) {
            // placeColor.push({ collageType: res.type, color: res.collageColor })
            placeColor.push(res.type)

            return true

        }
        return false
    })
    console.log(placeColor, "the place and color")
    return (
        <div className='institution-part'>
            <div className='institution'>
                <div className='badge-color'>
                    <h6>Total institution</h6>
                    <div className='total-collage-color'>
                        {
                            placeColor?.map((res, index) => {
                                return (
                                    <div className='seperate-collage'>
                                        <p className={`collage-color  bg-${collageColor[index + 1]}`} />
                                        <p className='collage-name'>{res}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className='institution-list'>
                        {
                            institutionData.map(res => {
                                return (
                                    <div className='seperate-list'>
                                        <div className='list-collage-color-part'>
                                            <p className={`list-collage-color bg-${res.collageColor}`} />
                                        </div>
                                        <div className='list-collage-name'>
                                            <h6 title={res.name}>{res.name}</h6>
                                            <p>{res.place}</p>
                                        </div>

                                        <h6 className='list-count'>{res.totalSTD}</h6>
                                        <div className={`badge-part `}>
                                            <p className={` badge-text bg-${res.badgeColor}`}>{res.increasePercentage}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
