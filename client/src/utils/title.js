import { routes } from "components/routing/routes";

const titlePrefix = "Zach Snoek";

const validatePath = (pathname) =>
    routes.some((route) => route.path === pathname && !route.hidden);

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const pathToTitle = (pathname) => {
    const basePath = pathname.split("/", 2)[1];

    if (basePath !== "") {
        const parts = basePath.split("-");

        return parts.length === 1
            ? capitalize(basePath)
            : parts.reduce(
                  (acc, part) => capitalize(acc) + " " + capitalize(part)
              );
    }
};

export const setTitle = ({ pathname }) => {
    if (validatePath(pathname)) {
        const title = pathToTitle(pathname);
        document.title = `${titlePrefix} ${title ? "| " + title : ""}`;
    } else {
        document.title = titlePrefix;
    }
};
