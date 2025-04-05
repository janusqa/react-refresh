import { TJobItem } from '../lib/types';
import JobListItem from './JobListItem';
import Spinner from './Spinner';
import { handleError } from '../lib/utility';
import { useEffect } from 'react';

type Props = {
    jobItems: TJobItem[];
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
};
export function JobList({ jobItems, isLoading, isError, error }: Props) {
    // if (isError && error) handleError(error);

    useEffect(() => {
        if (isError && error) {
            handleError(error);
        }
    }, [isError, error]);

    return (
        <ul className="job-list">
            {isLoading ? (
                <Spinner />
            ) : (
                jobItems.map((item) => (
                    <JobListItem key={item.id} jobItem={item} />
                ))
            )}
        </ul>
    );
}

export default JobList;
