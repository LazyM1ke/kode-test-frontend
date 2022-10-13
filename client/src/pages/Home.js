import "./Home.scss"
import User from "../components/User";
import Error from "../components/Error"
import { fetchUsers, userSlice } from '../redux/reducers/userSlice';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "../components/Skeleton";
import notFoundIcon from "../assets/notfound.png"
import Modal from "../components/Modal/";
import {filterSlice} from "../redux/reducers/filterSlice";
import TopAppBar from "../components/TopAppBar";

function Home() {
    
    const dispatch = useDispatch();
    const {users, status} = useSelector(state => state.userReducer)
    const {searchValue, activeGroupValue, modalActive, sortType} = useSelector(state => state.filterReducer)
    const {setModalActive, setSortType} = filterSlice.actions

    useEffect(() => {
        dispatch(fetchUsers(activeGroupValue))        
        
    }, [activeGroupValue, sortType])
    
    const filteredUsers = users
    .filter(user => {
        if(user.firstName.toLowerCase().includes(searchValue.toLowerCase())
            || 
            user.lastName.toLowerCase().includes(searchValue.toLowerCase())
            ||
            user.userTag.toLowerCase().includes(searchValue.toLowerCase())){
            return true;
        }
    })
    const userItems = sortUsers(filteredUsers).map((obj) => <User key={obj.id} {...obj} />)

    function sortUsers(users) {
        switch (sortType) {
            case "alphabet":
                const sortedByName = users.sort((a, b) => a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1);
                return sortedByName

            case "birthday":
                const today = new Date();
                const sortedByDate = users.sort((a, b) => +a.birthday.split("-")[1] - +b.birthday.split("-")[1] ? 1 : -1);
                return sortedByDate
                
        }
    }
 
        
    
    return (
        
        <div className="home">
      <TopAppBar/>


            {
               userItems.length == 0 && searchValue != '' 
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
                        {status === 'loading'
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                        : userItems}
                        {status === 'error' ? (<Error/>) : userItems}
                    </div>)
            }
            {
                modalActive 
                &&
                (
                    <Modal active={modalActive}>
                        <div className="modal__content-title">
                            <h2>Сортировка</h2>
                            <svg className="closeBtn" onClick={() => dispatch(setModalActive(false))} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="12" fill="#F7F7F8"/>
                                <path d="M16.7364 7.2636C17.0879 7.61508 17.0879 8.18492 16.7364 8.5364L13.273 12L16.7364 15.4636C17.0586 15.7858 17.0854 16.2915 16.817 16.6442L16.7364 16.7364C16.3849 17.0879 15.8151 17.0879 15.4636 16.7364L12 13.273L8.5364 16.7364C8.18492 17.0879 7.61508 17.0879 7.2636 16.7364C6.91213 16.3849 6.91213 15.8151 7.2636 15.4636L10.727 12L7.2636 8.5364C6.94142 8.21421 6.91457 7.70853 7.18306 7.35577L7.2636 7.2636C7.61508 6.91213 8.18492 6.91213 8.5364 7.2636L12 10.727L15.4636 7.2636C15.8151 6.91213 16.3849 6.91213 16.7364 7.2636Z" fill="#C3C3C6"/>
                            </svg>
                        </div>
                        <div className="modal__content__wrapper">
                            <div className="modal__content__wrapper-item">
                                <input type='radio' name="sort" value="alphabet"
                                 checked={sortType == "alphabet" ? true : false}
                                 onChange={(e) => dispatch(setSortType(e.target.value))}
                                />
                                <span>По алфавиту</span>         
                            </div>
                            <div className="modal__content__wrapper-item">
                                <input type='radio' name="sort" value="birthday"
                                checked={sortType == "birthday" ? true : false}
                                onChange={(e) => dispatch(setSortType(e.target.value))}
                                />
                                <span>По дате рождения</span>         
                            </div>
                        </div>
                    </Modal>
                )
                
            }
           
        </div>
    );
}

export default Home;
