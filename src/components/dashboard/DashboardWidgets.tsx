import {LatestUpdatesCard} from "./LatestUpdatesCard.tsx";
import { OnboardingProgressCard } from "./OnboardingProgressCard.tsx";

export const DashboardWidgets = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Video Card */}
            <LatestUpdatesCard />

            {/* Progress Card */}
            <OnboardingProgressCard />
        </div>
    );
};
