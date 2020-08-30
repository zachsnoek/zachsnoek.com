import { API } from "./api";

export const loadUser = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API}/auth/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await response.json();

    return response.ok ? data.data : null;
};

export const loginUser = async (formData) => {
    const response = await fetch(`${API}/auth/login`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(formData),
    });

    const data = await response.json();

    return response.ok ? data.token : null;
};

export const logoutUser = () => {
    localStorage.removeItem("token");
};
