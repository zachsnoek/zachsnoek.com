import showdown from "showdown";

const converter = new showdown.Converter({ headerLevelStart: 2 });

export const makeHTML = ({ content }) => converter.makeHtml(content);
export const makeMD = ({ content }) => converter.makeMarkdown(content);
