import { useSearchParams } from "react-router-dom"
import { PageTitle } from "../../styles"
import { useGetSearchUsersQuery } from "../../services/api"
import UserCard from "../UserCard"


const SearchResults = () => {
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get('q')
    const { data } = useGetSearchUsersQuery(searchQuery!)

    return (
        <>
            <PageTitle>Search results</PageTitle>
            {!data || data.length === 0 ? (
                <div>Didn't find any user</div>
            ) : (
                data.map((i) => (
                <UserCard 
                    key={i.id}
                    profilePic={i.profile_picture} 
                    fullName={i.full_name} 
                    username={i.username}
                    isFollowing={i.is_following}
                />
            )))}
        </>
    )
}

export default SearchResults