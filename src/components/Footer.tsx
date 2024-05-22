import { siteMetaData } from "@/data/constants";
import Redirect from "./Redirect";

export default function Footer() {
    const copyRightSentence = siteMetaData.copyRightSentence;
    return (
        <footer className="rounded-lg shadow bg-neutral-900 m-4">
            <p dangerouslySetInnerHTML={{ __html: copyRightSentence }} className="block text-sm py-6 border border-neutral-900/[0.1] text-gray-500 text-center dark:text-gray-400"></p>
        </footer >
    );
};