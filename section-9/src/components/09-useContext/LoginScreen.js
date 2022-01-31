import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const { setUser } = useContext(UserContext);

    const CustomButtom = ({ text, value }) => (
        <button
            className="btn btn-primary"
            onClick={() => setUser(value)}
        >
            {text}
        </button>
    );

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />

            <CustomButtom
                text="Login"
                value={{
                    id: 123,
                    name: 'Juan Aira'
                }}
            />
        </div>
    )
}
