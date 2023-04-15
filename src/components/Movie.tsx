export function Movie(props: { movie: any }) {
    return <div className="image-container d-flex justify-content-start m-3">
        <img src={props.movie.Poster} alt="movie"></img>
    </div>;
}