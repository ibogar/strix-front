import { Link, useLocation } from 'react-router-dom'
import * as S from './styles'

const Form = () => {
    const location = useLocation();

    if (location.pathname === '/login'){
        return (
            <S.FormContainer>
                <S.InputGroup>
                    <label htmlFor="">E-mail</label>
                    <input type="email" name="" id="" />
                </S.InputGroup>
                <S.InputGroup>
                    <label htmlFor="">Password</label>
                    <input type="text" name="" id="" />
                </S.InputGroup>
                <S.FormBtn>Log in</S.FormBtn>
                <S.Register>
                    Don't have an account? 
                    <Link to={"/register"}>Register here.</Link>
                </S.Register>
            </S.FormContainer>
        )
    } else {
        return (
            <S.FormContainer>
                <S.InputGroup>
                    <label htmlFor="">E-mail</label>
                    <input type="email" name="" id="" />
                </S.InputGroup>
                <S.InputGroup>
                    <label htmlFor="">Password</label>
                    <input type="text" name="" id="" />
                </S.InputGroup>
                <S.InputGroup>
                    <label htmlFor="">Confirm password</label>
                    <input type="text" name="" id="" />
                </S.InputGroup>
                <S.FormBtn>Register</S.FormBtn>
            </S.FormContainer>
        )
    }
}

export default Form