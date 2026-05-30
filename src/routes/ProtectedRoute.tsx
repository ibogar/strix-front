import { Navigate } from 'react-router-dom'
import { useGetLoggedUserQuery } from '../services/api'

type Props = {
    children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
    const token = localStorage.getItem('accessToken')
    const { isError } = useGetLoggedUserQuery()

    if (!token) {
        return <Navigate to="/login" />
    }

    if (isError) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        return <Navigate to="/login" />
    }

    return <>{children}</>
}

export default ProtectedRoute