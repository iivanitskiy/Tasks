import { SHeader} from "../assets/styles/app.styles";
import Timer from "../components/Task 1/countdown+timer/Timer";
import Countdown from "../components/Task 1/countdown+timer/Countdown";

const Task1 = () => {
  return (
    <SHeader>
			<Timer />
			<Countdown />
		</SHeader>
  );
};

export default Task1;
