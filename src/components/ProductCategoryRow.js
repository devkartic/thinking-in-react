function ProductCategoryRow({product}) {
    return(
        <>
            <tr>
                <td className="fw-bold" colSpan={2}>{product.category}</td>
            </tr></>
    );
}

export default ProductCategoryRow;