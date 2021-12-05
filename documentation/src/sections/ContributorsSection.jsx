import {useState, useEffect} from 'react'

function getUser(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => {
        return response;
    })
}


const contributorNames = [ "cpBurn", "Sharqiewicz", "antbysh"]


const ContributorsSection = () => {

    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        contributorNames.map( user => getUser(user).then( response => setContributors(state => [...state, response])) )
    },[])

    return (
        <div className="container">
            <section className="contributors__section">
                <h1 id="getStarted"> Contributors</h1>
                {
                    contributors.length && contributors.map( contributor => {
                        console.log(contributor);
                        return (
                            <a href={contributor.html_url}>
                                <img className="contributor__image" src={contributor.avatar_url} alt={contributor.login}/>
                            </a>
                        )
                    })
                }

            </section>
        </div>
    )
}

export { ContributorsSection }