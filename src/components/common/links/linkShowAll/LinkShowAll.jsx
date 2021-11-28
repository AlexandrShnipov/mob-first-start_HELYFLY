import { Link } from "react-router-dom";
import s from './LinkShowAll.module.scss';

const LinkShowAll = (props) => {

  return (
    <Link className={s.linkShowAll} to={'#'} style={props.styleLink}>
      <span className={s.linkShowAllArrowLeft}></span>{props.text}<span className={s.linkShowAllTextNumder} style={props.style}>{props.number}</span> <span className={s.linkShowAllArrowRight}></span>
    </Link>
  )
}

export default LinkShowAll;