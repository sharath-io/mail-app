import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"

export function Spam(){
    const {state, dispatch} = useContext(MailContext);
    return (
        <div>
            <ul>
                {
                    state.spamMails.map(({mId,subject,content, unread,isStarred}) => <li key={mId}>
                        <div className="subject">
                          <h5>Subject: {subject}</h5>
                          <button onClick={()=> dispatch({type:'SPAM_STAR_UNSTAR', id: mId})}>{isStarred ? 'UnStar' : 'Star'}</button>
                        </div>
                        <p>{content}</p>
                        <div className="action-btn">
                        <button className="delete-btn" onClick={()=> dispatch({type:'SPAM_DEL', id: mId})}>Delete</button>
                        <button className="mark-btn" onClick={()=> dispatch({type:'SPAM_READ_UNREAD', id: mId})}>Mark as {unread ? 'Read' : 'Unread'}</button>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )
}