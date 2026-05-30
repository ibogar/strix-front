import { Navigate } from 'react-router-dom'

type Props = {
    children: React.ReactNode
}

const PublicRoute = ({ children }: Props) => {
    const token = localStorage.getItem('accessToken')

    if (token) {
        return <Navigate to="/" />
    }

    return <>{children}</>
}

export default PublicRoute