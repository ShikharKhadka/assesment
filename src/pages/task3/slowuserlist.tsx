import { useEffect, useMemo, useState } from "react";
import { UserCard } from "./usercard";
import { debounce } from "lodash";


export const SlowUserList = ({ users, departments, onUserSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [debouncedSearch, setDebouncedSearch] = useState('');


    const filteredUsers = useMemo(() => {
        return users.filter(user => {
            const matchesSearch = user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
                user.email.toLowerCase().includes(debouncedSearch.toLowerCase());
            const matchesDepartment = selectedDepartment === 'all' ||
                user.department === selectedDepartment;
            return matchesSearch && matchesDepartment;
        });
    }, [debouncedSearch, selectedDepartment, users])


    const sortedUsers =
        useMemo(() => {
            return filteredUsers.sort((a, b) => {
                const dateA = new Date(a.lastLogin).getTime();
                const dateB = new Date(b.lastLogin).getTime();
                return dateB - dateA;
            });
        }, [filteredUsers])


    useEffect(() => {
        const handler = debounce((value: string) => {
            setDebouncedSearch(value);
        }, 500);

        handler(searchTerm);

        return () => {
            handler.cancel();
        };
    }, [searchTerm]);




    return (
        <div>
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search users..."
            />

            <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
            >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>
                        {dept.name}
                    </option>
                ))}
            </select>

            <div>
                {sortedUsers.map(user => (
                    <UserCard
                        key={user.id}
                        user={user}
                        onClick={() => onUserSelect(user)}
                        department={departments.find(d => d.id === user.department)}
                    />
                ))}
            </div>
        </div>
    );
};