import { useRef } from "react";
import classes from "./AddNote.module.css";


function AddNote(props) {
    const { open, onClose, add } = props;

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const datetimeRef = useRef(null);
    const colorRef = useRef(null);

    const onSubmit = e => {
        e.preventDefault();

        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const datetime = datetimeRef.current.value;
        const color = colorRef.current.value;

        if (title && description && datetime) {
            add({ title, description, datetime, color });
            onClose();
        }
    }

    if (!open) {
        return <></>;
    }

    return (
        <div
            className={classes.addNote}>
            <div className={classes.modal}>
                <button
                    className={classes.closeBtn}
                    onClick={onClose}>
                    <span
                        className="material-symbols-outlined"
                        style={{ color: "white", fontSize: "22px" }}>
                        close
                    </span>
                </button>
                <h2 className={classes.title}>
                    Add new note
                </h2>
                <form onSubmit={onSubmit}>
                    <div
                        className={classes.formControl}>
                        <label
                            htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            ref={titleRef} />
                    </div>
                    <div className={classes.formControl}>
                        <label
                            htmlFor="description">
                            Description
                        </label>
                        <textarea
                            type="description"
                            id="description"
                            name="description"
                            ref={descriptionRef}
                            rows={3} />
                    </div>
                    <div className={classes.formControl}>
                        <label
                            htmlFor="datetime">
                            Date
                        </label>
                        <input
                            id="datetime"
                            name="datetime"
                            type="datetime-local"
                            ref={datetimeRef} />
                    </div>
                    <div className={classes.formControl}>
                        <label
                            htmlFor="color">
                            Pick color
                        </label>
                        <input
                            id="color"
                            type="color"
                            name="color"
                            ref={colorRef} />
                    </div>
                    <button
                        type="submit"
                        className={classes.addBtn}>
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddNote;