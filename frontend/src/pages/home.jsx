import { useEffect, useState } from "react"
import api from "../api";
import Note from "../components/note";



function Home(){
    const [notes,setNotes] = useState([]);
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");

    useEffect(() =>{
        getNotes();
    }, []);

    const getNotes= ()=>{
        api.get("api/notes/").then((res) => res.data).then((data) => {
            setNotes(data);
            console.log(data);
    }).catch((err) => alert(err));
};

    const deleteNotes=(id)=>{
        api.delete(`api/notes/delete/${id}/`).then(res => {
            if(res.status === 204){
                alert("Note is Deleted");
            }else{
                alert("failed to delete note");
            }getNotes()
        }).catch((err) => alert(err));

    };
    
    const createNotes= (e)=>{
        e.preventDefault();
        api.post('api/notes', {title,content}).then(res => {
            if(res.status === 201){
                alert("note created");
            }else{
                alert("failed to create note");
            }getNotes()
        }).catch((err) => alert(err));

    };

    return (
        <div>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} ondelete={deleteNotes} key={note.id} />
                ))}
                
            </div>
            <h2>Create Notes</h2>
            <form onSubmit={createNotes}>

                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" required onChange={(e)=> setTitle(e.target.value)} value={title} /><br />
                <label htmlFor="content">Content:</label>
                <textarea  name="content" id="content" required onChange={(e)=> setContent(e.target.value)} value={content} /><br />
                <input type="submit" value={submit} />
            </form>
        </div>
    )
}
export default Home