import { makeHTML } from "./markdown";

const BASE_URL = "https://api.zachsnoek.com",
    API = `${BASE_URL}/api/v1`,
    ASSETS = `${BASE_URL}/assets`,
    PORTFOLIO_IMGS = `${ASSETS}/img/portfolio`,
    BLOG = `${API}/blog`,
    PORTFOLIO = `${API}/portfolio`;

const createOptions = (method, body) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${localStorage.token}`);

    return {
        method,
        mode: "cors",
        cache: "no-cache",
        headers: headers,
        referrerPolicy: "no-referrer",
        body,
    };
};

export const getPost = (id) => {
    return fetch(`${BLOG}/${id}`);
};

export const getPosts = () => {
    return fetch(BLOG);
};

export const createPost = (formData) => {
    formData.content = makeHTML(formData);

    return fetch(BLOG, createOptions("POST", JSON.stringify(formData)));
};

export const updatePost = (id, formData) => {
    formData.content = makeHTML(formData);

    return fetch(
        `${BLOG}/${id}`,
        createOptions("PUT", JSON.stringify(formData))
    );
};

export const deletePost = (id) => {
    return fetch(`${BLOG}/${id}`, createOptions("DELETE"));
};

export const getProject = (id) => {
    return fetch(`${PORTFOLIO}/${id}`);
};

export const getProjects = () => fetch(PORTFOLIO);

export const createProject = (formData) =>
    fetch(PORTFOLIO, createOptions("POST", JSON.stringify(formData)));

export const updateProject = (id, project) => {
    return fetch(
        `${PORTFOLIO}/${id}`,
        createOptions("PUT", JSON.stringify(project))
    );
};

export const deleteProject = (id, project) => {
    return fetch(
        `${PORTFOLIO}/${id}`,
        createOptions("DELETE", JSON.stringify(project))
    );
};

export { API, ASSETS, PORTFOLIO_IMGS };
