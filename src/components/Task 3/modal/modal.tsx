import { FC } from 'react';
import classes from '../modal/modal.module.css';
import closeIcon from '../../../assets/icons/icon-close.png';

interface Props {
  title: string;
  visible: boolean;
  onClose: any;
  children?: React.ReactNode;
};

const Modal: FC<Props> = ({title, visible, onClose, children}): JSX.Element | null => {
  const modalClass = [classes.modal];
  const modalContentClass = classes.modalContent;
  const closeIconClass = classes.closeIcon;

  if (visible) {
    modalClass.push(classes.active);
  };

  return (
    <div className={modalClass.join(' ')} onClick={onClose} aria-hidden="true">
      <div className={modalContentClass} onClick={(e) => e.stopPropagation()} aria-hidden="true">
        <img className={closeIconClass} src={closeIcon} alt="closeIcon" onClick={onClose} aria-hidden="true"/>
        <h2 style={{color: "black"}}>{title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
