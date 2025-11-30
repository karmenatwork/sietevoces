import Link from "next/link";
import clsx from "clsx";
import { Youtube } from "@deemlol/next-icons";

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


export function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={clsx(
        className,
        "w-6 h-6 "
      )}
      fill="currentColor" viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}


export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        < FacebookIconLink
          username="7vocesPodcasts"
          show={false}
          className={className}
          aria-label="Facebook"
        />
        <InstagramIconLink username="7vocesPodcast" className={className} />
        <YouTubeIconLink username="7vocesPodcast" className={className} />
        <TiktokIconLink username="7vocesPodcast" className={className} />
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
      "flex items-center justify-center space-x-2  transition-colors"
    )}
    aria-label="Facebook"
    title={`@${username}`}
  >
    <FacebookIcon className="w-6 h-6" />
    {show && <span>@{username}</span>}
  </Link>
);

export const InstagramIconLink = ({
  username,
  show = false,
  className,
}: {
  username: string;
  show?: boolean;
  className?: string;
}) => (
  <Link
    href={`https://instagram.com/${username}`}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(
      className,
      "flex items-center justify-center space-x-2 transition-colors"
    )}
    aria-label="Instagram"
    title={`@${username}`}
  >
    <InstagramIcon className="w-6 h-6" />
    {show && <span>@{username}</span>}
  </Link>
);

export const YouTubeIconLink = ({
  username,
  show = false,
  className,
}: {
  username: string;
  show?: boolean;
  className?: string;
}) => (
  <Link
    href={`https://youtube.com/@${username}`}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(
      className,
      "flex items-center justify-center space-x-2 transition-colors"
    )}
    aria-label="Youtube"
    title={`@${username}`}
  >
    <Youtube className="w-6 h-6" />
    {show && <span>@{username}</span>}
  </Link>
);

export const TiktokIconLink = ({
  username,
  show = false,
  className,
}: {
  username: string;
  show?: boolean;
  className?: string;
}) => (
  <Link
    href={`https://tiktok.com/@${username}`}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(
      className,
      "flex items-center justify-center space-x-2 transition-colors"
    )}
    aria-label="Tiktok"
    title={`@${username}`}
  >
    <TiktokIcon className="w-6 h-6" />
    {show && <span>@{username}</span>}
  </Link>
);
