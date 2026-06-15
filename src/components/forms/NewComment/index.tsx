import { useFormik } from "formik"
import * as Yup from 'yup'

import { useCreateCommentMutation } from "../../../services/api"

import * as S from "./styles"
import { InputError } from "../styles"

interface Props {
    id: number
}

const NewComment = ({ id }: Props) => {
    const [ createComment ] = useCreateCommentMutation()

    const form = useFormik({
        initialValues: {
            content: ''
        },
        validationSchema: Yup.object({
            content: Yup.string()
                .min(3, 'Your comment is too short')
                .max(140, 'Your comment is too long')
                .required('Content is required'),
        }),
        onSubmit: async (values) => {
            try {
                await createComment({
                    id: id,
                    content: values.content,
                }).unwrap()
                values.content = ''
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
        <S.NewCommentContainer onSubmit={form.handleSubmit}>
            <S.NewCommentContent 
                name="content" 
                id="content" 
                value={form.values.content}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="Want to add anything?" />

            {checkInputHasError('content') && (
                <InputError>
                    {form.errors.content}
                </InputError>
            )}
            <S.NewBtn type="submit">Comment</S.NewBtn>
        </S.NewCommentContainer>
    )
}

export default NewComment