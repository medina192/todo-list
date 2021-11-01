import React from 'react'
import { BsCheckCircleFill, BsFillXCircleFill} from "react-icons/bs";

const Card = ({ task, index, updateCard }) => {



    return (
        <div className="container-card">
            <div className="container-title-icon">
                <h3 className="title-card">{task.title}</h3>
                {
                    task.completed ? 
                    (
                        <BsCheckCircleFill className="icon-check-completed" />
                    )
                    :
                    (
                        <BsFillXCircleFill className="icon-check-incompleted" />
                    )
                }
            </div>
            <p className="task-id">id: <b>{task.id}</b></p>
            <div className="container-change-buttons">
                {
                    task.completed ? 
                    (
                        <button 
                            className="btn-card btn-change-2-incompleted"
                            onClick={() => updateCard(index)}    
                        > Cambiar estado</button>
                    )
                    :
                    (
                        <button 
                            className="btn-card btn-change-2-completed"
                            onClick={() => updateCard(index)}       
                        >Cambiar estado</button>
                    )
                }
            </div>
        </div>
    )
}

export default Card
