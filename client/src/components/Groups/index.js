import { useDispatch, useSelector } from 'react-redux';
import {filterSlice} from '../../redux/reducers/filterSlice';
import './groups.scss'

function Groups() {
    
    const dispatch = useDispatch();
    const {activeGroupName, groups} = useSelector(state => state.filterReducer);
    const {setActiveGroupValue, setActiveGroupName} = filterSlice.actions

    function handleOnGroupClick(group) {
        dispatch(setActiveGroupName(group.name))
        dispatch(setActiveGroupValue(group.value))
    }

    return (
        <div className="groups">
            <ul>
                {groups.map((group, i) => (
                            <li onClick={() => handleOnGroupClick(group)} key={i} className={activeGroupName === group.name ? "active" : ""}>
                                {group.name}
                            </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default Groups;