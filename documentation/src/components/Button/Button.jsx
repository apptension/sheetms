const Button = ({children, link="#"}) => {
    return <a href={link}><button className="button">{children}</button></a>
}
export { Button };