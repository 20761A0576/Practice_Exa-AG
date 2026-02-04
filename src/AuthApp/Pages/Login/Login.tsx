import React, { useState, useEffect } from "react";
import { Container, Header, FormContainer, Field, Label, Input, Button, ErrorMessage, Message } from "./Login.Styled";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Components/Context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginForm {
    email: string;
    password: string;
}

interface LoginErrors {
    email: string;
    password: string;
    general?: string
}

const Login = () => {
    const { state, dispatch } = useAuth();
    const navigate = useNavigate();

    const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
    const [errors, setErrors] = useState<LoginErrors>({ email: "", password: "", general: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        const error = validateField(name as keyof LoginForm, value);

        setErrors(prev => ({
            ...prev,
            [name]: error,
        }));
    };

    const validateField = (name: keyof LoginForm, value: string): string => {
        switch (name) {
            case "email":
                if (!value.trim()) return "Email is required";
                if (!/^\S+@\S+\.\S+$/.test(value)) return "Enter a valid email address";
                return "";
            case "password":
                if (!value) return "Password is required";
                return "";
            default:
                return "";
        }
    };

    const validateForm = (form: LoginForm): LoginErrors => {
        const errors: LoginErrors = { email: "", password: "" };
        errors.email = validateField("email", form.email);
        errors.password = validateField("password", form.password);
        return errors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validateForm(form);
        setErrors(validationErrors);

        const hasErrors = Object.values(validationErrors).some(Boolean);
        if (hasErrors) return;

        dispatch({ type: "LOGIN", payload: { email: form.email, password: form.password } });
        navigate("/");
    };

    useEffect(() => {
        if (state.access.loginError) {
            toast.error(state.access.loginError);
            dispatch({ type: "CLEAR_ERROR" });
        }
    }, [state.access.loginError, dispatch]);

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <Header>Login</Header>
                <Field>
                    <Label>Email</Label>
                    <Input type="text" name="email" value={form.email} onChange={handleChange} />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </Field>

                <Field>
                    <Label>Password</Label>
                    <Input type="password" name="password" value={form.password} onChange={handleChange} />
                    {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                </Field>

                <Button type="submit" value="Login" />
                <Message>No account? <Link to="/registration">create one</Link></Message>
            </FormContainer>
        </Container>
    );
};

export default Login;
