const animatedClass = 'animate__animated';
const serverSide = typeof window === 'undefined';
import { DSFC } from 'types/types';

let scrollableParentRefInitialValue: any = undefined;
if (!serverSide) {
  scrollableParentRefInitialValue = window;
}

type Props = {
  animateIn: string;
  delay?: number;
  duration?: 2;
};

type styleProp = {
  animationDuration: string;
  opacity?: number;
};

const AnimationOnScroll: React.FC<DSFC & Props> = ({
  animateIn,
  delay,
  duration,
  children,
}): React.ReactElement => {
  // const getClassDelay = (delay?: number) => {
  //   switch (delay) {
  //     case 5:
  //       return 'animate__delay-3s';
  //     case 4:
  //       return 'animate__delay-3s';
  //     case 3:
  //       return 'animate__delay-3s';
  //     case 2:
  //       return 'animate__delay-2s';
  //     case 1:
  //       return 'animate__delay-1s';
  //     default:
  //       return '';
  //   }
  // };

  // const getClassDuration = (duration?: number) => {
  //   switch (delay) {
  //     case 3:
  //       return 'animate__slower';
  //     case 2:
  //       return 'animate__slow';
  //     case 800:
  //       return 'animate__fast';
  //     case 500:
  //       return 'animate__faster';
  //     default:
  //       return '';
  //   }
  // };

  return (
    <div
      className={`animate__animated animate__${animateIn} animate__${animateIn}`}
      // style={{ animationDelay: '500ms' }}
    >
      {children}
    </div>
  );
};

export default AnimationOnScroll;
