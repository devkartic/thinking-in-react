function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
    return (<>
            <form action="">
                <div className="input-group mb-3">
                    <span className="input-group-text">Product</span>
                    <input type="text" className="form-control" aria-label="Product name"
                           onChange={(e) => onFilterTextChange(e.target.value)} value={filterText}/>
                </div>
                <div className="mb-3 form-check d-flex">
                    <input type="checkbox" className="form-check-input" id="stock" checked={inStockOnly}
                           onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
                    <label className="form-check-label ms-2" htmlFor="stock">Only show the product in stock</label>
                </div>
            </form>
        </>);
}

export default SearchBar;