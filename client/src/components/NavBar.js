import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Image, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import login from "../assets/login.png";
import logout from "../assets/logout.png";
import basket from "../assets/basket.png";
import admin from "../assets/admin.png";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const {book} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setIsAuth(false)
        user.setUser({})
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <NavLink
                    to={SHOP_ROUTE}
                    className="fw-bold text-dark fs-3"
                    style={{textDecoration: "none"}}
                    onClick={() => {
                        book.setSelectedGenre({})
                        book.setSelectedAuthor({})
                    }}
                >
                    ТехноБУм
                </NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        {user.isAdmin &&
                            <Button
                                variant={"outline-dark"}
                                className="me-3 d-flex align-items-center"
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >
                                <Image src={admin} width={20} height={20} className="me-1" />Администрирование
                            </Button>
                        }
                        <Button
                            variant={"outline-dark"}
                            className="me-3 d-flex align-items-center"
                            onClick={() => navigate(BASKET_ROUTE)}
                        >
                            <Image src={basket} width={20} height={20} className="me-1" />Корзина
                        </Button>
                        <Button
                            variant={"outline-dark"}
                            className="d-flex align-items-center"
                            onClick={() => logOut()}
                        >
                            <Image src={logout} width={20} height={20} className="me-1" />Выход
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button
                            variant={"outline-dark"}
                            className="d-flex align-items-center"
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            <Image src={login} width={20} height={20} className="me-1" />Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;