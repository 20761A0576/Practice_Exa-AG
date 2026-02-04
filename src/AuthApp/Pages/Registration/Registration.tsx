import React, { useCallback, useState } from "react";
import { Container, Header, FormContainer, Field, Label, Input, Select, Button, ErrorMessage, Message } from "./Registration.Styled"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/Context/AuthContext";
import { toast } from "react-toastify";

type Gender = "Male" | "Female" | "None";
interface User {
    name: string;
    username: string;
    email: string;
    mobile: string;
    gender: Gender;
    password: string;
    confirmPassword: string;
}
type UserError = Record<keyof User, string>;

const Registration = () => {
    const [user, setUser] = useState<User>({
        name: "",
        username: "",
        email: "",
        mobile: "",
        gender: "None",
        password: "",
        confirmPassword: "",
    });
    const [errors, setError] = useState<UserError>({
        name: "",
        username: "",
        email: "",
        mobile: "",
        gender: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();
    const { state, dispatch } = useAuth();
    const emails: string[] = state.users.map((user) => (user.email.toLowerCase()));
    const mobiles: string[] = state.users.map((user) => (user.mobile.toLowerCase()));
    const usernames: string[] = state.users.map((user) => (user.username.toLowerCase()));

    const validateField = (
        name: keyof User,
        value: string,
        user: User
    ): string => {
        switch (name) {
            case "name":
                if (!value.trim()) return "Name is required";
                if (value.length < 3) return "Name must be at least 3 characters";
                return "";

            case "username":
                if (!value.trim()) return "Username is required";
                if (value.length < 4) return "Username must be at least 4 characters";
                if (usernames.includes(value.trim().toLowerCase()))
                    return "Username already exists";
                return "";

            case "email":
                if (!value.trim()) return "Email is required";
                if (!/^\S+@\S+\.\S+$/.test(value))
                    return "Enter a valid email address";
                if (emails.includes(value.trim().toLowerCase()))
                    return "Email already exists";
                return "";

            case "mobile":
                if (!value.trim()) return "Mobile number is required";
                if (!/^\d{10}$/.test(value))
                    return "Mobile mumber must be 10 digits";
                if (mobiles.includes(value.trim().toLowerCase()))
                    return "Mobile mumber already exists";
                return "";

            case "gender":
                if (!value) return "Please select a gender";
                return "";

            case "password":
                const hasUpper = /[A-Z]/.test(value);
                const hasLower = /[a-z]/.test(value);
                const hasNumber = /\d/.test(value);
                const specialChars = value.match(/[!@#$%^&*(),.?":{}|<>]/g) || [];
                const numSpecial = specialChars.length;
                const length = value.length;
                if (!value) return "Password is required";

                if (length > 12 && hasUpper && hasLower && hasNumber && numSpecial >= 3) {
                    return "";
                } else if (length > 8 && hasUpper && hasLower && hasNumber && numSpecial >= 2) {
                    return "Password is Medium";
                } else {
                    return "Password is Weak";
                }

            case "confirmPassword":
                if (!value) return "Confirm your password";
                if (value !== user.password)
                    return "Passwords do not match";
                return "";

            default:
                return "";
        }
    };


    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            const field = name as keyof User;

            setUser((prev) => {
                const updatedUser = {
                    ...prev,
                    [field]: value,
                };

                setError((prevErrors) => ({
                    ...prevErrors,
                    [field]: validateField(field, value, updatedUser),
                }));
                if (field === "password") {
                    setError((prevErrors) => ({
                        ...prevErrors,
                        confirmPassword: validateField(
                            "confirmPassword",
                            updatedUser.confirmPassword,
                            updatedUser
                        ),
                    }));
                }

                return updatedUser;
            });
        },
        []
    );

    const validateForm = (user: User): UserError => {
        const errors = {} as UserError;

        (Object.keys(user) as (keyof User)[]).forEach((key) => {
            errors[key] = validateField(key, user[key], user);
        });

        return errors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validateForm(user);
        setError(validationErrors);

        const hasErrors = Object.values(validationErrors).some(Boolean);
        if (hasErrors) return;

        dispatch({ type: "REGISTER", payload: { id: crypto.randomUUID(), ...user } });

        setUser({
            name: "",
            username: "",
            email: "",
            mobile: "",
            gender: "None",
            password: "",
            confirmPassword: "",
        })
        toast.success("User added successfully", {
            autoClose: 2000
        });
        navigate("/login")
    }

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <Header> Registration Form</Header>
                <Field>
                    <Label>Name</Label>
                    <Input type="text" name="name" value={user?.name} onChange={handleChange} />
                    {
                        (errors.name) && (<ErrorMessage>{errors.name}</ErrorMessage>)
                    }
                </Field>
                <Field>
                    <Label>Username</Label>
                    <Input type="text" name="username" value={user?.username} onChange={handleChange} />
                    {
                        (errors.username) && (<ErrorMessage>{errors.username}</ErrorMessage>)
                    }
                </Field>
                <Field>
                    <Label>Email</Label>
                    <Input type="text" name="email" value={user?.email} onChange={handleChange} />
                    {
                        (errors.email) && (<ErrorMessage>{errors.email}</ErrorMessage>)
                    }
                </Field>
                <Field>
                    <Label>Mobile</Label>
                    <Input type="text" name="mobile" value={user?.mobile} onChange={handleChange} />
                    {
                        (errors.mobile) && (<ErrorMessage>{errors.mobile}</ErrorMessage>)
                    }
                </Field>
                <Field>
                    <Label>Gender</Label>
                    <Select
                        name="gender"
                        id="gender"
                        value={user.gender}
                        onChange={handleChange}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="None">None</option>
                    </Select>

                </Field>
                <Field>
                    <Label>Password</Label>
                    <Input type="password" name="password" value={user?.password} onChange={handleChange} />
                    {
                        (errors.password) && (<ErrorMessage>{errors.password}</ErrorMessage>)
                    }
                </Field>
                <Field>
                    <Label>Confirm Password</Label>
                    <Input type="password" name="confirmPassword" value={user?.confirmPassword} onChange={handleChange} />
                    {
                        (errors.confirmPassword) && (<ErrorMessage>{errors.confirmPassword}</ErrorMessage>)
                    }
                </Field>
                <Button type="submit" value={"Submit"} />
                <Message>Already have account? <Link to="/login">login</Link></Message>
            </FormContainer>
        </Container>
    )
}

export default Registration;