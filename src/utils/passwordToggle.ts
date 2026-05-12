import { useState } from 'react'

const passwordToggle = () => {
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false
    })

    const togglePasswordVisibility = (
        field: 'current' | 'new' | 'confirm'
    ) => {
        setShowPassword((prev) => ({
            ...prev,
            [field]: !prev[field]
        }))
    }

    return {
        showPassword,
        togglePasswordVisibility
    }
}

export default passwordToggle