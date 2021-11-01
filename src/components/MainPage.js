import React, { useState, useEffect} from 'react'
import Card from './Card.js';
import Header from './Header.js';
const axios = require('axios');

const MainPage = () => {


    const [updateState, setUpdateState] = useState(false);
    const [currentData, setCurrentData] = useState([]);
    const [cards, setCards] = useState('all');

    useEffect(() => {
        const getData = async () => {
            try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
              console.log(response.data.slice(0,20));
              setCurrentData(response.data.slice(0,20));
              
            } catch (error) {
              console.error(error);
            }
        }

        getData();
    }, [])


    const updateCard = (index) => {

        currentData[index].completed = !currentData[index].completed;
        
        setCurrentData(currentData);
        setUpdateState(!updateState);
    }


    const updateAllCards = (cards) => {

        switch (cards) {
            case 'all':
                setCards('all');
            break;
            
            case 'completed':
                setCards('completed');
            break;
            
            case 'incompleted':
                setCards('incompleted');
            break;
        
            default:
                break;
        }
    }

    return (
        <div>
            <Header updateAllCards={ updateAllCards }/>
            {
                currentData.length > 0 ?
                (
                    <div className="container-cards">
                    {
                        currentData.map( (task, index) => {

                            switch (cards) {
                                case 'all':
                                    return(
                                        <Card key={ index } updateCard ={ updateCard } index={ index } task={ task }/>
                                    );

                                case 'completed':
                                    if(task.completed)
                                    {
                                        return(
                                            <Card key={ index } updateCard ={ updateCard } index={ index } task={ task }/>
                                        );    
                                    }
                                break;

                                case 'incompleted':
                                    if(!task.completed)
                                    {
                                        return(
                                            <Card key={ index } updateCard ={ updateCard } index={ index } task={ task }/>
                                        );    
                                    }
                                break;
                                default:
                                    return(
                                        <div>
                                        </div>
                                    );
                            }

                        })
                    }
                    </div>
                )
                :
                (
                    <div>
                        spinner
                    </div>
                )
            }
        </div>
    )
}

export default MainPage
