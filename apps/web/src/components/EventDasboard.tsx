import React , {useState} from "react";


interface Event {
    name? : string,
    startSale ? : string,
    eventDate? : string,
    availableEvent? : number | 0,
    city? : string,
    slug? : string,
    status? : string,
    message? : string

}

interface EventResponse {
    event? : Event
}

export default function EventDasboard() {
    const [event , setEvent] = useState<EventResponse>({})

    const getEvents = async(token : any) => {
        const res = await fetch('http://localhost:8000/api/events',{
            method : 'GET' ,
            headers : {
                "Content Type" : "application/json",
                "Autorization" : `Bearer ${token}`
                
            }
        })
        const data = await res.json()
        setEvent(data)
    }
    return (
        <div>
            
        </div>
    )
  
}
