import {useState} from "react" 

const AddTask = ({onSubmit}) => {

    const [title, setTitle] = useState("")
    const [dateTime, setDateTime] = useState("")
    const [reminder, setReminder] = useState(false)

    const submitForm = (e) => {
        e.preventDefault();
        if(!title || title.length === 0) {
            alert("Title is required")
            return
        }

        if(!dateTime || dateTime.length === 0) {
            alert("Date & time is required")
            return
        }




        onSubmit({title: title, date: dateTime, reminder: reminder})
        setTitle("")
        setDateTime("")
        setReminder(false)
    }

    return (
        <form onSubmit={submitForm}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add task" value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <input type="text" placeholder="Add date & time" value={dateTime} onChange={(event) => setDateTime(event.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(event) => setReminder(event.target.checked)}  />
            </div>
            <input type="submit" value="Add" className="btn btn-block" />
        </form>
    )
}

export default AddTask
