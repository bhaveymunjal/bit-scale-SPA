import {MaterialSymbolIcon} from "../ui/MaterialSymbolIcon/MaterialSymbolIcon.tsx";
import {Text} from "../ui/Text/Text.tsx";
import {OnboardingProgressData} from "../../data/Dashboard/OnboardingProgress.ts";

export const OnboardingProgressCard = () => {
    return (
        <div className="bg-[linear-gradient(to_bottom,_var(--color-bit-light-blue),_var(--color-white))] border border-bit-light-blue rounded-lg py-4 px-5">
            <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-600 rounded-full shrink-0 flex justify-center items-center">
                    <MaterialSymbolIcon iconName={OnboardingProgressData.icon} className="text-white" />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <Text
                                content={OnboardingProgressData.title}
                                className="font-medium text-bit-dark-black mb-1 text-sm"
                                as="div"
                            />
                            <Text
                                content={OnboardingProgressData.description}
                                className="text-xs text-bit-dark-black"
                                as="p"
                            />
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4 mt-3 flex items-center gap-2">
                        <div className="w-full h-1.5 bg-gray-200 rounded-full">
                            <div 
                                className="h-full bg-bit-dark-green rounded-full" 
                                style={{ width: `${OnboardingProgressData.progressPercentage}%` }}
                            />
                        </div>
                        <Text
                            content={`${OnboardingProgressData.progressPercentage}%`}
                            className="text-xs text-bit-dark-green font-semibold"
                            as="span"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                        {OnboardingProgressData.checklist.map((item) => (
                            <div key={item.id} className="flex items-center gap-2">
                                <MaterialSymbolIcon
                                    iconName={item.completed ? 'check_circle' : 'circle'}
                                    className={`!text-base text-bit-dark-blue ${item.completed ? 'icon-fill' : ''}`}
                                />
                                <Text
                                    content={item.label}
                                    className={`text-xs ${item.completed ? 'text-gray-600' : 'text-gray-500'}`}
                                    as="span"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
