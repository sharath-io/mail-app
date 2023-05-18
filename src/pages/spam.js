import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"

export function Spam(){
    const {state} = useContext(MailContext);
    return (
        <div>
            <ul>
                {
                    state.spamMails.map(({mId,subject,content, unread,isStarred}) => <li key={mId}>
                        <div className="subject">
                          <h5>Subject: {subject}</h5>
                          <button>{isStarred ? 'UnStar' : 'Star'}</button>
                        </div>
                        <p>{content}</p>
                    </li>)
                }
            </ul>
        </div>
    )
}