import { useDispatch, useSelector } from 'react-redux';
import {filterSlice} from '../../redux/reducers/filterSlice';
import './groups.scss'

function Groups() {

    const groups = [
        'Все',
        'Android', 
        'IOS', 
        'Дизайн', 
        'Менеджмент', 
        'QA', 
        'Бэк-офис', 
        'Frontend', 
        'HR',
        'PR', 
        'Backend',
        'Техподдержка',
        'Аналитика'
    ];

    


    const dispatch = useDispatch();
    const {activeGroupName} = useSelector(state => state.filterReducer);
    const {setActiveGroupName} = filterSlice.actions

    return (
        <div className="groups">
            <ul>
                {groups.map((groupName,i) => (
                            <li onClick={() => dispatch(setActiveGroupName(groupName))} key={i} className={activeGroupName === groupName ? "active" : ""}>
                                {groupName}
                            </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default Groups;