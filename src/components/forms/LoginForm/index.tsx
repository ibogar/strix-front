import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import passwordToggle from '../../../utils/passwordToggle'

import * as S from '../styles'
import { Btn } from '../../../styles'

const LoginForm = () => {

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
                .min(8, 'Password must have at least 8 characters')
                .required('Password is required'),
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

    const { showPassword, togglePasswordVisibility } = passwordToggle()

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
            </S.InputGroup>
            <S.InputGroup>
                <label htmlFor="">Password</label>
                <input 
                    type="password"
                    name="password"
                    id="password"
                    value={form.values.password}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                />
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