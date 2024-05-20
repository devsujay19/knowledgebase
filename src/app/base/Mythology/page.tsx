"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AI() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/base/Myth#Mythology");
    });
};