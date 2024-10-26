import clsx from 'clsx';
import React from 'react';

import styles from './Highlighter.module.css';

enum HighlighterStyle {
  WHITE = 'WHITE',
  GREEN = 'GREEN',
}
interface HighlighterProps {
  children: React.ReactNode;
  fill?: keyof typeof HighlighterStyle;
}

const Highlighter: React.FC<HighlighterProps> = ({
  children,
  fill = null,
}) => {
  return (
    <mark className={clsx(styles.highlighter, fill ? styles[fill] : '')}>{children}</mark>
  );
};

export default Highlighter;
