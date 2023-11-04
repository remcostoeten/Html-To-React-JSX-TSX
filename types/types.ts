import { EmojiType } from "@/components/core/StatusBadge";

export type LayoutProps = {
    children: React.ReactNode;
    title?: string;
    className?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    date?: string;
    updated?: string;
    twitter?: string;
    facebook?: string;
    noindex?: boolean;
    nofollow?: boolean;
    canonical?: string;
};

export type StatusBadgeProps = {
    title?: string
    emojiKey?: EmojiType;
    index?: any;
    position?: "right" | "left" | "top" | "bottom";
    className?: string;
    label?: string;
};

