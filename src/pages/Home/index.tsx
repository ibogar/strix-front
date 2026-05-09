import Feed from '../../components/Feed'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { Content } from '../../styles'




const Home = () => {
    return (
        <div className="container">
            <Header />
            <Content>
                <Sidebar />
                <Feed />
            </Content>
        </div>
    )
}

export default Home