import "./Home.scss"
import User from "../components/User";
import axios from "axios";
import { fetchUsers, userSlice } from '../redux/reducers/userSlice';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "../components/Skeleton";
import notFoundIcon from "../assets/notfound.png"

function Home() {
    
    const dispatch = useDispatch();
    const {users, isLoading} = useSelector(state => state.userReducer)
    const {searchValue, activeGroupName} = useSelector(state => state.filterReducer)


    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    
    
    const userList = users
    .filter(user => {
        if(user.firstName.toLowerCase().includes(searchValue.toLowerCase())
            || 
            user.lastName.toLowerCase().includes(searchValue.toLowerCase())
            ||
            user.userTag.toLowerCase().includes(searchValue.toLowerCase())){
            return true;
        }
    })
    .map((obj) => <User key={obj.id} {...obj} />)
    

    return (
        
        <div className="home">
            {
               userList.length == 0 && searchValue != '' 
                ? 
                    (
                        <div className="notFound">
                            <img src={notFoundIcon}/>
                            <h2>Мы никого не нашли</h2>
                            <span>Попробуй скорректировать запрос</span>
                        </div>
                    )
                    :  
                    (<div className="users">
                        {isLoading 
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                        : userList}
                    </div>)
            }
           
        </div>
    );
}

export default Home;
