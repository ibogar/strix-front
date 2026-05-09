import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Feed from '../../components/Feed'

import { Content } from './styles'



const Profile = () => {
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

export default Profile