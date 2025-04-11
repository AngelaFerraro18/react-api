function Card({ name, children }) {
    return <section>
        <h2>{name}</h2>
        <ul>
            {children}
        </ul>
    </section>
}

export default Card;