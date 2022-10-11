import './User.scss'

function User({firstName, lastName, userTag, position, avatarUrl}) {
    return (
        <div className="user">
            <img src={avatarUrl} alt="avatar" className="user__avatar"/>
            <div className='user__title'>
                <div className="user__title-name">{firstName} {lastName} <span className="user__title-tag">{userTag}</span></div>
                <div className="user__title-department">{position}</div>
            </div>
        </div>
    );
}

export default User;
