import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"

export function Inbox(){

    const {state,dispatch} = useContext(MailContext);
    return (
        <div>
            <h3>Unread : {state.allMails.filter(mail => mail.unread).length}</h3>
            <ul>
                {
                    state.allMails.map(({mId,subject,content, unread,isStarred}) => <li key={mId}>
                        <div className="subject">
                          <h5>Subject: {subject}</h5>
                          <button onClick={()=> dispatch({type:'STAR_UNSTAR', id: mId})}>{isStarred ? 'UnStar' : 'Star'}</button>
                        </div>
                        <p>{content}</p>
                        <div className="action-btn">
                        <button className="delete-btn" onClick={()=> dispatch({type:'DEL', id: mId})}>Delete</button>
                        <button className="mark-btn" onClick={()=> dispatch({type:'READ_UNREAD', id: mId})}>Mark as {unread ? 'Read' : 'Unread'}</button>
                        <button className="spam-btn" onClick={()=> dispatch({type:'SPAM', id: mId})}>Spam</button>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )
}