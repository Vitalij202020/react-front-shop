import React, {useEffect} from 'react';
import Header from "../../components/UI/Header/Header";
import styles from './ProductsPage.module.css';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Product from "../../components/product/Product/Product";
import {ProductApi} from "../../constants/productApi";

const ProductsPage = () => {
    const {products} = useTypedSelector(state => state.productList)
    const {getProductList} = useActions();

    useEffect(() => {
        getProductList(ProductApi.PRODUCT_LIST)
    }, [])

    return (
        <div className='container'>
            <Header/>
            <main className={styles.main}>
                <div className={styles.select}>
                    <span className={styles.sort}>Sort By Price: </span>
                    <span
                        className={styles.btn}
                        onClick={() => getProductList(ProductApi.PRODUCT_LIST_BY_SMALL_PRICE)}
                    >
                        Smallest
                    </span>
                    <span
                        className={styles.btn}
                        onClick={() => getProductList(ProductApi.PRODUCT_LIST_BY_BIG_PRICE)}
                    >
                        Largest
                    </span>
                </div>
                <div className={styles.products}>
                    {
                        products?.map(product => (
                            <Product key={product.id} product={product}/>
                        ))
                    }
                </div>

            </main>
        </div>
    );
};

export default ProductsPage;