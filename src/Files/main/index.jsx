import React, {useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./style.scss"
const Main= () => {

    const [task,setTask] = useState([
        
    ]);
    const [title,setTitle] = useState("");
    const [date,setDate] = useState("");



    const addTask = (e) => {
        
        const check = {
            title:title.trim().length===0, 
            date:date.trim().length===0,
        }
if(check.title || check.date){
    toast.error("Please fill all the fields",{
        position: "top-right",
        autoClose: 2000,
    });
    
}else{
    const newTask = {
            id: new Date().getTime().toString(),
            title:title,
            date:date,}
   setTask([...task,newTask]);
        setTitle("");
        setDate("");
        toast.success("Task successfully created",{
            position: "top-right",
            autoClose: 2000,
        });
        }
     

    }
    



    const deleteTask = (id) => {
        const updatedTask = task.filter((task) => task.id !== id);
        setTask(updatedTask);
        toast.info("TASK DELETED",{
            position: "top-right",
            autoClose: 2000,
        });

    }


  
    return (
        <>
        <ToastContainer />
        <div className="container mt-5 ">
           <div className="W-75 shadow p-3 mx-auto">
           <form action="#" id='tasks'onSubmit={()=>addTask()} >
                 <label htmlFor="title " className="w-100 py-3">
                    <strong>ENTER TASK TITLE</strong>
                 <input type="text" id="title" className="form-control w-100" placeholder="ENTER TASK TITLE"
                 value={title}
                 onChange={(e)=>setTitle(e.target.value)} />
                 </label>

                 <label htmlFor="date" className="w-100 py-3">
                 <input type="date" id="date" className="form-control" 
                 value={date}
                 onChange={(e)=>setDate(e.target.value)} />
                 </label>
                 <button type='submit' className="btn btn-success w-100">ADD TASK</button>
            </form>
           </div>
        </div>

<div className="container mt-3 ">
<div className="shadow p-3 mx-auto">
<table className="table table-striped table-hover table-bordered">
    <thead>
        <tr>
           <th>Id</th>  <th>Task Title</th> <th>Task date</th> <th>Delete</th>
        </tr>
    </thead>

    <tbody>
        
    {
        task.length > 0 ? task.map((task) => {
            const {id,title,date} = task;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{date}</td>
                    <td><button className="btn btn-danger" onClick={() => deleteTask(id)}>Delete</button></td>
                </tr>
            )
        
} ) : "No Task"

}
        

    </tbody>

</table>
</div>

</div>
            
        </>
    )
}
export default Main;