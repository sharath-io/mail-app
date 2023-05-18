import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"

export function Inbox(){

    const {state,dispatch} = useContext(MailContext);
    return (
        <div>
            <h1>Inbox page</h1>
            <ul>
                {
                    state.allMails.map(({mId,subject,content, unread,isStarred}) => <li key={mId}>
                        <div className="subject">
                          <h5>Subject: {subject}</h5>
                          <button>{isStarred ? 'UnStar' : 'Star'}</button>
                        </div>
                        <p>{content}</p>
                        <div className="action-btn">
                        <button className="delete-btn" onClick={()=> dispatch({type:'DEL', id: mId})}>Delete</button>
                        <button className="mark-btn">Mark as {unread ? 'Read' : 'Unread'}</button>
                        <button className="spam-btn" onClick={()=> dispatch({type:'SPAM', id: mId})}>Spam</button>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )
}