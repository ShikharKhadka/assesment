import { useMemo } from "react";

export const UserCard = ({ user, onClick, department }) => {
    const isActive = useMemo(() => {
        return Date.now() - new Date(user.lastLogin).getTime() < 30 * 24 * 60 * 60 * 1000;
    }, [user.lastLogin])

    return (
        <div onClick={onClick} style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '5px',
            backgroundColor: isActive ? '#e8f5e8' : '#f5f5f5'
        }}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>Department: {department?.name}</p>
            <p>Last Login: {new Date(user.lastLogin).toLocaleDateString()}</p>
            <span>{isActive ? 'Active' : 'Inactive'}</span>
        </div>
    );
};