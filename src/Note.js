import classes from './Note.module.css';


function Note(props) {
    const { note, remove } = props;
    const myDatetime = new Date(note.datetime);

    return (
        <div className={classes.note} style={{ background: note.color }}>
            <h1 className={classes.title}>
                {note.title}
            </h1>
            <p>
                {note.description}
            </p>
            <div className={classes.datetime}>
                <span className="material-symbols-outlined">
                    notifications
                </span>
                {` ${myDatetime.toLocaleTimeString('en-US', {
                    minute: '2-digit',
                    hour: '2-digit'
                })} ${myDatetime.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                })}`}
            </div>
            <button
                className={classes.deleteBtn}
                onClick={() => remove(note.id)}>
                <span
                    className="material-symbols-outlined"
                    style={{ color: 'white', fontSize: '22px' }}>
                    close
                </span>
            </button>
        </div>
    );
}

export default Note;