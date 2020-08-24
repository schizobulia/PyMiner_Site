import path from 'path';
import matter from 'gray-matter';
import fs from 'fs';
import remark from 'remark'
import html from 'remark-html'
const postsDirectory = path.join(process.cwd(), 'blog');

export function getSortedNewssData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');
        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    })
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
}


export async function getAllNewsIds() {
    const fileNames = await fs.readdirSync(postsDirectory);
    return fileNames.map(fileName => {
        return {
            params: {
                name: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getNewsData(name) {
    const fullPath = path.join(postsDirectory, `${name}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()
    return {
        name,
        contentHtml,
        ...matterResult.data
    }
}