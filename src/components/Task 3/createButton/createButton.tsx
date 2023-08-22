import { FC } from 'react';
import { ReactComponent as CloseIcon } from '../../../assets/icons/cross.svg';
import './createButton.css';

interface Props {
  setModal: (value: boolean) => void;
};

export const CreateButton: FC<Props> = ({setModal}): JSX.Element | null => {

  return (
    <>
      <button className="createBtn" onClick={() => setModal(true)}>+</button>
      <CloseIcon style={{backgroundColor: "black", border: "1px solid black"}}/>
    </>
  );
};