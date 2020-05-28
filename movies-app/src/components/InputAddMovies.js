import React from "react"
import { useForm } from 'react-hook-form'


export const InputAddMovies = () => {

    const { handleSubmit, register } = useForm();

    const onFormSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div>
                    <label>Add Movie</label>
                    <input name="addMovie" type="text" ref={register({ required: true })}/>
                </div>
            </form>
        </div>
    )
}

