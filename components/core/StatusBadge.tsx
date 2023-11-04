import React from "react";
import { Badge } from "@/components/ui/badge";
import { StatusBadgeProps } from "@/types/types";

export const label = {
    beta: "Beta",
    wip: "WiP",
    bugs: "Bugs",
    abandoned: "Abandoned",
    lowPriority: "Low priority",
    new: "New",
    tool: "Tool",
    showcase: "Showcase",
    ui: "UI",
};

export const emojis = {
    rocket: "🚀",
    fire: "🔥",
    megaphone: "📣",
    moneyBag: "💰",
    graph: "📈",
    trophy: "🏆",
    lightBulb: "💡",
    star: "⭐",
    thunder: "⚡",
    thumbsUp: "👍",
    handshake: "🤝",
    target: "🎯",
    loudspeaker: "📢",
    telephone: "☎️",
    globe: "🌍",
    email: "✉️",
    mobilePhone: "📱",
    construction: "🚧",
    calendar: "📅",
    clock: "⏰",
    gift: "🎁",
    shoppingCart: "🛒",
    tag: "🏷️",
    creditCard: "💳",
    package: "📦",
    percent: "💹",
};

export type EmojiType = keyof typeof emojis;


export default function CustomStatusBadge({
    title,
    emojiKey,
    index,
    position = "right",
    className,
}: StatusBadgeProps) {
    const offset = index as any * -30;

    const transformMapping = {
        right: `translateX(-3rem) translateY(${offset}px)`,
        left: `translateX(3rem) translateY(${offset}px)`,
        top: `translateY(${offset}px)`,
        bottom: `translateY(-${offset}px)`,
    };

    const style = {
        transform: transformMapping[position],
        [position]: 0,
    };

    return (
        <Badge
            variant="default"
            className={`absolute w-max ${className}`}
            style={style}
        >
            {`${label[title as keyof typeof label]} ${emojis[emojiKey as EmojiType]}`}
        </Badge>
    );
}

// USAGE
// Example of how to use the CustomStatusBadge component

// const badges = [
//   { title: "Beta", emojiKey: "rocket" },
//   { title: "WiP", emojiKey: "fire" },
//   // ... (other badges)
// ];

// return (
//   <div>
//     {badges.map((badge, index) => (
//       <CustomStatusBadge key={index} {...badge} index={index} />
//     ))}
//   </div>
// );
