import Redirect from "@/components/Redirect";

const copyRightYear = new Date().getFullYear();

export const siteMetaData = {
    name: "Knowledge Base | Developer Sujay",
    type: "Knowledge Base",
    techStack: [
        "NextJS 14.2.3",
        "Tailwind CSS 3.4.3",
        "Aceternity UI",
    ],
    literalTechStack: [
        "NextJS",
        "Tailwind CSS",
        "Aceternity UI",
    ],
    description: "Knowledge Base of Developer Sujay!",
    author: "Sujay Mukherjee",
    developer: "Sujay Mukherjee",
    previousBaseURI: "https://developer-sujays-knowledge-base.vercel.app",
    repository: "https://github.com/devsujay19/knowledgebase",
    baseURI: "https://dskb.vercel.app",
    copyRightSentence: `© ${copyRightYear} | <a target='_blank' href='https://github.com/devsujay19'>Sujay Mukherjee</a>. <a target='_blank' href='https://github.com/devsujay19/knowledgebase/blob/main/LICENSE'>MIT</a> Licensed.`,
    copyRightYear: copyRightYear,
};
