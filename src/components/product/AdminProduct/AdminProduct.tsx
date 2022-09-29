import React, {FC} from 'react';
import styles from "./AdminProduct.module.css";
import {useActions} from "../../../hooks/useActions";
import Button from "../../UI/Button/Button";
import {IProductWithDetails} from "../../../redux/types/productTypes";

interface AdminProductProps {
    product: IProductWithDetails;
    setActive: (flag: boolean) => void;
}

const AdminProduct: FC<AdminProductProps> = ({product, setActive}) => {
    const {productAddToCurrent, productFlagSwitcher} = useActions();

    function handleClick() {
        productFlagSwitcher(true)
        productAddToCurrent(product)
        setActive(true)
    }

    return (
        <div className={styles.card}>
            <img
                src="https://sekonomim.com/wp-content/uploads/2017/07/lpo.jpg"
                alt="product"
            />
            <div className={styles.container}>
                <h4><b>{product.name}</b></h4>
                <p>{product.desc}</p>
                <p className={styles.price}>{product.price}$</p>
                <p>Likes: {product.likes.length}</p>
                <p>Favorite: {product.users.length}</p>
                <p>In Users Carts: {product.inUserCart.length}</p>
                <Button
                    onClick={handleClick}
                >
                    Edit
                </Button>
            </div>
        </div>
    );
};

export default AdminProduct;