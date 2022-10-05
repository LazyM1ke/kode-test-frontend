import './groups.scss'

const groups = ['Все', 'Designers', 'Analysts', 'Managers', 'IOS', 'Android'];

function Groups() {
    return (
        <div className="groups">
            <ul>
                {groups.map((groupName,i) => (
                            <li key={i} className={groupName === groups[i] ? "active" : ""}>
                                {groupName}
                            </li>
                    )
                )}
            </ul>
        </div>
    );
}

export default Groups;