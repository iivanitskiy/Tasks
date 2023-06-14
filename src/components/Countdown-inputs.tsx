import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Props {
  counter: number;
  setCounter: (value: number) => void;
  isActive: boolean;
};

const CountDownInputs: React.FC<Props> = ({counter, setCounter, isActive}) => {
  const [minutes, setMinutes] = useState<number>(Math.floor(counter / 60));
  const [seconds, setSeconds] = useState<number>(Math.floor(counter % 60));

  useEffect(() => {
    if (counter > 720 * 60) {
      setCounter(720 * 60);
    } else if (counter < 0) {
      setCounter(0);
    } else {
      setMinutes(Math.floor(counter / 60));
      setSeconds(Math.floor(counter % 60));
    }
  }, [counter, setCounter]);

  const onChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
  	setCounter(Number(e.target.value) * 60 + seconds);
	};
	
  const onChangeSec = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) < 0) {
      setCounter(counter - 1);
    };
  	setCounter(Number(e.target.value) + minutes * 60);
	};

   const onChangeSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
  	setCounter(Number(e.target.value));
	};
  return (
    <>
      <Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '5ch' },
					backgroundColor: "white",
					width: "10vw",
				}}
				noValidate
				autoComplete="off"
			>
        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-720]*' }} disabled={isActive ? true : false} label="Number" type="number" variant="outlined" value={minutes} onChange={onChangeMin}/>
        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-59]*' }} disabled={isActive ? true : false} label="Number" type="number" variant="outlined" value={seconds} onChange={onChangeSec}/>
      </Box>
      <input style={{width: "400px", paddingTop: "50px"}}
        type='range'
        onChange={onChangeSlider}
        min={0}
        max={3600}
        step={15}
        value={counter}
        disabled={isActive ? true : false}
      ></input>
    </>
  );
};

export default CountDownInputs;
