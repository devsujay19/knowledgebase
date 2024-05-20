import NotFoundComponent from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 - Knowledge Base | Developer Sujay",
};
export default function NotFound() {
    return (
        <NotFoundComponent />
    );
};