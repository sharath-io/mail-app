import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"

export function Trash(){
    const {state,dispatch} = useContext(MailContext);
    // console.log(state.trashMails);
    
    return (
        <div>
            <ul>
                {
                    state.trashMails.map(({mId,subject,content, unread,isStarred}) => <li key={mId}>
                        <div className="subject">
                          <h5>Subject: {subject}</h5>
                          <button onClick={()=> dispatch({type:'DEL_STAR_UNSTAR', id: mId})}>{isStarred ? 'UnStar' : 'Star'}</button>
                        </div>
                        <p>{content}</p>
                        <div className="action-btn">
                        <button className="mark-btn" onClick={()=> dispatch({type:'DEL_READ_UNREAD', id: mId})}>Mark as {unread ? 'Read' : 'Unread'}</button>
                        <button className="spam-btn" onClick={()=> dispatch({type:'DEL_SPAM', id: mId})}>Report Spam</button>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )
}