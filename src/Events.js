import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import React, { useLayoutEffect, useState } from 'react';

function Events() {
    const [width, height] = useWindowSize()
    const [cardOffset,setCardOffset] = useState(0)
    const [numCards,setNumCards] = useState()
    if (width<1070 && numCards!==2) {
        setNumCards(2)
    }
    else if (width<1605 && width>=1070 && numCards!==4) {
        setNumCards(4)
    }
    else if (width>1605 && numCards!==6){
        setNumCards(6)
    }
    const microTitles = ["Advancements in Manufacturing Technologies","Advancements in Manufacturing Technologies","Advancements in Manufacturing Technologies","Innovative Solutions for Sustainable Water Management","Electric Mobility a Future Technology","Emerging Technologies in Computing","AI Innovations and Applications"]
    let microEvents= microTitles.map(element => <Micro name={element} />)
    let rem = numCards - (microEvents.length%numCards)
    if (rem === numCards){
        rem = 0
    }
    for (let i=0;i<rem;i++){
        microEvents.push(<Dummy />)
    }
    console.log(cardOffset,numCards,microEvents.length,rem)
    const arrowClick = (val,condition) => {
        if (condition) {
            setCardOffset(cardOffset+val)
        }
    }
    return (
        <>
            <div className="main-events">
                <h1 className="heading">Main Events</h1>
                <div>
                    <div className="out-blue">
                        <div className="in-white">
                            <div className="top">
                                <h1>Seminar</h1>
                                <label className="date">DD/MM/YYYY</label>
                            </div>
                            <p className="event-desc">Challenges in Technical Education for Skill Upgradation</p>
                            <a>Learn More → </a>
                        </div>
                    </div>
                    <div className="out-blue">
                        <div className="in-white">
                            <div className="top">
                                <h1>Panel Debate and Strategy Forming Session</h1>
                                <label className="date">DD/MM/YYYY</label>
                            </div>
                            <p className="event-desc">
                                Skill Upgradation and
                                Modernisation of Existing Courses & Designing & Implementation of
                                Add-On courses
                            </p>
                            <a>Learn More → </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="micro-events">
                <h1 className="heading">Micro Events</h1>
                <div>
                    <button onClick={() => arrowClick(-2,cardOffset!==0)} className={`left-button ${cardOffset!==0 && "active-button"}`} ><FaArrowLeft /></button>
                    <div className="micro-event-cards">
                        {microEvents.slice(cardOffset,cardOffset+numCards)}
                    </div> 
                    <button onClick={() => arrowClick(2,(cardOffset+numCards)<microEvents.length)} className={`right-button ${(cardOffset+numCards)<microEvents.length && "active-button"}`} ><FaArrowRight /></button>
                </div>
            </div>
        </>
    )
}

function Micro(props) {
    return (
        <div className="card-micro">
            <h1>{props.name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <a>Learn More → </a>
        </div>
    )
}

function Dummy() {
    return (
        <div className="dummy"></div>
    )
}

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

export default Events