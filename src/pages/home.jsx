import React, { useState, useEffect } from 'react'
import ravmad0 from '../assets/img/ravmad0.jpg'
import ravmad1 from '../assets/img/ravmad1.jpg'
import ravmad2 from '../assets/img/ravmad2.jpg'
import ravmad3 from '../assets/img/ravmad3.jpg'

export function Home() {
    const imgs = [ravmad0, ravmad1, ravmad2, ravmad3];
    const [idx, setIdx] = useState(0);

    return (
        <section className="home">
            <div className="hero">
                <img src={imgs[idx]} alt="" />
                <div className="flex space-between chev">
                    <div className="fas fa-chevron-left" onClick={() => {
                        if (idx + 1 >= imgs.length)
                            setIdx(0)
                        else {
                            setIdx(idx + 1)
                        }
                    }}>
                    </div>
                    <div className="fas fa-chevron-right" onClick={() => {
                        if (idx + 1 >= imgs.length)
                            setIdx(0)
                        else {
                            setIdx(idx + 1)
                        }
                    }
                    }></div>
                </div>
            </div>
            {/* <h1 className="welcome">עמותת רפאים</h1> */}
            {/* <h3>עמותת משוחררי היחידה הרב מימדית</h3>
                <div className="info">
                    <h2>About the app:</h2>
                    <h4>We found a way to caculate the best beach to the conditions.</h4>
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam delectus excepturi dolor aut minima animi cum</h4>
                    <h4> beatae dolorum possimus provident nulla, quia culpa quidem laborum tempora architecto soluta! Magni, modi!</h4>
                </div> */}
        </section>
    )
}





