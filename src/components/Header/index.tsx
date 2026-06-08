import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import * as S from './styles'

import { useGetSearchUsersQuery } from '../../services/api'

import logo512 from '../../../assets/logo_512.png'
import logo256 from '../../../assets/logo_256.png'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')
    const [debouncedSearch, setDebouncedSearch] = useState('')
    const { data } = useGetSearchUsersQuery(
        debouncedSearch,
        {
            skip: debouncedSearch.length < 3
        }
    )
    const handleSearch = (e: React.SubmitEvent) => {
        e.preventDefault()

        navigate(`/search?q=${searchQuery}`)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(searchQuery)
        }, 300)

        return () => clearTimeout(timeout)
    }, [searchQuery])

    if (location.pathname === '/login' || location.pathname === '/register') {
        return (
            <S.HeaderContainer>
                <S.Logo to={"/"} $width="400px">
                    <img src={logo512} alt="Strix logo" />
                </S.Logo >
                <S.HeaderTitle>
                    Welcome to{' '}<span>Strix</span>! Your new way to share knowledge
                </S.HeaderTitle>
            </S.HeaderContainer>
        )
    } else {
        return (
            <>
                <S.Navbar>
                    <S.Logo to={"/"} $width="80px">
                        <img src={logo256} alt="Strix logo" />
                    </S.Logo >
                    <S.SearchContainer>
                        <form onSubmit={handleSearch}>
                            <input placeholder="Find new friends" onChange={(e) => setSearchQuery(e.target.value)}/>
                            <button type="submit">
                                <i className="bi bi-search" />
                            </button>
                        </form>
                        {data && (
                            <S.DropdownContainer>
                                {data.map((i) => (
                                    <S.DpdUser key={i.id} to={`/profile/${i.username}`}>
                                        <img src={i.profile_picture ?? 'https://placehold.co/60'} />
                                        <div>
                                            <h4>{i.full_name}</h4>
                                            <p>#{i.username}</p>
                                        </div>
                                    </S.DpdUser>
                                ))}
                            </S.DropdownContainer>
                        )}
                    </S.SearchContainer>
                    <S.NavLinksContainer>
                        <S.NavLink to={"/"}>
                            <i className="bi bi-house-door-fill"></i>
                            <h2>Home</h2>
                        </S.NavLink>
                        <S.NavLink to={"/my_profile"}>
                            <i className="bi bi-person-circle"></i>
                            <h2>Profile</h2>
                        </S.NavLink>
                    </S.NavLinksContainer>
                </S.Navbar>
            </>
        )
    }
}

export default Header