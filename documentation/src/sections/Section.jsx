
import {Image} from '../components/Image'


const Section = ({imgSrc, sectionTitle, title, description, children}) => (
    <section className="section__container">
        <div className="container">
            <h1 id="getStarted"> {title}</h1>
            <Image src={imgSrc}/>
            <h3>{sectionTitle}</h3>
            {children}
        </div>
    </section>
)

export { Section }