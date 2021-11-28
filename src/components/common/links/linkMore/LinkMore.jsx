import {Link} from "react-router-dom";
import s from './LinkMore.module.scss';

const LinkMore = () => {

  return (
<Link className={s.link} to={'#'}>Читать еще
<span className={s.linkArrow}></span>
</Link>
  )
}

export default LinkMore;