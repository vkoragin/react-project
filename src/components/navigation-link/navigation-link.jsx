import Link from 'next/link';
// import styles from './navigation-link.module.css';
// import classNames from 'classnames';

export const NavigationLink = ({ to, text }) => {
  return <Link href={to}>{text}</Link>;
};
