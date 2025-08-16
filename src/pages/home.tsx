import { useCallback, useContext, useEffect, useState, type ChangeEvent } from "react";
import { DataTable, type UserI } from "../component/datatable"
import { users } from "./constant"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import CModal from "../component/model";
import { UserEditForm } from "../component/form/usereditform";
import CTextField from "../component/formfields/textfield";
import { ThemeDataContext } from "../state/theme/theme_context";


export const Home = () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<UserI[]>([]);
    const [rowData, setRowData] = useState<UserI | null>(null);
    const [dialog, setDialogState] = useState({
        editOpen: false,
        viewOpen: false,
    });
    const [filteredUsers, setFilteredUsers] = useState<UserI[]>(data);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


    const themeContext = useContext(ThemeDataContext);
    const onSort = (key: string, direction: boolean) => {
        const dataList = data.sort((a, b) => {
            if (a[key] < b[key]) {
                return direction ? 1 : -1;
            }
            if (a[key] > b[key]) {
                return direction ? -1 : 1;
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

    const onPageChange = ( page: number) => {
        setPage(page);
        const tableList = users.slice((((page - 1) * 10)), page * 10);
        setData(tableList);
    }

    const onSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (value) {
            const filtered = data.filter(f =>
                f.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredUsers(filtered);
        } else {
            setFilteredUsers(data);
        }
    }, [data]);



    useEffect(() => {
        getUsers.then((e) => {
            const userList = e as UserI[];
            const tableList = userList.slice((((page - 1) * 10)), page * 10);
            setData(tableList);
            setFilteredUsers(tableList);
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
        <Box >
            {themeContext?.theme == 'client-a' ?
                <Box sx={{ width: isMobile ? '80%' : '30%',paddingBottom: 4 }}>
                    <CTextField onchange={onSearch} placeholder="Search" />
                </Box>
                : <></>}
            <DataTable
                column={[
                    { key: 'name', label: 'Full Name', sortable: true },
                    { key: 'email', label: 'Email', sortable: true },
                    { key: 'role', label: 'Role', sortable: false },
                    { key: 'actions', label: 'Actions', sortable: false }
                ]}
                rows={filteredUsers}
                count={10}
                page={page}
                onSort={onSort}
                onPageChange={(_,page)=>{onPageChange(page)}}
                render={(row) => {
                    const rowData = row as UserI;
                    setRowData(rowData);
                    setDialogState({ ...dialog, editOpen: true });
                }}
            />
            {dialog.editOpen && <CModal size="md" title="Edit Users" isOpen={dialog.editOpen} onClose={() => setDialogState({ ...dialog, editOpen: false })} closeOnOverlayClick={false}>
                <UserEditForm row={rowData!} />
            </CModal>}
        </Box >
    )
}
