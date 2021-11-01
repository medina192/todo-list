import React, { useState, useRef } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FaBeer } from 'react-icons/fa';
import { BsJournalCheck } from "react-icons/bs";

const Header = ({updateAllCards}) => {

    const currentButton = useRef([true, false, false]);

    const [updateState, setUpdateState] = useState(false);
    const unselectedClass = "btn-header-unselected";
    const selectedClass = "btn-header-selected";

    const buttonPressed = (index, cards) => {
        for(let i = 0; i < 3; i++)
        {
            currentButton.current[i] = false;
        }
        currentButton.current[index] = true;
        setUpdateState(!updateState);
        updateAllCards(cards);
    }


    return (
        <div className="container-header">
            <BsJournalCheck className="header-icon" />
            <div className="container-header-buttons">
                <button 
                    className={currentButton.current[0] ? selectedClass : unselectedClass}
                    onClick={() => buttonPressed(0, 'all')}
                >Todos</button>
                <button 
                    className={currentButton.current[1] ? selectedClass : unselectedClass}
                    onClick={() => buttonPressed(1, 'completed')}
                >Completos</button>
                <button 
                    className={currentButton.current[2] ? selectedClass : unselectedClass}
                    onClick={() => buttonPressed(2, 'incompleted')}
                >Incompletos</button>
            </div>
            <BsJournalCheck className="aux-icon" />
        </div>
    )
}

export default Header

//            <i className="fa fa-spinner fa-spin">no spinner but why</i>
