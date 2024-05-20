"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export interface SynonymRedirectProps {
    path: string;
};

export default function SynonymRedirect({ path }: SynonymRedirectProps) {
    const router = useRouter();

    useEffect(() => {
        router.replace(path);
    });
};