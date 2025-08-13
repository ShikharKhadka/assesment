import { Box, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import type React from 'react';
import { useState, type ChangeEvent } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import type { ReactNode } from 'react';


export interface DataTableI {
    column: ColumnI[],
    rows: UserI[],
    page: number;
    count: number;
    onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
    onSort: (key: string, direction: boolean) => void;
}

export interface ColumnI {
    key: string;
    label: string;
    sortable: boolean;
    // action: ReactNode;
}

export interface UserI {
    name: string;
    email: string;
    role: string;
}

export const DataTable: React.FC<DataTableI> = ({ column, rows, page, count, onPageChange, onSort }) => {

    const [isDesc, setDesc] = useState(false);
    const [sortKey, setSortKey] = useState("");

    const onSortChange = (key: string) => {
        setSortKey(key);
        if (key == sortKey) {
            setDesc(!isDesc);
        }
    };

    return (
        <div style={{ width: "700px" }}>
            <TableContainer component={Paper} sx={{}}>
                <Table>
                    <TableHead sx={{
                        overflowX: "auto",     // horizontal scroll
                    }}>
                        <TableRow>
                            {column.map((e) => {
                                if (e.sortable) {
                                    return <TableCell key={e.key}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            {e.label}
                                            <Box onClick={() => {
                                                onSortChange(e.key)
                                                onSort(e.key, isDesc)
                                            }}>
                                                {sortKey == e.key ?
                                                    isDesc ?
                                                        <ArrowUpwardIcon fontSize="small" color="primary" sx={{ cursor: "pointer" }} /> :
                                                        <ArrowDownwardIcon
                                                            fontSize="small" color="primary" sx={{ cursor: "pointer" }} /> : <ArrowDownwardIcon
                                                        fontSize="small" color="primary" sx={{ cursor: "pointer" }} />
                                                }
                                            </Box>
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
                        {rows.map((e) => {
                            return <TableRow key={e.email}>
                                <TableCell sx={{}}>{e.name}</TableCell>
                                <TableCell sx={{}}>{e.role}</TableCell>
                                <TableCell sx={{}}>{e.email}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box>
                <Pagination count={count} onChange={onPageChange} page={page} />
            </Box>
        </div>
    )
}
