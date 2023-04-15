import {Movie} from "./Movie";

export function MovieList(props: { movies: any[] }) {
    return (
        <>
            {props.movies.map((movie, index) => (
                <Movie movie={movie}/>
            ))}
        </>
    );
}