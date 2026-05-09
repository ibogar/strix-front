
import { useLocation } from "react-router-dom"
import * as S from "./styles"
import FollowUser from "../FollowUser";
import { PageTitle } from "../../styles";


const Follow = () => {
    const location = useLocation();

    return (
        <S.FollowContainer>
            {location.pathname === '/followers' ? (
                <PageTitle>Followers</PageTitle>
            ) : (
                <PageTitle>Following</PageTitle>
            )}

            <FollowUser />
            <FollowUser />
            <FollowUser />
            <FollowUser />
            <FollowUser />
            
        </S.FollowContainer>
    )
}

export default Follow