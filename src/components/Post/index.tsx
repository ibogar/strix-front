import { useLocation } from 'react-router-dom'
import { Btn } from '../../styles'
import * as S from './styles'
import { useDeletePostMutation, useGetCommentsQuery, useLikePostMutation, useUnlikePostMutation } from '../../services/api'
import { useState } from 'react'
import NewComment from '../forms/NewComment'

interface Props {
    id: number
    fullName: string
    username: string
    content: string
    profilePic: string
    isLiked: boolean
    commentCount: number
}

const Post = ({id, fullName, username, content, profilePic, isLiked, commentCount}: Props) => {
    const location = useLocation()
    const path = location.pathname
    const [ showComments, setShowComments ] = useState(false)
    const [ deletePost ] = useDeletePostMutation()
    const [ likePost ] = useLikePostMutation()
    const [ unlikePost ] = useUnlikePostMutation()
    const { data: comments } = useGetCommentsQuery(id)
    return (
        <S.PostContainer>
            <S.UserContainer>
                <S.UserImg 
                    src={profilePic ? 
                        `http://localhost:8000${profilePic}` : 
                        "https://placehold.co/64"} 
                    alt="User photo" 
                />
                <S.UserLink to={`/profile/${username}`}>
                    <S.User>{fullName}</S.User>
                    <S.Username>#{username}</S.Username>
                </S.UserLink>
            </S.UserContainer>
            <S.Content value={content} readOnly></S.Content>
            <S.Footer>
                <S.ActionsContainer>
                    {isLiked ? (
                        <S.ActionBtn onClick={() => unlikePost(id)} className="like">
                            <i className="bi bi-heart-fill"></i>
                            Unlike
                        </S.ActionBtn>
                    ) : (
                        <S.ActionBtn onClick={() => likePost(id)} className="like">
                            <i className="bi bi-heart"></i>
                            Like
                        </S.ActionBtn>
                    )}

                    <S.ActionBtn onClick={() => setShowComments(!showComments)} className="comment">
                        {showComments ? 
                         <i className="bi bi-chat-fill"></i> :
                         <i className="bi bi-chat"></i>
                        } 
                        Comment {commentCount}
                    </S.ActionBtn>
                </S.ActionsContainer>

                <S.BtnContainer>
                    {path === '/my_profile' && 
                        <Btn 
                            onClick={() => deletePost(id)} 
                            className="danger"
                        >
                            Delete
                        </Btn>
                    }
                </S.BtnContainer>
            </S.Footer>
            {showComments && 
                <S.AllCommentsContainer>
                    <NewComment id={id} />
                    {comments?.map((comment) =>(
                        <S.CommentContainer key={comment.id}>
                            <S.UserContainer>
                                <S.UserImg 
                                    src={comment.author.profile_picture ? 
                                        `http://localhost:8000${comment.author.profile_picture}` : 
                                        "https://placehold.co/64"} 
                                    alt="User photo" 
                                />
                                <S.UserLink to={`/profile/${comment.author.username}`}>
                                    <S.User>{comment.author.full_name}</S.User>
                                    <S.Username>#{comment.author.username}</S.Username>
                                </S.UserLink>
                            </S.UserContainer>
                            <S.Content value={comment.content} readOnly></S.Content>
                        </S.CommentContainer>
                    ))}
                </S.AllCommentsContainer>
            }
        </S.PostContainer>
    )
}

export default Post