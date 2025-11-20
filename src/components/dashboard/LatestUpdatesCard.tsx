import { useState, useEffect, useRef } from "react";
import { Text } from "../ui/Text/Text.tsx";
import {LatestUpdatesData} from "../../data/Dashboard/LatestUpdates.ts";
import {UpdateCardItem} from "./UpdateCardItem.tsx";

export const LatestUpdatesCard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Logic to update the active dot when scrolling
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Find the index of the visible element
                        const index = Array.from(container.children).indexOf(entry.target);
                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            {
                root: container,
                threshold: 0.6, // Trigger when 60% of the item is visible
            }
        );

        Array.from(container.children).forEach((child) => observer.observe(child));

        return () => observer.disconnect();
    }, []);

    // Optional: Allow clicking dots to scroll to that item
    const scrollToSlide = (index: number) => {
        const container = scrollContainerRef.current;
        if (container) {
            const child = container.children[index] as HTMLElement;
            child?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    };

    return (
        <div className="bg-bit-light-blue/50 rounded-lg py-4 px-5 h-full flex flex-col relative group">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <Text
                    content={LatestUpdatesData.title}
                    className="text-sm font-medium text-bit-dark-blue"
                    as="p"
                />
                {/* Dots Indicator (Synced with Scroll) */}
                <div className="flex gap-1 justify-center">
                    {LatestUpdatesData.updates.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToSlide(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                idx === activeIndex ? "w-5 bg-bit-dark-blue" : "w-1.5 bg-bit-neutral-blue cursor-pointer"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
                {LatestUpdatesData.updates.map((item) => (
                    <UpdateCardItem item={item} />
                ))}
            </div>

        </div>
    );
};
