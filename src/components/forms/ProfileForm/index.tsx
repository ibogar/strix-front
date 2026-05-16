import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import * as S from '../styles'

import { Btn } from '../../../styles'

const ProfileForm = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)

    const [showNewPassword, setShowNewPassword] = useState(false)

    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false)

    const form = useFormik({
        initialValues: {
            name: '',
            username: '',
            bio: '',
            image: null,
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

            image: Yup.mixed<File>()
                .test(
                    'fileSize',
                    'Image is too large',
                    (value) => {
                        if (!value) return true

                        return value.size <= 5 * 1024 * 1024
                    }
                )
                .test(
                    'fileFormat',
                    'Unsupported format',
                    (value) => {
                        if (!value) return true

                        return [
                            'image/jpeg',
                            'image/png',
                            'image/webp'
                        ].includes(value.type)
                    }
                ),

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
            console.log(values)
        }
        /* onSubmit: (values) => {
            const payload: Record<string, string> = {}

            Object.entries(values).forEach(([key, value]) => {
                if (value.trim() !== '') {
                    payload[key] = value
                }
            })

            console.log(payload)
        } */
    })

    const checkInputHasError = (fieldName: keyof typeof form.values) => {
        const isTouched = form.touched[fieldName]
        const isInvalid = form.errors[fieldName]

        return isTouched && isInvalid
    }

    return (
        <S.FormContainer onSubmit={form.handleSubmit}>
            <S.InputGroup>
                <S.Label htmlFor="name">
                    Name
                </S.Label>

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
                    <S.InputError>
                        {form.errors.name}
                    </S.InputError>
                )}
            </S.InputGroup>

            <S.InputGroup>
                <S.Label htmlFor="username">
                    Username
                </S.Label>

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
                    <S.InputError>
                        {form.errors.username}
                    </S.InputError>
                )}
            </S.InputGroup>

            <S.InputGroup>
                <S.Label htmlFor="bio">
                    Bio
                </S.Label>

                <textarea
                    id="bio"
                    name="bio"
                    placeholder="Tell people about yourself"
                    value={form.values.bio}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                />

                {checkInputHasError('bio') && (
                    <S.InputError>
                        {form.errors.bio}
                    </S.InputError>
                )}
            </S.InputGroup>

            <S.InputGroup>
                <S.Label htmlFor="image">
                    Profile image
                </S.Label>

                <S.FileInputLabel htmlFor="image">
                    Upload image
                </S.FileInputLabel>

                <S.Filename>
                    {form.values.image?.name || 'No file selected'}
                </S.Filename>

                <S.FileInput
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                        const file =
                            event.currentTarget.files?.[0]

                        form.setFieldValue('image', file)
                    }}
                />

                {checkInputHasError('image') && (
                    <S.InputError>
                        {form.errors.image}
                    </S.InputError>
                )}
            </S.InputGroup>

            <S.InputGroup>
                <S.Label htmlFor="currentPassword">
                    Current password
                </S.Label>

                <S.PasswordWrapper>
                    <input
                        id="currentPassword"
                        name="currentPassword"
                        type={
                            showCurrentPassword
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
                            setShowCurrentPassword(!showCurrentPassword)
                        }
                    >
                        <i
                            className={
                                showCurrentPassword
                                    ? 'bi bi-eye-slash-fill'
                                    : 'bi bi-eye-fill'
                            }
                        />
                    </S.TogglePasswordBtn>
                </S.PasswordWrapper>

                {checkInputHasError('currentPassword') && (
                    <S.InputError>
                        {form.errors.currentPassword}
                    </S.InputError>
                )}
            </S.InputGroup>

            <S.InputGroup>
                <S.Label htmlFor="newPassword">
                    New password
                </S.Label>

                <S.PasswordWrapper>
                    <input
                        id="newPassword"
                        name="newPassword"
                        type={
                            showNewPassword
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
                            setShowNewPassword(!showNewPassword)
                        }
                    >
                        <i
                            className={
                                showNewPassword
                                    ? 'bi bi-eye-slash-fill'
                                    : 'bi bi-eye-fill'
                            }
                        />
                    </S.TogglePasswordBtn>
                </S.PasswordWrapper>

                {checkInputHasError('newPassword') && (
                    <S.InputError>
                        {form.errors.newPassword}
                    </S.InputError>
                )}
            </S.InputGroup>

            <S.InputGroup>
                <S.Label htmlFor="confirmNewPassword">
                    Confirm new password
                </S.Label>

                <S.PasswordWrapper>
                    <input
                        id="confirmNewPassword"
                        name="confirmNewPassword"
                        type={
                            showConfirmPassword
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

                {checkInputHasError(
                    'confirmNewPassword'
                ) && (
                    <S.InputError>
                        {
                            form.errors
                                .confirmNewPassword
                        }
                    </S.InputError>
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
