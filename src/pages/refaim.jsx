import logo from '../assets/img/refaim-symbol.png'
import refaim1 from '../assets/img/refaim-1.jpeg'
import refaim2 from '../assets/img/refaim-2.jpeg'
import sika from '../assets/img/refaim-sika.png'
import React from 'react'
import ReactPlayer from 'react-player'


export function Refaim() {


    return (
        <section className="refaim">
            <div className="logo flex column center">
                <img src={logo} alt="" />
                <h1>יחידת רפאים</h1>
                <a href="https://www.idf.il/%D7%90%D7%AA%D7%A8%D7%99-%D7%99%D7%97%D7%99%D7%93%D7%95%D7%AA/%D7%94%D7%99%D7%97%D7%99%D7%93%D7%94-%D7%94%D7%A8%D7%91-%D7%9E%D7%99%D7%9E%D7%93%D7%99%D7%AA/">
                    -לאתר היחידה-
                </a>
            </div>
            <div className="videos flex center">
                <ReactPlayer url='https://www.youtube.com/watch?v=juh40Li7BJo' />
                <h1 className='flex center'>
                    היחידה הרב מימדית:
                    <br />
                    מבט מקרוב
                </h1>
            </div>
            <div className="about-refaim flex column align-center space-between">
                <div className="genral flex column center">

                    <h1>מי אנחנו</h1>
                    <p>
                        יחידת רפאים- "הרב מימדית" היא יחידה קרבית מסווגת מיוחדת בצה"ל המשלבת יכולות חי"ר, שריון, הנדסה קרבית, נ"ט, אוויר ומודעין.
                        <br />
                        היחידה הוקמה במהלך שנת 2019 ביוזמת הרמטכ"ל אביב כוכבי במטרה להערך ללחימה בשדה הקרב העתידי.
                        <br />
                        היחידה מיועדת להילחם בכל זירות הלחימה ובכל תוואי שטח בהתאם למאפייניו ולאתגריו המשתנים, תוך שהיא משמשת ככוח מתמרן רב־זרועי, בעל כושר לחימה גבוה לאיתור, לחשיפה ולהשמדת אויב.


                    </p>
                </div>
                <img src={refaim1} alt="" />
                <div className="trainig flex column center">
                    <h1>מסלול ההכשרה</h1>
                    <p>
                        החיילים המיועדים ליחידת רפאים עוברים טירונות בבא"חים של חטיבות החי"ר השונות, ולאחר מכן עוברים את ההכשרה המתקדמת והמיועדת ליחידה.
                        <br />
                        הלוחמים שעברו את ההכשרה מגיעים לטקס סוף המסלול ומקבלים את סיכת היחידה הרב מימדית.
                    </p>
                </div>
                <img src={refaim2} alt="" />
                <div className="arrive flex column center">

                    <h1>הגעה ליחידה</h1>
                    <p>
                        בעבר, היו מגיעים ליחידה הרב ממדית, צוותים שהתגייסו וגדלו ביחידות אחרות, אך כחלק מפיתוח היחידה, עודכן מסלול המיון וכעת מגיעים צוותים שמתגייסים באופן יעודי אליה.
                        <br />
                        בנוסף, לוחמי עוקץ ויהל"ם יכולים להצטרף ליחידה הרב ממדית, לאחר שעברו הכשרה שלמה ביחידות שלהם.
                    </p>
                </div>
                <img src={sika} alt="" />
            </div>
        </section>
    )
}