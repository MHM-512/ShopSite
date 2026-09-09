import { Box, Button, TextField } from "@mui/material";
import { useController, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"


export default function SignIn() {
    const navigate = useNavigate(); //
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        const dataFormInformation = data;
        localStorage.setItem("userData", JSON.stringify(data));
        console.log(dataFormInformation);
        // navigate("/profile");
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                marginTop: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'column',
                flexDirection: 'column',
                gap: '20px'
            }}
        >
            <TextField
                {...register("firstName", { required: "The name exists" })}
                label="First Name"
                variant="filled"
                sx={{ width: '500px' }}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
            />

            <TextField
                {...register("lastName", { required: "The last name exists" })}
                label="Last Name"
                variant="filled"
                sx={{ width: '500px' }}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
            />

            <TextField
                {...register("email", { required: "The Email exists" })}
                label="Email"
                variant="filled"
                sx={{ width: '500px' }}
                error={!!errors.email}
                helperText={errors.email?.message}
            />

            <TextField
                {...register("password", {
                    required: "The Password exists",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long."
                    }
                })}
                label="Password"
                type="password"
                variant="filled"
                sx={{ width: '500px' }}
                error={!!errors.password}
                helperText={errors.password?.message || ""}
            />

            <Button type="submit" variant="contained">Submit</Button>
        </Box>
    );
}
