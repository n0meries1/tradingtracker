"use client";

import { useEffect } from "react";

export function RefreshCache({ check }: { checl: () => Promise<void>}) {
    useEffect(() => {
        const onFocus = () => check();

        window.addEventListener("focus", onFocus);

        return () => window.removeEventListener("focus", onFocus);
    })




    return null;
}