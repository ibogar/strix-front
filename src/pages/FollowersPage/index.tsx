import Follow from '../../components/Follow'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { Content } from '../../styles'




const FollowersPage = () => {
    return (
        <div className="container">
            <Header />
            <Content>
                <Sidebar />
                <Follow />
            </Content>
        </div>
    )
}

export default FollowersPage