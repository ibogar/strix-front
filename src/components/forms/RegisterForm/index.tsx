import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as S from '../styles'
import { Btn } from '../../../styles'

const RegisterForm = () => {
    const [ showPassword, setShowPassword ] = useState(false)
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false)

    const form = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid e-mail')
                .required('E-mail is required'),
            username: Yup.string()
                .min(3, 'Username too short')
                .max(20, 'Username too long')
                .matches(
                    /^[a-zA-Z0-9_]+$/,
                    'Only letters, numbers and underscores'
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
        onSubmit: (values) => {
            console.log(values)
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
                <label htmlFor="">E-mail</label>
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
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    value={form.values.username}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                />
            </S.InputGroup>
            <S.InputGroup>
                <label htmlFor="">Password</label>
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
                <label htmlFor="">Confirm password</label>
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