import { useEffect, useState, type ChangeEvent } from "react";
import { DataTable, type UserI } from "../component/datatable"
import { users } from "./constant"
import { Box } from "@mui/material";
import CModal from "../component/model";
import { UserEditForm } from "../component/form/usereditform";


export const Home = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<UserI[]>([]);


    const onSort = (key: string, direction: boolean) => {
        const dataList = data.sort((a, b) => {
            if (a[key] < b[key]) {
                return direction ? 1 : -1; // flipped
            }
            if (a[key] > b[key]) {
                return direction ? -1 : 1; // flipped
            }
            return 0;
        });

        setData(dataList);
    };
    const getUsers = new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 1000);
    });

    const onPageChange = (e: ChangeEvent<unknown>, page: number) => {
        setPage(page);
        const tableList = users.slice((((page - 1) * 10)), page * 10); //default 10
        setData(tableList);
    }


    useEffect(() => {
        getUsers.then((e) => {
            const userList = e as UserI[];
            const tableList = userList.slice((((page - 1) * 10)), page * 10);
            setData(tableList);
        }).catch((_) => {
            setData([]);
        }).finally(() => {
            setLoading(false);
        })
    }, [])


    if (loading) {
        return <div>Loading..........</div>
    }

    return (
        <Box>
            <DataTable
                column={[
                    { key: 'name', label: 'Full Name', sortable: true },
                    { key: 'email', label: 'Email', sortable: true },
                    { key: 'role', label: 'Role', sortable: false },
                    { key: 'actions', label: 'Actions', sortable: false }
                ]}
                rows={data}
                count={10}
                page={page}
                onSort={onSort}
                onPageChange={onPageChange}
            />
            <CModal>
                <UserEditForm />
            </CModal>
        </Box>

    )
}
