// IMPORT STYLES
import './Main.scss';

// MAIN COMPONENT
function Main({ ...props }) {
  return <main className='main'>{props.children}</main>;
}

export default Main;
