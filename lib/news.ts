import fs from "fs";
import path from "path";
import {parse} from "node-html-parser";

const newsDirectory = path.join(process.cwd(), "news")

export function getSortedNewsData() {
    const fileNames = fs.readdirSync(newsDirectory);

    const allNewsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.html$/, "");
        const fullPath = path.join(newsDirectory, fileName)

        const parsedData = parseHtmlData(fullPath)
        return {
            id,
            ...parsedData
        }

    });

    return allNewsData.sort((a,b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
}

export function getAllNewsIds() {
    const fileNames = fs.readdirSync(newsDirectory)
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.html$/, "")
            }
        }
    })
}

export function getNewsData(id:string) {
    const fullPath = path.join(newsDirectory, `${id}.html`)
    const parsedData = parseHtmlData(fullPath)
    return {
        id,
        ...parsedData
    }
}

function parseHtmlData(fullPath:string) {
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const root = parse(fileContents)
    const meta = root.querySelector("meta")

    let title = meta.getAttribute("data-title")
    let img = meta.getAttribute("data-src")
    let date = meta.getAttribute("data-date")
    if (!title) title="Не указан заголовок"
    if (!img) img="Не указана путь к картинке"
    if (!date) date="Не указана дата"
    return {
        fileContents,
        title,
        img,
        date,
    }
}
