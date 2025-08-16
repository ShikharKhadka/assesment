import { Box, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import type React from 'react';
import { useContext, useState, type ChangeEvent, type ReactNode } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeDataContext } from '../state/theme/theme_context';
// import type { ReactNode } from 'react';


export interface DataTableI {
    column: ColumnI[],
    rows: any[],
    page?: number;
    count?: number;
    onPageChange?: (event: ChangeEvent<unknown>, page: number) => void;
    onSort?: (key: string, direction: boolean) => void;
    render?: (row) => void
    children?: ReactNode;
    showSort?: boolean;
}

export interface ColumnI {
    key?: string;
    label: string;
    sortable: boolean;
    // action: ReactNode;
}

export interface UserI {
    name: string;
    email: string;
    role: string;
}

export const DataTable: React.FC<DataTableI> = ({ column, rows, page, count, onPageChange, onSort, render, children, showSort = true }) => {

    const [isDesc, setDesc] = useState(false);
    const [sortKey, setSortKey] = useState("");
    const themeContext = useContext(ThemeDataContext);

    const onSortChange = (key: string) => {
        setSortKey(key);
        if (key == sortKey) {
            setDesc(!isDesc);
        }
    };

    return (
        <Box style={{ width: '100%' }}>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: '100px' }}>
                    <TableHead sx={{
                    }}>
                        <TableRow>
                            {column.map((e) => {
                                if (e.sortable) {
                                    return <TableCell key={e.key}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            {e.label}
                                            {showSort && <Box onClick={() => {
                                                onSortChange(e.key!)
                                                onSort!(e.key!, isDesc)
                                            }}>
                                                {sortKey == e.key ?
                                                    isDesc ?
                                                        <ArrowUpwardIcon fontSize="small" color="primary" sx={{ cursor: "pointer" }} /> :
                                                        <ArrowDownwardIcon
                                                            fontSize="small" color="primary" sx={{ cursor: "pointer" }} /> : <ArrowDownwardIcon
                                                        fontSize="small" color="primary" sx={{ cursor: "pointer" }} />
                                                }
                                            </Box>}
                                        </Box>
                                    </TableCell>
                                }
                                return <TableCell key={e.key}>{e.label}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>

                    <TableBody sx={{
                        overflowX: "auto",     // horizontal scroll
                    }}>
                        {!children ? rows.map((e) => {
                            return <TableRow key={e.email}>
                                <TableCell sx={{ minWidth: 100 }}>{e.name}</TableCell>
                                <TableCell sx={{ minWidth: 100 }}>{e.email}</TableCell>
                                <TableCell sx={{ minWidth: 100 }}>{e.role}</TableCell>
                                <TableCell sx={{ minWidth: 100 }}>
                                    <Box sx={{ display: 'flex', gap: "12px", minWidth: 100 }}>
                                        <EditIcon fontSize='small' color='primary'
                                            onClick={() => {
                                                render!(e);
                                            }} />
                                        <VisibilityIcon fontSize='small' color='primary' />
                                        {themeContext?.theme == 'client-a' && <DeleteIcon fontSize='small' color='primary' />}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        }) : children}
                    </TableBody>
                </Table>
            </TableContainer>
            {!children && themeContext?.theme == 'client-a' && <Box sx={{ display: 'flex', justifyContent: "flex-end", marginTop: "20px" }}>
                <Pagination count={count} onChange={onPageChange} page={page} />
            </Box>}
        </Box>
    )
}
