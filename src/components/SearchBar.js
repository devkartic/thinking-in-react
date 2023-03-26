function SearchBar() {
    return (
        <>
            <form action="">
                <div className="input-group mb-3">
                    <span className="input-group-text">Product</span>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                    <span className="input-group-text">Search</span>
                </div>
            </form>
        </>
    );
}

export default SearchBar;