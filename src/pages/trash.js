import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"

export function Trash(){
    const {state} = useContext(MailContext);
    // console.log(state.trashMails);
    
    return (
        <div>
            <h1>Trash page</h1>
            <ul>
                {
                    state.trashMails.map(({mId,subject,content, unread,isStarred}) => <li key={mId}>
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