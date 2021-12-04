import {Image} from '../Image'

const ImageSection = ({imgSrc, title, description}) => (
    <div>
        <Image src={imgSrc}/>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
)

export {ImageSection}