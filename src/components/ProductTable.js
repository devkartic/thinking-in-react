import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

function ProductTable({products, filterText, inStockOnly}) {

    const rows = [];
    let lastCategory = null;
    products.forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(
                filterText.toLowerCase()
            ) === -1
        ) {
            return;
        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (lastCategory!==product.category){
            rows.push(<ProductCategoryRow key={product.category} product={product}/>);
        }
        rows.push(<ProductRow key={product.name} product={product}/>)
        lastCategory = product.category;
    });

    return (
        <>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        </>
    );
}

export default ProductTable;