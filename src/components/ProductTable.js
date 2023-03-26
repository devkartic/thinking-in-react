function ProductTable({products}) {

    const productListView = products.map((product, index) => {
        return (
            <tr key={index}>
                <th scope="row">{++index}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    })

    return (
        <>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                {productListView}
                </tbody>
            </table>
        </>
    );
}

export default ProductTable;