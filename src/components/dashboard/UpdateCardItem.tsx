import {Text} from "../ui/Text/Text.tsx";
import type {FC} from "react";
import type {UpdateItem} from "../../data/Dashboard/LatestUpdates.ts";

interface UpdateCardItemProps {
    item: UpdateItem;
}

export const UpdateCardItem: FC<UpdateCardItemProps> = ({item}) => {
    return (
        <div
            key={item.id}
            className="min-w-full flex gap-4 snap-center"
        >
            {/* Video Iframe */}
            <div className="w-40 h-24 bg-gray-800 rounded-lg shrink-0 overflow-hidden relative shadow-sm">
                <iframe
                    src={item.videoUrl}
                    title={item.title}
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            {/* Text Content */}
            <div className="flex flex-col flex-1 min-w-0">
                <Text
                    content={item.title}
                    className="text-sm font-semibold text-gray-800 mb-1 truncate"
                    as="div"
                />
                <Text
                    content={item.description}
                    className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-auto"
                    as="p"
                />
                <Text
                    content={item.date}
                    className="text-[10px] text-gray-400 mt-2"
                    as="p"
                />
            </div>
        </div>
    );
};
