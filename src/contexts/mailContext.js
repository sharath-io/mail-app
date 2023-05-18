import {createContext, useReducer} from 'react';
import {mails} from '../api/data';

export const MailContext = createContext();


const reducerFunction =(state,{type,id}) =>{
    switch(type)
    {
        
        case "STAR_UNSTAR": return {
            ...state,
            allMails: state.allMails.map(mail => mail.mId===id ? {...mail, isStarred: !mail.isStarred} : mail)
           };
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
        


        case "SPAM_DEL": return {
            ...state,
            spamMails: state.spamMails.filter(mail => mail.mId !== id),
            trashMails: [state.spamMails?.find(mail => mail.mId === id), ...state.trashMails],
           };
        case "SPAM_READ_UNREAD": return {
            ...state,
            spamMails: state.spamMails.map(mail => mail.mId===id ? {...mail, unread: !mail.unread} : mail)
           };
        case 'SPAM_STAR_UNSTAR' : return {
            ...state,
            spamMails: state.spamMails.map(mail => mail.mId===id ? {...mail, isStarred: !mail.isStarred} : mail)
           }



        case 'DEL_STAR_UNSTAR' : return {
            ...state,
            trashMails: state.trashMails.map(mail => mail.mId===id ? {...mail, isStarred: !mail.isStarred} : mail)
           }
        case 'DEL_READ_UNREAD' : return {
            ...state,
            trashMails: state.trashMails.map(mail => mail.mId === id ? {...mail, unread: !mail.unread} : mail)
           }
        case 'DEL_SPAM' : return {
            ...state,
            spamMails: [state.trashMails?.find(mail => mail.mId===id), ...state.spamMails],
            trashMails: state.trashMails.filter(mail => mail.mId !== id),
           }

        
        case 'SHOW_UNREAD' : return {
            ...state,
            showUnread: !state.showUnread
           }
        case 'SHOW_STAR' : return {
            ...state,
            showStar: !state.showStar
           }
        default : return state
    }
}


export const MailProvider =({children})=>{

    const [state, dispatch] = useReducer(reducerFunction, {
        allMails: mails,
        trashMails: [],
        spamMails: [],
        showUnread: false,
        showStar: false
    });

    const filterUnread = state.showUnread 
    ? state.allMails.filter(mail => mail.unread)
    : state.allMails

    const filterStarred = state.showStar
    ? filterUnread.filter(mail => mail.isStarred)
    : filterUnread

    return (
        <MailContext.Provider value={{state, dispatch, filterStarred}}>
            {children}
        </MailContext.Provider>
    )
}