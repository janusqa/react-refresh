export type TJobItem = {
    id: number;
    title: string;
    badgeLetters: string;
    company: string;
    relevanceScore: number;
    daysAgo: number;
    badgeBgColor?: React.CSSProperties['color'];
};

export type TJobItemDetails = TJobItem & {
    description: string;
    qualifications: string[];
    reviews: string[];
    duration: string;
    location: string;
    salary: string;
    coverImgURL: string;
    companyURL: string;
};

export type TJobItemApiResponse = {
    jobItem: TJobItemDetails;
    public: boolean;
};

export type TJobItemsApiResponse = {
    jobItems: TJobItem[];
    public: boolean;
};

export type TSortMethod = 'relevance' | 'recent';
