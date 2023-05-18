import {createContext, useReducer} from 'react';
import {mails} from '../api/data';

export const MailContext = createContext();


const reducerFunction =(state,{type,id}) =>{
    switch(type)
    {
        case "DEL": return {
            ...state,
            trashMails: [state.allMails?.find(mail => mail.mId === id), ...state.trashMails],
            allMails: state.allMails.filter(mail => mail.mId!==id)
           };

        case "SPAM": return {
            ...state,
            spamMails: [state.allMails?.find(mail => mail.mId === id), ...state.spamMails],
            allMails: state.allMails.filter(mail => mail.mId!==id)
           };
        
        case "READ_UNREAD": return {
            ...state,
            allMails: state.allMails.map(mail => mail.mId===id ? {...mail, unread: !mail.unread} : mail)
           };
        
        case "STAR_UNSTAR": return {
            ...state,
            allMails: state.allMails.map(mail => mail.mId===id ? {...mail, isStarred: !mail.isStarred} : mail)
           };

        default : return state
    }
}


export const MailProvider =({children})=>{

    const [state, dispatch] = useReducer(reducerFunction, {
        allMails: mails,
        trashMails: [],
        spamMails: []
    });

    return (
        <MailContext.Provider value={{state, dispatch}}>
            {children}
        </MailContext.Provider>
    )
}