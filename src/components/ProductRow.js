function ProductRow({product}) {
    let stock_level_identify = 'text-danger'
    if(product.stocked) stock_level_identify = 'text-primary'
    return(
        <>
            <tr>
                <td className={stock_level_identify}>{product.name}</td>
                <td>{product.price}</td>
            </tr></>
    );
}

export default ProductRow;