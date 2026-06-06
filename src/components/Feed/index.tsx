import { useLocation } from "react-router-dom"
import { PageTitle } from "../../styles"
import NewPost from "../NewPost"
import Post from "../Post"
import * as S from "./styles"

interface Props {
    fullName: string
}

const Feed = ({ fullName }: Props) => {
    const location = useLocation();
    const path = location.pathname;
    const userFirstName = fullName.trim().split(' ')[0]

    return (
        <>
            <S.FeedContainer>
                {path === '/' ? (
                    <NewPost />
                ) : (
                    <PageTitle>{userFirstName}'s profile</PageTitle>
                )}
                <Post />
            </S.FeedContainer>
        </>
    )
}

export default Feed