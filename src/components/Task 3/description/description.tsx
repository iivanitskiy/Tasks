import { useState } from 'react';
import Button from '@mui/material/Button';

export const Description = (text: string, maxLength: number): JSX.Element | null => {
	const [isShowingMore, setIsShowingMore] = useState(text.length < maxLength);

	const toggler = () => setIsShowingMore(prev => !prev);

  return (
		<>
			{isShowingMore ? text : (text.substring(0, maxLength) + "...")} 
			{text.length > maxLength && <Button style={{marginLeft: "10px"}} variant="outlined" onClick={toggler} size="small" color="primary">{isShowingMore ? "Hide" : "Show more"}</Button>}
		</>
  );
};
