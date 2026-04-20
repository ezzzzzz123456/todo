const SearchHabit=({setSearchTerm,searchTerm})=>{
    return (
        <>
        <input type="text" placeholder="search.."  value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        </>
    )
}
export default SearchHabit