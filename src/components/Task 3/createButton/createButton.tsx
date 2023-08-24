import { FC, HTMLAttributes } from 'react';
import './createButton.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  setModal: (value: boolean) => void;
};

export const CreateButton: FC<Props> = ({setModal}): JSX.Element | null => {

  return (
      <button className="createBtn" onClick={() => setModal(true)}>+</button>
  );
};