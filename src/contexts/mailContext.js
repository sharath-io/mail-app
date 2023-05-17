import {createContext, useReducer} from 'react';
import {mails} from '../api/data';

export const MailContext = createContext();



export const MailProvider =({children})=>{

    const [state, dispatch] = useReducer(()=>{}, mails);

    return (
        <MailContext.Provider value={{state, dispatch}}>
            {children}
        </MailContext.Provider>
    )
}