import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as S from '../styles'
import { Btn } from '../../../styles'
import { useRegisterMutation } from '../../../services/api'

const RegisterForm = () => {
    const navigate = useNavigate()
    const [ showPassword, setShowPassword ] = useState(false)
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false)
    const [ register ] = useRegisterMutation()

    const form = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(3, 'Name too short')
                .max(50, 'Name too long')
                .matches(
                    /^[a-zA-Z ]+$/,
                    'Only letters allowed'
                )
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid e-mail')
                .required('E-mail is required'),
            username: Yup.string()
                .min(3, 'Username too short')
                .max(30, 'Username too long')
                .matches(
                    /^[a-z0-9_]+$/,
                    'Only lowercase letters, numbers and underscores'
                )
                .required('Username is required'),
            password: Yup.string()
                .min(8, 'Password must have at least 8 characters')
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d).+$/,
                    'Password must contain letters and numbers'
                )
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf(
                    [Yup.ref('password')],
                    'Passwords must match'
                )
                .required('Please confirm your password'),
        }),
        onSubmit: async (values) => {
            try {
                await register({
                    full_name: values.fullName.trim(),
                    email: values.email.trim().toLowerCase(),
                    username: values.username.trim(),
                    password: values.password.trim()
                }).unwrap()

                navigate('/login')
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
                <S.Label htmlFor="fullName">Name</S.Label>
                <input 
                    type="text" 
                    name="fullName" 
                    id="fullName" 
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder="Your full name here"
                />
                {checkInputHasError('fullName') && (
                    <S.InputError>
                        {form.errors.fullName}
                    </S.InputError>
                )}
            </S.InputGroup>
            <S.InputGroup>
                <S.Label htmlFor="email">E-mail</S.Label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder="example@example.com"
                />
                {checkInputHasError('email') && (
                    <S.InputError>
                        {form.errors.email}
                    </S.InputError>
                )}
            </S.InputGroup>
            <S.InputGroup>
                <S.Label htmlFor="username">Username</S.Label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    value={form.values.username}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    placeholder="#example"
                />
                {checkInputHasError('username') && (
                    <S.InputError>
                        {form.errors.username}
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
            <S.InputGroup>
                <S.Label htmlFor="confirmPassword">Confirm password</S.Label>
                <S.PasswordWrapper>
                    <input 
                        type={
                            showConfirmPassword
                                ? 'text'
                                : 'password'
                        }
                        name="confirmPassword"
                        id="confirmPassword"
                        value={form.values.confirmPassword}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    <S.TogglePasswordBtn
                        type="button"
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                    >
                        <i
                            className={
                                showConfirmPassword
                                    ? 'bi bi-eye-slash-fill'
                                    : 'bi bi-eye-fill'
                            }
                        />
                    </S.TogglePasswordBtn>
                </S.PasswordWrapper>
                {checkInputHasError('confirmPassword') && (
                    <S.InputError>
                        {form.errors.confirmPassword}
                    </S.InputError>
                )}
            </S.InputGroup>
            <Btn 
            className="positive" 
            type="submit"
            >
                Register
            </Btn>
        </S.FormContainer>
    )
}

export default RegisterForm