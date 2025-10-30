import "./styles/global.css"
import { NAVIGATION_TABS, TAB_KEYS, type TabKey } from "./config/nav-tabs";
import { Container } from "./layout/container";
import { TabNavigation } from "./layout/nav-tabs";
import { PageFooter } from "./layout/page-footer";
import { PageHeader } from "./layout/page-header";
import { PageWrapper } from "./layout/page-wrapper";
import { Component, useState, type ErrorInfo, type FC, type ReactNode } from "react";
import { jobData } from "./data/jobs-data";
import { JobCard } from "./components/job/card";
import { ComparisonTable } from "./components/job/comparison-table";
import { Conclusion } from "./components/job/conclusion";

interface TabContentProps {
    activeTab: TabKey;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

const TabContent: FC<TabContentProps> = ({ activeTab }) => {
    switch (activeTab) {
        case TAB_KEYS.CARDS:
            return <JobCardsView />;

        case TAB_KEYS.TABLE:
            return <ComparisonTableView />;

        case TAB_KEYS.CONCLUSION:
            return <ConclusionView />;

        default:
            return <JobCardsView />;
    }
}

const JobCardsView: FC = () => (
    <section className="grid gap-6" role="list">
        {jobData.map((job, index) => (
            <JobCard
                key={job.id}
                job={job}
                index={index}
            />
        ))}
    </section>
)

const ComparisonTableView: FC = () => (
    <section role="region" aria-label="Comparison Table">
        <ComparisonTable jobs={jobData} />
    </section>
)

const ConclusionView: FC = () => (
    <section role="article" aria-label="Analysis Conclusion">
        <Conclusion />
    </section>
)

export class ErrorBoundary extends Component<
    { children: ReactNode },
    ErrorBoundaryState
> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error caught by boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <PageWrapper>
                    <Container>
                        <div className="text-center py-12">
                            <h1 className="text-3xl font-bold text-red-600 mb-4">
                                Oops! Something went wrong
                            </h1>
                            <p className="text-gray-600 mb-6">
                                {this.state.error?.message || "An unexpected error occurred"}
                            </p>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                Reload Page
                            </button>
                        </div>
                    </Container>
                </PageWrapper>
            );
        }

        return this.props.children;
    }
}

const App: FC = () => {
    const [activeTab, setActiveTab] = useState<TabKey>(TAB_KEYS.CARDS);

    return (
        <PageWrapper>
            <Container>
                {/* Page Header */}
                <PageHeader />

                {/* Tab Navigation */}
                <TabNavigation
                    tabs={NAVIGATION_TABS}
                    activeTab={activeTab}
                    onChange={(key) => setActiveTab(key as TabKey)}
                />

                {/* Main Content */}
                <main className="mt-8">
                    <TabContent activeTab={activeTab} />
                </main>

                {/* Page Footer */}
                <PageFooter />
            </Container>
        </PageWrapper>
    )
}

export default App;