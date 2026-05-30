import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as S from '../styles'
import { Btn } from '../../../styles'
import { useLoginMutation } from '../../../services/api'

const LoginForm = () => {
    const navigate = useNavigate()
    const [ showPassword, setShowPassword ] = useState(false)
    const [ login ] = useLoginMutation()

    const form = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid e-mail')
                .required('E-mail is required'),
            password: Yup.string()
                .required('Password is required'),
        }),
        onSubmit: async (values) => {
            try {
                const response = await login({
                    email: values.email,
                    password: values.password
                }).unwrap()

                localStorage.setItem('accessToken', response.access)
                localStorage.setItem('refreshToken', response.refresh)

                navigate('/')
            } catch (error) {
                console.log(error)
            }
        }
    })

    const checkInputHasError = (fieldName: keyof typeof form.values) => {
        const isTouched = form.touched[fieldName]
        const isInvalid = form.errors[fieldName]

        return isTouched && isInvalid
    }

    return (
        <S.FormContainer onSubmit={form.handleSubmit}>
            <S.InputGroup>
                <S.Label htmlFor="email">E-mail</S.Label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                />
                {checkInputHasError('email') && (
                    <S.InputError>
                        {form.errors.email}
                    </S.InputError>
                )}
            </S.InputGroup>
            <S.InputGroup>
                <S.Label htmlFor="password">Password</S.Label>
                <S.PasswordWrapper>
                    <input 
                        type={
                            showPassword
                                ? 'text'
                                : 'password'
                        }
                        name="password"
                        id="password"
                        value={form.values.password}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    <S.TogglePasswordBtn
                        type="button"
                        onClick={() =>
                            setShowPassword(!showPassword)
                        }
                    >
                        <i
                            className={
                                showPassword
                                    ? 'bi bi-eye-slash-fill'
                                    : 'bi bi-eye-fill'
                            }
                        />
                    </S.TogglePasswordBtn>
                </S.PasswordWrapper>
                {checkInputHasError('password') && (
                    <S.InputError>
                        {form.errors.password}
                    </S.InputError>
                )}
            </S.InputGroup>
            <Btn 
            className="positive" 
            type="submit"
            >
                Log in
            </Btn>
            <S.Register>
                Don't have an account? 
                <Link to={"/register"}>Register here.</Link>
            </S.Register>
        </S.FormContainer>
    )
}

export default LoginForm