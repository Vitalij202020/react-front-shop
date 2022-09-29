import React, {FC} from 'react';
import styles from './Product.module.css';
import {AiFillLike} from 'react-icons/ai';
import {AiOutlineLike} from 'react-icons/ai';
import {MdFavorite} from 'react-icons/md';
import {MdOutlineFavoriteBorder} from 'react-icons/md';
import {BsCartPlus} from 'react-icons/bs';
import {BsCartFill} from 'react-icons/bs';
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {IProduct} from "../../../redux/types/productTypes";

interface ProductProps {
    product: IProduct;
}

const Product: FC<ProductProps> = ({product}) => {
    const {userInfo} = useTypedSelector(state => state.userLogin)
    const {productAddLike, productAddToCart, productAddToFavorite} = useActions()

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
            </div>
            <div className={styles.footer}>
                <div className={styles.icon} onClick={() => productAddLike(product.id)}>
                    {
                        userInfo?.productLikes.some(item => item.id === product.id)
                            ?
                            <AiFillLike/>
                            :
                            <AiOutlineLike/>
                    }
                </div>
                <div className={styles.icon} onClick={() => productAddToCart(product.id)}>
                    {
                        userInfo?.cart.some(item => item.id === product.id)
                            ?
                            <BsCartFill/>
                            :
                            <BsCartPlus/>
                    }
                </div>
                <div className={styles.icon} onClick={() => productAddToFavorite(product.id)}>
                    {
                        userInfo?.favorites.some(item => item.id === product.id)
                            ?
                            <MdFavorite/>
                            :
                            <MdOutlineFavoriteBorder/>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;