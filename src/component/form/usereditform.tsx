import { Box, Button } from "@mui/material"
import CTextField from "../formfields/textfield"
import * as z from "zod";
import { useForm, } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { UserI } from "../datatable";


const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.email().min(1),
    role: z.string().min(1, { message: "Name is required" }),
});

type userType = z.infer<typeof schema>;

export const UserEditForm = ({ row }: { row: UserI }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<userType>({
        resolver: zodResolver(schema),
    });

    return (
        <form noValidate onSubmit={handleSubmit((success) => { console.log(success) }, (error) => { console.log(error) })}>
            <Box>
                <Box sx={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                    <Box sx={{ flex: 1 }}>
                        <CTextField  <userType>
                            value={row.name ?? ""}
                            register={register}
                            onchange={() => { }}
                            placeholder="Name"
                            validationName="name"
                            errors={errors.name} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <CTextField <userType>
                            value={row.email ?? ""}
                            register={register} onchange={() => { }} placeholder="Email" validationName="email" errors={errors.email} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Box sx={{ flex: 1 }}>
                        <CTextField <userType>
                            value={row.role ?? ""}
                            register={register} onchange={() => { }} placeholder="role" validationName="role" errors={errors.role} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                position: "absolute", bottom: "8px", left: "50%",
                transform: "translate(-50%, -50%)", display: "flex",
                gap: 2
            }}>
                <Button type="submit" variant='contained' sx={{ textTransform: "none" }}>Submit</Button>
            </Box>
        </form>
    )
}
