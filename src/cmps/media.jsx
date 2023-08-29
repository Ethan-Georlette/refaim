import ynet from '../assets/img/ynet-overlay.jpg'
import meytav from '../assets/img/meytav-overlay.jpg'
import kan from '../assets/img/kan-overlay.jpeg'
import mako from '../assets/img/mako-overlay.jpg'


export function Media() {
    return (
        <div className="media flex column sapce-between align-center">
            <div className="ynet article flex center">
                <img src={ynet} alt="" />
                <div className='flex column align-center'>
                    <h1>תיעוד: אימון "היחידה הרב-ממדית" החדשה של צה"ל</h1>
                    <p>יחידת "רפאים", שהוקמה במסגרת התוכנית הרב שנתית של הרמטכ"ל כוכבי,
                        השלימה אימון בן כמה שבועות לקראת הפיכתה למבצעית בשורות הצבא.
                        <br />
                        הלוחמים השתמשו בכלי טיס שונים לתקיפת מטרות באש חיה</p>
                    <a href="https://www.ynet.co.il/news/article/rJskG7vgv">
                        לכתבה המלאה
                    </a>
                </div>
            </div>
            <div className="meytav article flex center">
                <div className='flex column  align-center'>
                    <h1>ראיון עם רס"ל ע' - לוחם ביחידה הרב-ממדית</h1>
                    <p>
                        רס"ל ע', לוחם ביחידה הרב-ממדית,
                        הגיע לספר לנו על היחידה החדשה והמסווגת,
                        על ההכשרה, על מבצעים שלקח בהם חלק וכיצד הגיע ליחידה.
                    </p>
                    <a href="https://www.mitgaisim.idf.il/%D7%9B%D7%AA%D7%91%D7%95%D7%AA/%D7%A8%D7%90%D7%A9%D7%99/%D7%98%D7%95%D7%A8%D7%99%D7%9D-%D7%90%D7%99%D7%A9%D7%99%D7%99%D7%9D-%D7%95%D7%A8%D7%90%D7%99%D7%95%D7%A0%D7%95%D7%AA/%D7%A8%D7%90%D7%99%D7%95%D7%9F-%D7%A2%D7%9D-%D7%9C%D7%95%D7%97%D7%9D-%D7%91%D7%99%D7%97%D7%99%D7%93%D7%94-%D7%94%D7%A8%D7%91-%D7%9E%D7%9E%D7%93%D7%99%D7%AA/#/">
                        לכתבה המלאה
                    </a>
                </div>
                <img src={meytav} alt="" />
            </div>
            <div className="kan article flex center">
                <img src={kan} alt="" />
                <div className='flex column  align-center'>

                    <h1>תיעוד מהאימון הראשון באש חיה של היחידה המובחרת החדשה בצה"ל</h1>
                    <p>
                        צה"ל סיים אימון שביצעה "יחידת רפאים" שהוקמה לפני כשנה במסגרת תוכנית "תנופה".
                        <br />
                        בביקור הרמטכ"ל ופורום מטכ"ל עשתה היחידה לראשונה תרגיל באש חיה על פי טכניקה חדשה שפיתחה,
                        ובה צוות הלוחמים בשטח מכוון מטוס קרב למטרות.
                    </p>
                    <a href="https://www.kan.org.il/content/kan-news/defense/293528/">
                        לכתבה המלאה
                    </a>
                </div>
            </div>
            <div className="article mako flex center">
                <div className='flex column align-center'>

                    <h1>3 הלוחמים שעשו היסטוריה בצה"ל: "הרמטכ"ל מגיע הרבה ליחידה"</h1>
                    <p>
                        השלושה הם הראשונים שצמחו ביחידה הרב-ממדית ומסיימים קורס קצינים בבה"ד 1.
                        <br />
                        הצעד הבא: פיקוד על טירונים שיתגייסו אליה ישירות, כאשר בהתחלה הובאו אליה צוותים ממקומות אחרים בצבא.
                        <br />
                    </p>
                    <a href="https://www.mako.co.il/pzm-soldiers/Article-0c5a908b2e1d181026.htm">
                        לכתבה המלאה
                    </a>
                </div>
                <img src={mako} alt="" />
            </div>
        </div>
    )
}