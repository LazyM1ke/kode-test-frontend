import Groups from "./Groups";
import Search from "./Search";

function TopAppBar() {
    return (
        <div>
            <h1 className="title">Поиск</h1>
            <Search/>
            <Groups/>
        </div>
    );
}

export default TopAppBar;
