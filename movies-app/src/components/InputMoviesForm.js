import React, {useState} from "react"
import { useForm } from 'react-hook-form'


export const InputMoviesForm = () => {
    const [movies, setMovies] = useState([]);

    const { handleSubmit, register } = useForm();

    const onFormSubmit = (data) => {
        console.log(data)
        setMovies([...movies, data.title])
        console.log(data.genre)
    }
    console.log(movies)

    return (
    <>
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div>
                    <label>Add Movie</label>
                    <input name="title" type="text" ref={register({ required: true })}/>
                </div>
                <div>
                    <label>Add Genre</label>
                    <input name="genre" type="text" ref={register({ required: true })}/>
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
        <div>
            <ul>
                {movies.map((title,index) => (
                    <li key={index}>{title}</li>
                ))}
                
            </ul>
        </div>
    </>
    )
}
