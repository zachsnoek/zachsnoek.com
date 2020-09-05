import showdown from "showdown";

const converter = new showdown.Converter();

export const makeHTML = ({ content }) => converter.makeHtml(content);
export const makeMD = ({ content }) => converter.makeMarkdown(content);
