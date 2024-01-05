import classNames from "classnames";
import { ReactNode } from "react";

type SectionProps = {
    id : string,
    className? : string,
    children : ReactNode
}

const Section : React.FC<SectionProps> = ({id, className, children}) => {
    return <section id={id} className={classNames('container py-10 md:py-20 my-20', className)}>{children}</section>
}

export default Section;