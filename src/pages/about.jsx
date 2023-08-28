import refaim from '../assets/img/refaim.png'
import about from '../assets/img/about1.jpg'
import { Media } from '../cmps/media'
export function About() {

    return (
        <section className="about">
            <div className="paragraph-about flex center center">
                <div className="genral">
                    <h1>עמותת רפאים</h1>
                    <h2>בית חם למשוחררי היחידה הרב מימדית</h2>
                    {/* אולי לעשות כותרת עמותה ולקפוץ לחזון */}
                </div>
            </div>
            <div className="title flex center "id='vision'>
                    <img src={refaim} alt="" />
                <div>
                    <h1>חזון העמותה</h1>
                    העמותה תהווה בית חם למשוחררי היחידה הרב ממדית.
                    <br />
                    חברי העמותה יקיימו קהילה מקדמת ותומכת,
                    <br />
                    שתקח חלק אחראי ופעיל להובלה בחברה הישראלית.
                    <br />
                    העמותה תעבוד לקדם מצוינות צבאית ואזרחית עם מתן דגש על שירות משמעותי.
                    <br />
                </div>
            </div>
            <div className="paragraph flex center" id="objectives">
                <div className="genral">
                    <h1>מטרות העמותה</h1>
                    <ul className='flex column'>
                        <li>
                            <span className="head">קהילת רפאים-</span>
                            העמותה תהווה בית חם למשוחררי היחידה הרב מימדית , ותפעל לבנות קהילה פעילה בחברה הישראלית.
                        </li>
                        <li>
                            <span className="head">משרות עבודה-</span>
                            העמותה תכווין את משוחרריה למגוון עבודות רלוונטיות למשוחררים ע"מ להשתלב בקלות בשוק העבודה.
                        </li>
                        <li>
                            <span className="head">מלגות ללימודים-</span>
                            העמותה תעזור למשוחרריה בקבלת מלגות ללימודים, הן מבחינת עזרה בקבלת מלגות קיימות והן בעזרת מלגות אישיות מטעם העמותה.
                        </li>
                        <li>
                            <span className="head">כנסים והכשרות-</span>
                            העמותה תספק למשוחרריה כנסים חברתיים ובהם יהיו הכשרות והרצאות שיועברו על ידי מרצים מובילים בתחומם,
                            <br />
                            אשר ייסיעו למשוחררי היחידה להתפתחות אישית וחברתית.
                        </li>
                        <li>
                            <span className="head">טיפול נפשי, רפואי ומשפטי-</span>
                            העמותה תפנה, תחבר ותעזור לנפגעי הגוף והנפש במהלך השירות הצבאי לעמותות כמו "לוחמים לחיים" או "נט"ל".
                            <br />
                            בנוסף, העמותה תעניק סיוע בעזרת עורכי דין לצליחת ההליך המשפטי.
                        </li>
                        <li>
                            <span className="head">עשייה חברתית-</span>
                            העמותה תארגן למשוחרריה פרויקטים קהילתיים והתנדבויות שונות בכל רחבי הארץ.
                            <br />
                            העשייה החברתית תכלול עזרה לנוער בסיכון בתצורת "אח גדול", פגישות עם שורדי שואה, עידוד לגיוס משמעותי בבתי ספר על תיכוניים ועוד.
                        </li>
                        <li>
                            <span className="head">תמיכה בחיילי היחידה הרב מימדית-</span>
                            .העמותה תסייע ותתן פתרונות לחיילים מהיחידה הזקוקים לתמיכה,
                        </li>
                    </ul>
                </div>
                <img src={about} alt="" />
            </div>
            <div className="media-paragraph center" id='media'>
                <h1>היחידה הרב מימדית במדיה</h1>
                <Media/>
            </div>
            {/* ממליץ להוסיף :
            שקיפות
            דוגמאות */}
        </section >
    )
}


