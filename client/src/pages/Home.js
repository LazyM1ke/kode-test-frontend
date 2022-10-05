import "./Home.scss"
import Search from "../components/Search";
import Groups from "../components/Groups";
import User from "../components/User";

function Home() {
    return (
        <div className="home">
            <h1 className="title">Поиск</h1>
            <Search/>
            <Groups/>
            <div className="users">
                <User/>
                <User/>
            </div>
        </div>
    );
}

export default Home;
