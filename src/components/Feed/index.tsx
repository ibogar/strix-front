import { useLocation } from "react-router-dom"
import { PageTitle } from "../../styles"
import NewPost from "../NewPost"
import Post from "../Post"
import * as S from "./styles"


const Feed = () => {
    const location = useLocation();

    return (
        <>
            <S.FeedContainer>
                {location.pathname === '/profile' ? (
                    <PageTitle>Iuri's profile</PageTitle>
                ): (
                    <NewPost />
                )}
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </S.FeedContainer>
        </>
    )
}

export default Feed