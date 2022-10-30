import "./Tasks.css";
import {
    FaRegEdit,
    FaTrashAlt,
    FaCheckSquare,
    FaRegSquare,
} from "react-icons/fa";
import { useState } from "react";
import taskService from "../../services/taskService";

function Tasks({typeMap}) {
    const [tasks, setTasks] = useState([])
    const [show, setShow] = useState(false)
    const [taskEdit, setTasksEdit] = useState({})

    useEffect(() => {
        setTimeout(() => {
            loadTasks();
        }, 500);
    }, [typeNapmshow]);

        
    

    const loadTasks = () => {
        taskService.
        getPerType(typeMap["name"].toLowerCase())
        .then((result) => {
            console.log(result.data.result);
            setTasks(result.data.result)
        }).catch((err) => {
            console.log(err);
        })
    }
        const excluirTask = (index) => {
            taskService.
            delete(tasks[index]._id())
            .then((res) => {
                console.log(res);
                setTasks(res)
            }).catch((err) => {
                console.log(err);
            })
        }

            const executarTask = (index) => {
                const data = tasks[index]
                data.executada = !data.executada
                taskService.
                update(data)
                .then((res) => {
                    console.log(res);
                    setTasks(res)
                }).catch((err) => {
                    console.log(err);
                })
            }
            const editTask = (index) => {
                const task = tasks[index]
                setTaskEdit(task)
                setShow(true)
    }

    return <section className="wrapper"> 
    {/*MODAL*/}
    <h1>{typeMap["name"]}  </h1>
    <div className="tasks">
        {
             tasks.length>0 && tasks.map((item, index)=>{
                return (
                    <div className="task">
                        <div className="text">
                            <h3>{item.titulo}</h3>
                            <p>{item.descricao}</p>
                        </div>
                        <div className="info">
                            <p style={{fontWeight: '200'}}>
                                {item.data.split('T')[0].split('-').reverse().join('/')}
                            </p>
                            <div className="icons">
                                {typeMap["code"] !== "executadas" ? (
                                <FaCheckSquare 
                                size={20} onClick={() => executarTask(index)} style={{cursor: "pointer"}}>

                                </FaCheckSquare>
                            ) : (
                                <FaRegSquare size={20} onClick={() => executarTask(index)} style={{cursor: "pointer"}}>
                                    
                                </FaRegSquare>
                            )}
                                <FaTrashAlt size={20} onClick={() => excluirTask(index)} style={{margin: "0 5px", cursor: "pointer"}}>

                                </FaTrashAlt>
                                <FaRegEdit size={20} onClick={() => editTask(index)} style={{cursor: "pointer"}}>

                                </FaRegEdit>
                                </div>
                        </div>
                        </div>
                )
             })
        }

    </div>

    </section>
}

export default Tasks;
