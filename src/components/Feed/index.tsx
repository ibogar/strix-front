import NewPost from "../NewPost"
import Post from "../Post"
import * as S from "./styles"


const Feed = () => {
    return (
        <>
            <S.FeedContainer>
                <NewPost />
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