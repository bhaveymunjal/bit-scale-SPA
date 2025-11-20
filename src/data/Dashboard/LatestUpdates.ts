export interface UpdateItem {
    id: number;
    videoUrl: string;
    title: string;
    description: string;
    date: string;
}

export interface LatestUpdates {
    title: string;
    updates: UpdateItem[];
}

const updates: UpdateItem[] = [
    {
        id: 1,
        videoUrl: "https://www.youtube.com/embed/of5FDgfAbaQ?si=ZNpT43IdM2iAB3cn",
        title: "How to Integrate 2 Way HubSpot",
        description: "Prerequisites for this Integration is that you should have a HubSpot account and Copy the API key. We simple add our API key through the integrations page.",
        date: "Posted today"
    },
    {
        id: 2,
        videoUrl: "https://www.youtube.com/embed/ACGgcWjBy80?si=v6qPoKgq4mL7_VyQ",
        title: "Advanced Bitscale Workflows",
        description: "Learn how to automate your entire outreach process using our new workflow builder. Drag, drop, and scale your operations.",
        date: "Posted yesterday"
    },
    {
        id: 3,
        videoUrl: "https://www.youtube.com/embed/nlDFn4SH4gM?si=yFnOMh8w2DDodMLM",
        title: "New Feature: Team Collaboration",
        description: "Invite your team members and manage permissions with our updated role-based access control system.",
        date: "Posted 2 days ago"
    },
    {
        id: 4,
        videoUrl: "https://www.youtube.com/embed/87obvaf_Jr4?si=R0lrdoAFrhk_cwte",
        title: "Q3 Product Roadmap Update",
        description: "See what we have planned for the next quarter, including new integrations and AI capabilities.",
        date: "Posted 3 days ago"
    }
];

export const LatestUpdatesData = {
    title: "Latest from Bitscale",
    updates: updates
}
