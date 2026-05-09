import * as P from "../Post/styles"
import { NewBtn } from "./styles"

const NewPost = () => {
    return (
        <P.PostContainer>
            <P.Content placeholder="What's on your mind today?"></P.Content>
            <NewBtn>Post</NewBtn>
        </P.PostContainer>
    )
}

export default NewPost