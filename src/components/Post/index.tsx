import * as S from './styles'

const Post = () => {
    return (
        <S.PostContainer>
            <S.User>Iuri Guilherme Bogar Portilho</S.User>
            <S.Username>#ibogar</S.Username>
            <S.Content> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, soluta reiciendis accusamus animi officiis, vel optio ipsam possimus</S.Content>
            <S.Footer>
            <S.ActionsContainer>
                <S.ActionBtn className="like">
                    <i className="bi bi-heart"></i>
                    Like
                </S.ActionBtn>

                <S.ActionBtn className="comment">
                    <i className="bi bi-chat"></i>
                    Comment
                </S.ActionBtn>
            </S.ActionsContainer>

            <S.BtnContainer>
                <S.PostBtn className="edit">
                    Edit
                </S.PostBtn>

                <S.PostBtn className="delete">
                    Delete
                </S.PostBtn>
            </S.BtnContainer>
        </S.Footer>
        </S.PostContainer>
    )
}

export default Post