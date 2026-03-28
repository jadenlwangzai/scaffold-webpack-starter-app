import styles from './index.module.css';

interface WelcomeProps {
  name: string;
}

export default function Welcome({ name }: WelcomeProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to {name}</h1>
      <p className={styles.description}>
        A modern scaffold powered by{' '}
        <a
          className={styles.link}
          href="https://webpack.js.org"
          target="_blank"
          rel="noreferrer"
        >
          Webpack 5
        </a>
        ,{' '}
        <a
          className={styles.link}
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          React 18
        </a>
        , and{' '}
        <a
          className={styles.link}
          href="https://swc.rs"
          target="_blank"
          rel="noreferrer"
        >
          SWC
        </a>
        .
      </p>
    </div>
  );
}
