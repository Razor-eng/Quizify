// components/ui/spinner.tsx
export function Spinner({ className = '' }: { className?: string }) {
    return (
        <svg
            className={`animate-spin ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 50 50"
        >
            <circle
                className="opacity-25"
                cx="25"
                cy="25"
                r="20"
                stroke="currentColor"
                strokeWidth="5"
                fill="none"
            />
            <circle
                className="opacity-75"
                cx="25"
                cy="25"
                r="20"
                stroke="currentColor"
                strokeWidth="5"
                fill="none"
            />
        </svg>
    );
}
