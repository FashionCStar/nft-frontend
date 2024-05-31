import {useState, useEffect} from 'react'

import * as FaIcons from 'react-icons/fa'
function AuctionTimer(props:any) {
    const [timeLeft, setTimeLeft] = useState();
    const [day, setDay] = useState(0)
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    function calculateTimeLeft(endTime:any) {
        if(endTime !== undefined){
            let end = new Date(endTime)
            let endStamp = end.getTime()
            let curStamp = new Date().getTime()
            let milisec_diff = endStamp - curStamp
            setDay(Math.round(milisec_diff / 1000 / 60 / 60 / 24))

            let date_diff = new Date(milisec_diff)
            setHour(date_diff.getHours())
            setMin(date_diff.getMinutes())
            setSec(date_diff.getSeconds())
        }
    }
    useEffect(() => {
        let myInterval = setInterval(() => {
            calculateTimeLeft(props.endTime)
        }, 1000)
        return() => {
            clearInterval(myInterval)
        }
    })
    return(
        <>
            <div className="asset__wrap">
                <div className="asset__timer asset__timer2">
                    <span><FaIcons.FaStopwatch/> Auction ends in</span>
                    <div className="asset__clock">
                        <div className="asset__countdown">
                            <div className="asset__countdown--single">
                                <div>{day}</div><small>Days</small>
                            </div>
                            <div className="asset__countdown--single">
                                <div>{hour}</div><small>Hours</small>
                            </div>
                            <div className="asset__countdown--single">
                                <div>{min}</div><small>Mins</small>
                            </div>
                            <div className="asset__countdown--single">
                                <div>{sec}</div><small>Secs</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="asset__price">
                    <span>Minimum bid</span>
                    <span>{props.highest}</span>
                </div>
            </div>
        </>     
    )
}

export default AuctionTimer