import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation-link.module.css';
import classNames from 'classnames';

export const NavigationLink = ({ to, text }) => {
  const pathname = usePathname();

  return (
    <Link
      href={to}
      className={classNames({
        [styles.isActive]: to === pathname,
      })}
    >
      {text}
    </Link>
  );
};
