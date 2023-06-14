import React from 'react';
import { SHeader} from "../assets/styles/app.styles";
import Timer from "../components/Timer";
import Countdown from "../components/Countdown";

const Task1 = () => {
  return (
    <SHeader>
			<Timer />
			<Countdown />
		</SHeader>
  );
};

export default Task1;
