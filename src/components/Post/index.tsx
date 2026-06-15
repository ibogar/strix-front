import { useLocation } from 'react-router-dom'
import { Btn } from '../../styles'
import * as S from './styles'
import { useDeletePostMutation, useLikePostMutation, useUnlikePostMutation } from '../../services/api'

interface Props {
    id: number
    fullName: string
    username: string
    content: string
    profilePic: string
    isLiked: boolean
}

const Post = ({id, fullName, username, content, profilePic, isLiked}: Props) => {
    const location = useLocation()
    const path = location.pathname
    const [ deletePost ] = useDeletePostMutation()
    const [ likePost ] = useLikePostMutation()
    const [ unlikePost ] = useUnlikePostMutation()

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

                    <S.ActionBtn className="comment">
                        <i className="bi bi-chat"></i>
                        Comment
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
        </S.PostContainer>
    )
}

export default Post