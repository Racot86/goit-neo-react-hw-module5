import {useSearchMovies} from "../../../../api/ApiRequests.js";
import MovieList from "../../../TrendingTodayPage/components/MovieList/MovieList.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import {useEffect, useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {useLocation, useSearchParams} from "react-router-dom";
import Pagination from "./components/Pagination/Pagination.jsx";
import Loader from "../../../../components/Loader/Loader.jsx";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage.jsx";

const SearchPage = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams()

    const [query, setQuery] = useState(location.state?.query);

    const [page, setPage] = useState( ()=>{
        if(location.state?.page){
            let number = Number(location.state?.page);
            if (number !== 0){
                return number;
            }else return 1;
        }else {
            return 1;
        }
    });


    const queryClient = useQueryClient();
    const {data, isLoading, error} = useSearchMovies(query,page);

    useEffect(() => {
        if(query !== location.state?.query) {
            setSearchParams({query: query});
            queryClient.refetchQueries(['searchMovies'])
            setPage(1)
        }
    },[query]);

    useEffect(() => {

            setSearchParams({query: query,page:page})

    },[page])


    return (
        <div>
            <div style={{display:'flex', width:'100%', justifyContent:'center', alignItems:'center'}}>
            <SearchBar onLoad={query} query={setQuery}/>
            {!!data?.results.length && <Pagination  page={page} setPage={setPage} totalPages={data.total_pages} />}
            </div>
            {isLoading && <Loader />}
            {error && <ErrorMessage error={error.message}/>}
            {!data?.results.length && query && <p style={{padding:'12px'}}>No results found</p>}
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