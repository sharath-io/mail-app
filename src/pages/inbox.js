import { useContext } from "react"
import { MailContext } from "../contexts/mailContext"

export function Inbox(){

    const {state} = useContext(MailContext);
    return (
        <div>
            <h1>Inbox page</h1>
            <ul>
                {
                    state.map(mail => <li>
                        <p>{mail.subject}</p>
                    </li>)
                }
            </ul>
        </div>
    )
}