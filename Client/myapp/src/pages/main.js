import { Button } from 'react-bootstrap';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
    const userPermissions = JSON.parse(sessionStorage.getItem('permissions'));
    const navigate = useNavigate();

    return (
        <div>
            <nav
                style={{
                    borderBottom: 'solid 1px',
                    paddingBottom: '1rem',
                }}
            >
                {userPermissions.includes('View Movies') && (
                    <Button
                        variant="primary"
                        onClick={() => {
                            navigate('/main/movies');
                        }}
                    >
                        Movies
                    </Button>
                )}{' '}
                <Button
                    variant="primary"
                    onClick={() => {
                        navigate('/main/subscriptions');
                    }}
                >
                    Subscriptions
                </Button>{' '}
                {loggedUser.userName === 'admin' && (
                    <Button
                        variant="primary"
                        onClick={() => {
                            navigate('/main/userManagment');
                        }}
                    >
                        Users Managment
                    </Button>
                )}{' '}
                <Button
                    variant="primary"
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Log Out
                </Button>{' '}
            </nav>
            <p> hello {loggedUser.userName}!</p>
            <Outlet />
        </div>
    );
};

export default Main;
