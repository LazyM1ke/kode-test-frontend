import './User.scss'

function User() {
    return (
        <div className="user">
            <img src="https://api.lorem.space/image/face?w=120&h=120" alt="avatar" className="user__avatar"/>
            <div className='user__title'>
                <div className="user__title-name">Алексей Миногаров <span className="user__title-tag">mi</span></div>
                <div className="user__title-department">Analyst</div>
            </div>
        </div>
    );
}

export default User;
