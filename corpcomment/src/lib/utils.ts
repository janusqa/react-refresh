export const extractHashtags = (text: string) => {
    // This regex matches:
    // - Starts with #
    // - Followed by word characters (letters, numbers, underscores)
    // - Optional internal apostrophes/dashes (for words like "can't", "state-of-the-art")
    // - Excludes any trailing punctuation
    const hashtagRegex = /#[\w'-]+/g;

    const matches = text.match(hashtagRegex) || [];

    // Clean each hashtag by:
    // 1. Removing the # symbol
    // 2. Trimming any remaining non-word characters from the end
    return matches
        .map(
            (tag) =>
                tag
                    .slice(1)
                    .replace(/[^\w'-]+$/, '') // Remove trailing punctuation
                    .toLowerCase() // Optional: normalize case
        )
        .filter((tag) => tag.length > 0); // Ensure we don't return empty strings
};
