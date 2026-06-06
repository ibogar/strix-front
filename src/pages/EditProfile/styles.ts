import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const EditProfileContainer = styled.div`
    max-width: 720px;
    margin: 0 auto;
    padding-bottom: 64px;
`

export const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
`
export const ProfilePic = styled.img`
    width: 320px;
    box-shadow: 2px 2px 0 ${colors.darkSlateGrey}CC;
    border-radius: 50%;
    margin: 8px 0;
`

export const Name = styled.h3`
    font-size: 24px;
    font-weight: bold;
    padding: 8px;
`

export const Username = styled.p`
    font-size: 16px;
    padding: 6px;
    color: ${colors.jetBlack}CC;
`

export const ProfileDescription = styled.p`
    font-size: 20px;
    padding: 6px;
    font-family: ${fonts.highlightFont};
`