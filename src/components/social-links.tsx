import Link from "next/link";
import clsx from "clsx";

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <Link
          href="https://facebook.com/7vocesPodcasts"
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            className,
            "flex items-center justify-center space-x-2 transition-colors"
          )}
          aria-label="Facebook"
          title="@7vocesPodcasts" 
        >
          <FacebookIcon className="w-6 h-6" />
        </Link>
        <Link
          href="https://instagram.com/7vocesPodcast"
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            className,
            "flex items-center justify-center space-x-2 transition-colors"
          )}
          aria-label="Instagram"
          title="@7vocesPodcast"
        >
          <InstagramIcon className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}

export const FacebookIconLink = ({
  username,
  show = false,
  className,
}: {
  username: string;
  show?: boolean;
  className?: string;
}) => (
  <Link
    href={`https://facebook.com/${username}`}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(
      className,
      "flex items-center justify-center space-x-2 text-gray-400 hover:text-orange-950 transition-colors"
    )}
    aria-label="Facebook"
    title={`@${username}`}
  >
    <FacebookIcon className="w-6 h-6" />
    {show && <span>@{username}</span>}
  </Link>
);
