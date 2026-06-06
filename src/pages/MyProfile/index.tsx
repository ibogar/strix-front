import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Feed from '../../components/Feed'

import { Content } from '../../styles'
import { useGetLoggedUserQuery, useGetUserByUsernameQuery } from '../../services/api'





const MyProfile = () => {
    const { data: loggedUser } = useGetLoggedUserQuery()
    const { data: userByUsername } = useGetUserByUsernameQuery(loggedUser?.username ?? '',
        {
            skip: !loggedUser
        })
    const fullName = userByUsername?.full_name ?? ''

    return (
        <div className="container">
            <Header />
            <Content>
                <Sidebar />
                <Feed fullName={fullName} />
            </Content>
        </div>
    ) 
}

export default MyProfile