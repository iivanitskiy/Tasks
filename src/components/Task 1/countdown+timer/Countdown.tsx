import { useState, useRef, useMemo, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import CountDownInputs from './Countdown-inputs';

function formatTime(time: number): string {
  return `${Math.floor(time / 60).toString().padStart(2, '0')}:${Math.floor(time % 60).toString().padStart(2, '0')}`;
};

function play() {
  let audio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatpellet.ogg');
  audio.play();
};

const Countdown = (): JSX.Element | null => {
  const [time, setTime] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTime(counter);
  }, [counter]);

  const timerRef = useRef<null | NodeJS.Timeout>();
	
	const formattedTime = useMemo(() => 
    formatTime(time), [time]
  );

  const progress = useMemo(() => {
    if (time === 0) {
      return 100;
    } else {
      return Math.round((time / counter) * 100);
    }
  }, [counter, time]);

  const start = () => {
    setIsActive(true);
    timerRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(timerRef.current as NodeJS.Timeout);
    setIsActive(false);
  };

  const reset = () => {
    setIsActive(false);
    setTime(counter);
    pause();
  };

  if (isActive && time === 0) {
    pause();
    play();
  }; 

  return (
		<Container style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
			<Typography variant="h2" component="h1" gutterBottom>Обратный отсчет:</Typography>
			<Typography variant="h3" color="text.main" align="center">{formattedTime}</Typography>
			<ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ m: 3 }}>
				{
				!isActive ?
					<Button variant="contained" color="success" onClick={start}>Старт</Button>
					: <Button variant="contained" onClick={pause}>Пауза</Button>
				}
				<Button variant="contained" color="error" onClick={reset}>Сброс</Button>
			</ButtonGroup>
      <div>{progress}%</div>
      <CountDownInputs counter={counter} setCounter={setCounter} isActive={isActive}/>
		</Container>	    
  );
};

export default Countdown;
