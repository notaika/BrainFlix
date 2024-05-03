// Dynamic time function for dates
export function dynamicTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = (now - date) / 1000;

    if (diff < 60) {
        return "just now";
    } else if (diff < 3600) {
        const minutes = Math.floor(diff / 60);
        return minutes > 1 ? `${minutes} minutes ago` : "1 minute ago";
    } else if (diff < 86400) {
        const hours = Math.floor(diff / 3600);
        return hours > 1 ? `${hours} hours ago` : "1 hour ago";
    } else if (diff < 604800) {
        const days = Math.floor(diff / 86400);
        return days > 1 ? `${days} days ago` : "1 day ago";
    } else if (diff < 2629800) { // less than a month
        const weeks = Math.floor(diff / 604800);
        return weeks > 1 ? `${weeks} weeks ago` : "1 week ago";
    } else if (diff < 31536000) { // less than a year
        const months = Math.floor(diff / 2629800); // approx average seconds in a month
        return months > 1 ? `${months} months ago` : "1 month ago";
    } else {
        const years = Math.floor(diff / 31536000);
        return years > 1 ? `${years} years ago` : "1 year ago";
    }
}
