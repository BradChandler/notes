import classes from "./NoteCard.module.scss";

const NoteCard = ({ title, category, body }) => {
  return (
    <article className={classes.card}>
      <h3>{title}</h3>
      <p>{body}</p>
      <span className="pill">{ category }</span>
    </article>
  )
}

export default NoteCard;