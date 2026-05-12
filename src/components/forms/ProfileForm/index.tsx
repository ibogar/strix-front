import { useFormik } from 'formik'
import * as Yup from 'yup'

import passwordToggle from '../../../utils/passwordToggle'

import * as S from '../styles'

import { Btn } from '../../../styles'

const ProfileForm = () => {
    const form = useFormik({
        initialValues: {
            name: '',
            username: '',
            bio: '',
            image: '',
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Name is too short')
                .max(60, 'Name is too long'),

            username: Yup.string()
                .min(3, 'Username too short')
                .max(20, 'Username too long')
                .matches(
                    /^[a-zA-Z0-9_]+$/,
                    'Only letters, numbers and underscores'
                ),

            bio: Yup.string()
                .max(160, 'Bio must have at most 160 characters'),

            image: Yup.string()
                .url('Insert a valid URL'),

            currentPassword: Yup.string()
                .when('newPassword', {
                    is: (value: string) => value?.length > 0,
                    then: (schema) =>
                        schema.required(
                            'Current password is required'
                        ),
                }),

            newPassword: Yup.string()
                .min(
                    8,
                    'Password must have at least 8 characters'
                )
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d).+$/,
                    'Password must contain letters and numbers'
                ),

            confirmNewPassword: Yup.string()
                .when('newPassword', {
                    is: (value: string) => value?.length > 0,
                    then: (schema) =>
                        schema
                            .required(
                                'Please confirm your new password'
                            )
                            .oneOf(
                                [Yup.ref('newPassword')],
                                'Passwords must match'
                            ),
                }),
        }),

        onSubmit: (values) => {
            const payload: Record<string, string> = {}

            Object.entries(values).forEach(([key, value]) => {
                if (value.trim() !== '') {
                    payload[key] = value
                }
            })

            console.log(payload)
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
                <label htmlFor="name">
                    Name
                </label>

                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.values.name}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                />

                {checkInputHasError('name') && (
                    <small>
                        {form.errors.name}
                    </small>
                )}
            </S.InputGroup>

            <S.InputGroup>
                <label htmlFor="username">
                    Username
                </label>

                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="#username"
                    value={form.values.username}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                />

                {checkInputHasError('username') && (
                    <small>
                        {form.errors.username}
                    </small>
                )}
            </S.InputGroup>

            <S.InputGroup>
                <label htmlFor="bio">
                    Bio
                </label>

                <textarea
                    id="bio"
                    name="bio"
                    placeholder="Tell people about yourself"
                    value={form.values.bio}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                />

                {checkInputHasError('bio') && (
                    <small>
                        {form.errors.bio}
                    </small>
                )}
            </S.InputGroup>

            <S.InputGroup>
                <label htmlFor="image">
                    Profile image URL
                </label>

                <input
                    id="image"
                    name="image"
                    type="text"
                    placeholder="https://..."
                    value={form.values.image}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                />

                {checkInputHasError('image') && (
                    <small>
                        {form.errors.image}
                    </small>
                )}
            </S.InputGroup>

            <S.InputGroup>
                <label htmlFor="currentPassword">
                    Current password
                </label>

                <input
                    id="currentPassword"
                    name="currentPassword"
                    type={
                        showPassword.current
                            ? 'text'
                            : 'password'
                    }
                    placeholder="Current password"
                    value={form.values.currentPassword}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                />

                <S.TogglePasswordBtn
                    type="button"
                    onClick={() =>
                        togglePasswordVisibility('current')
                    }
                >
                    <i
                        className={
                            showPassword.current
                                ? 'bi bi-eye-slash-fill'
                                : 'bi bi-eye-fill'
                        }
                    />
                </S.TogglePasswordBtn>

                {checkInputHasError('currentPassword') && (
                    <small>
                        {form.errors.currentPassword}
                    </small>
                )}
            </S.InputGroup>

            <S.InputGroup>
                <label htmlFor="newPassword">
                    New password
                </label>

                <input
                    id="newPassword"
                    name="newPassword"
                    type={
                        showPassword.new
                            ? 'text'
                            : 'password'
                    }
                    placeholder="New password"
                    value={form.values.newPassword}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                />

                <S.TogglePasswordBtn
                    type="button"
                    onClick={() =>
                        togglePasswordVisibility('new')
                    }
                >
                    <i
                        className={
                            showPassword.new
                                ? 'bi bi-eye-slash-fill'
                                : 'bi bi-eye-fill'
                        }
                    />
                </S.TogglePasswordBtn>

                {checkInputHasError('newPassword') && (
                    <small>
                        {form.errors.newPassword}
                    </small>
                )}
            </S.InputGroup>

            <S.InputGroup>
                <label htmlFor="confirmNewPassword">
                    Confirm new password
                </label>

                <input
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    type={
                        showPassword.confirm
                            ? 'text'
                            : 'password'
                    }
                    placeholder="Confirm new password"
                    value={form.values.confirmNewPassword}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                />

                <S.TogglePasswordBtn
                    type="button"
                    onClick={() =>
                        togglePasswordVisibility('confirm')
                    }
                >
                    <i
                        className={
                            showPassword.confirm
                                ? 'bi bi-eye-slash-fill'
                                : 'bi bi-eye-fill'
                        }
                    />
                </S.TogglePasswordBtn>

                {checkInputHasError(
                    'confirmNewPassword'
                ) && (
                    <small>
                        {
                            form.errors
                                .confirmNewPassword
                        }
                    </small>
                )}
            </S.InputGroup>

            <S.ButtonContainer>
                <Btn
                    className="positive"
                    type="submit"
                >
                    Save changes
                </Btn>

                <Btn
                    className="danger"
                    type="button"
                >
                    Cancel
                </Btn>
            </S.ButtonContainer>
        </S.FormContainer>
    )
}

export default ProfileForm
