import { useContext } from "react";
import { useParams,NavLink } from "react-router-dom";
import { MailContext } from "..";
export function MailDetails(){
    const {mailmId} = useParams();
    const {state,dispatch} = useContext(MailContext);
    const {mId,subject,content, unread,isStarred} = state.allMails.find(mail => mail.mId===mailmId);
    return (
        <div>
            <div className="subject">
                          <h5>Subject: {subject}</h5>
                          <button onClick={()=> dispatch({type:'STAR_UNSTAR', id: mId})}>{isStarred ? 'UnStar' : 'Star'}</button>
            </div>
            <p>{content}</p>
            <NavLink to={`/mail/${mId}`}>view details</NavLink>
            <div className="action-btn">
              <button className="delete-btn" onClick={()=> dispatch({type:'DEL', id: mId})}>Delete</button>
              <button className="mark-btn" onClick={()=> dispatch({type:'READ_UNREAD', id: mId})}>Mark as {unread ? 'Read' : 'Unread'}</button>
              <button className="spam-btn" onClick={()=> dispatch({type:'SPAM', id: mId})}>Report Spam</button>
            </div>
         </div>
    )
}