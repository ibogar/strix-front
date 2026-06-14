import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from 'yup'

import { useCreatePostMutation } from "../../../services/api"

import * as S from "./styles"
import { InputError } from "../styles"

const NewPost = () => {
    const navigate = useNavigate()
    const [ createPost ] = useCreatePostMutation()

    const form = useFormik({
        initialValues: {
            content: ''
        },
        validationSchema: Yup.object({
            content: Yup.string()
                .min(3, 'Your post is too short')
                .max(140, 'Your post is too long')
                .required('Content is required'),
        }),
        onSubmit: async (values) => {
            try {
                await createPost({
                    content: values.content,
                }).unwrap()
                navigate('/my_profile')
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
        <S.NewPostContainer onSubmit={form.handleSubmit}>
            <S.NewPostContent 
                name="content" 
                id="content" 
                value={form.values.content}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="What's on your mind today?" />

            {checkInputHasError('content') && (
                <InputError>
                    {form.errors.content}
                </InputError>
            )}
            <S.NewBtn type="submit">Post</S.NewBtn>
        </S.NewPostContainer>
    )
}

export default NewPost