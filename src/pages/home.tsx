import { useEffect, useState } from "react";
import { DataTable, type UserI } from "../component/datatable"
import { users } from "./constant"

export const Home = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState<UserI[]>([]);
    // const [table]

    // const onSort = (key: string, direction: boolean) => {

    // }
    const getUsers = new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 1000);
    });


    useEffect(() => {
        getUsers.then((e: UserI[]) => {
            setData(e);
        }).catch((_) => {
            setData([]);
        })
    }, [])



    const tableList = users.slice((((page - 1) * 10)), page * 10); //default 10

    return (
        <DataTable
            column={[
                { key: 'name', label: 'Full Name', sortable: true },
                { key: 'email', label: 'Email', sortable: true },
                { key: 'role', label: 'Role', sortable: false },
                { key: 'actions', label: 'Actions', sortable: false }
            ]}
            rows={tableList}
            count={10}
            page={page}
            onSort={onSort}
            onPageChange={(_, page) => setPage(page)}
        />
    )
}
