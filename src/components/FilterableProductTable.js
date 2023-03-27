import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import {useState} from "react";

function FilterableProductTable() {
    const PRODUCTS = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
    ];

    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <>
            <div className="container">
                <div className="row mb-3">
                    <div className="col-6">
                        <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h4 className="text-start">Product List</h4>
                        <ProductTable products={PRODUCTS} filterText={filterText} inStockOnly={inStockOnly} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilterableProductTable;