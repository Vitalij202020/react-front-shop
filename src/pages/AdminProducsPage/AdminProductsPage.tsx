import React, {useEffect, useState} from 'react';
import Header from "../../components/UI/Header/Header";
import styles from "./AdminProductsPage.module.css";
import {BsPlusLg} from "react-icons/bs";
import Modal from "../../components/UI/Modal/Modal";
import {useActions} from "../../hooks/useActions";
import {productFlagSwitcher} from "../../redux/actions/productActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import ProductForm from "../../components/product/ProductForm/ProductForm";
import AdminProduct from "../../components/product/AdminProduct/AdminProduct";

const AdminProductsPage = () => {
    const [active, setActive] = useState(false);
    const {products} = useTypedSelector(state => state.productListDetails)
    const {productAddToCurrent, getProductDetailsList, productFlagSwitcher} = useActions();

    useEffect(() => {
        getProductDetailsList()
    }, [])

    function handleCreateProduct() {
        productFlagSwitcher(false)
        productAddToCurrent({name: '', desc: '', price: 0})
        setActive(true)
    }

    return (
        <div className='container'>
            <Modal active={active} setActive={setActive}>
                <ProductForm active={active} setActive={setActive}/>
            </Modal>
            <Header/>
            <main className={styles.main}>
                <main className={styles.main}>
                    {
                        products?.map(product => (
                            <AdminProduct
                                key={product.id}
                                product={product}
                                setActive={setActive}
                            />
                        ))
                    }
                </main>
                <div
                    onClick={handleCreateProduct}
                    className={styles.addBtn}
                >
                    <BsPlusLg/>
                </div>
            </main>
        </div>
    );
};

export default AdminProductsPage;