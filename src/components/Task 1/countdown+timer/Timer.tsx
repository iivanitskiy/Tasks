import { useState, useRef, useMemo } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';

function formatTime(time: number): string {
  const minutes = Math.floor(time / 60000).toString().padStart(2,'0');
  const seconds = Math.floor((time % 60000) / 1000).toString().padStart(2,'0');
  const miliseconds = Math.floor((time % 60000) % 1000).toString().padStart(3,'0');
  return `${minutes}:${seconds}:${miliseconds}`
};

const Timer = (): JSX.Element | null => {
  const [time, setTime] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const timerRef = useRef<null | NodeJS.Timeout>(null); // ??? any

  const formattedTime = useMemo(() => 
    formatTime(time), [time]
  );

  const start = () => {
    setIsActive(true);
    setIsPaused(true);
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 10)
    }, 10);
  };

  const pause = () => {
    clearInterval(timerRef.current as NodeJS.Timeout);
    setIsPaused(false);
  };

  const resume = () => {
    setIsPaused(true);
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10)
  };

  const reset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
    pause();
  };

  return (
		<Container>
			<Typography variant="h2" component="h1" gutterBottom>Таймер:</Typography>
			<Typography variant="h3" color="text.main" align="center">{formattedTime}</Typography>
			<ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ m: 3 }}>
				{
				!isActive && !isPaused ?
					<Button variant="contained" color="success" onClick={start}>Старт</Button>
					: (isPaused ? <Button variant="contained" onClick={pause}>Пауза</Button> : <Button variant="contained" color="success" onClick={resume}>Продолжить</Button>)
				}
				<Button variant="contained" color="error" onClick={reset}>Сброс</Button>
			</ButtonGroup>
		</Container>	
  );
};

export default Timer;
