import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {userSlice} from '../../redux/reducers/userSlice';
import './User.scss'

function User({firstName, lastName, avatarUrl, position, userTag, birthday, phone, id}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {setDetails} = userSlice.actions

    function handleOnUserClick() {
        dispatch(setDetails({firstName, lastName, avatarUrl, position, userTag, birthday, phone, id}))
        navigate(`/details/${id}`)
    }

    return (
        <div className="user" onClick={handleOnUserClick}>
                <img src={avatarUrl} alt="avatar" className="user__avatar"/>
                <div className='user__title'>
                    <div className="user__title-name">{firstName} {lastName} <span className="user__title-tag">{userTag}</span></div>
                    <div className="user__title-department">{position}</div>
                </div>
        </div>
    );
}

export default User;
