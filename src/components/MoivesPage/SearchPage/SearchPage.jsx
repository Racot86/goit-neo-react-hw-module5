import styles from './SearchPage.module.css'
import {useSearchMovies} from "../../../api/ApiRequests.js";
import MovieList from "../../UI/MovieList/MovieList.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import {useEffect, useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {useSearchParams} from "react-router-dom";
import Pagination from "../Pagination/Pagination.jsx";
import Loader from "../../UI/Loader/Loader.jsx";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage.jsx";

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const [query, setQuery] = useState(()=>{
        let paramQuery = searchParams.get("query");
        if(paramQuery){
            return paramQuery
        }else return ""
    });

    const [page, setPage] = useState(()=>{
        let paramPage = searchParams.get("page");
        if(paramPage){
            return Number(paramPage)
        }else return 1
    });


    const queryClient = useQueryClient();
    const {data, isLoading, error} = useSearchMovies(query,page);

    useEffect(() => {
        if(query !== searchParams.get("query")) {
            setSearchParams({query: query});
            queryClient.refetchQueries(['searchMovies'])
            setPage(1)
        }
    },[query]);

    useEffect(() => {
            setSearchParams({query: query,page:page.toString()})
    },[page])


    return (
        <div>
            <div className={styles.searchBarWrapper}>
                <SearchBar onLoad={query} query={setQuery}/>
                {!!data?.results.length && <Pagination  page={page} setPage={setPage} totalPages={data.total_pages} />}
            </div>
            {isLoading && <Loader />}
            {error && <ErrorMessage error={error.message}/>}
            {!data?.results.length && query && !isLoading && <p className={styles.noResults}>No results found</p>}
            {!!data?.results.length && (
                <>
                    <MovieList movies={data.results} />
                </>
                )
            }
        </div>
    )
}
export default SearchPage