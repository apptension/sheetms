
import {ImageSection} from '../components/ImageSection'


const Section = ({imgSrc, imgTitle, title, description}) => (
    <section className="section__container">
        <h1 id="getStarted"> {title}</h1>
        <ImageSection imgSrc={imgSrc} title={imgTitle} description={description}/>
    </section>
)

export { Section }