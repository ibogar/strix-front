import { useLocation } from "react-router-dom"
import { PageTitle } from "../../styles"
import NewPost from "../forms/NewPost"
import Post from "../Post"
import * as S from "./styles"
import type { GetPostsResponse } from "../../types/apiResponses"

interface Props {
    fullName: string
    posts: GetPostsResponse[] | undefined
}

const Feed = ({ fullName, posts }: Props) => {
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

                {posts?.map((post) => (
                    <Post 
                        key={post.id}
                        id={post.id}
                        fullName={post.author.full_name}
                        username={post.author.username}
                        content={post.content}
                        profilePic={post.author.profile_picture}
                        isLiked={post.is_liked}
                        commentCount={post.comment_count}
                    />
                ))}
            </S.FeedContainer>
        </>
    )
}

export default Feed