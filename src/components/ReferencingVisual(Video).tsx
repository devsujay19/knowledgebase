import React from "react";
import ReferencingVisualCaption from "./ReferencingVisualCaption";

export interface ReferencingVideoVisualProps {
    src: string;
    w: number;
    h: number;
    caption: React.ReactNode;
};

export default function ReferencingVideoVisual({ src, w, h, caption }: ReferencingVideoVisualProps) {
    return (
        <>
            <video controls loop autoPlay src={`${src}`} className="mx-auto" width={w} height={h} />
            <div className="text-center pt-2">
                <ReferencingVisualCaption caption={caption} />
            </div>
        </>
    );
};