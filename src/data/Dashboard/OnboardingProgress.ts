export interface ChecklistItem {
    id: number;
    label: string;
    completed: boolean;
}

export interface OnboardingProgress {
    icon: string;
    title: string;
    description: string;
    progressPercentage: number;
    checklist: ChecklistItem[];
}

const checklist: ChecklistItem[] = [
    {
        id: 1,
        label: "Create your data list",
        completed: true
    },
    {
        id: 2,
        label: "Connect an integration",
        completed: true
    },
    {
        id: 3,
        label: "Learn about BitAgent",
        completed: true
    },
    {
        id: 4,
        label: "Customise waterfall providers",
        completed: false
    }
];

export const OnboardingProgressData: OnboardingProgress = {
    icon: "article",
    title: "Complete product demo",
    description: "92% of users nailed BitScale after this walkthrough",
    progressPercentage: 75,
    checklist: checklist
};
