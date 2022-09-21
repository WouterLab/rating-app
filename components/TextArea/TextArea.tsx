import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.scss';
import cn from 'classnames';

export const TextArea = ({ className, ...props }: TextAreaProps): JSX.Element => {
  return <textarea className={cn(className, styles.input)} {...props} />;
};
