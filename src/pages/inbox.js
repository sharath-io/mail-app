import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"

export function Inbox(){

    const {state} = useContext(MailContext);
    return (
        <div>
            <h1>Inbox page</h1>
            <ul>
                {
                    state.map(({subject,content, unread,isStarred}) => <li>
                        <div className="subject">
                          <h5>Subject: {subject}</h5>
                          <button>{isStarred ? 'UnStar' : 'Star'}</button>
                        </div>
                        <p>{content}</p>
                        <div className="action-btn">
                        <button className="delete-btn">Delete</button>
                        <button className="mark-btn">Mark as {unread ? 'Read' : 'Unread'}</button>
                        <button className="spam-btn">Spam</button>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    )
}