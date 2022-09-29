import React, {ChangeEvent, FC, useEffect} from 'react';
import styles from './ProductForm.module.css';
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

interface ProductFormProps {
    active: boolean;
    setActive: (flag: boolean) => void;
}

const ProductForm: FC<ProductFormProps> = ({active, setActive}) => {
    const {errorProductCreate, successProductCreate} = useTypedSelector(state => state.productCreate);
    const {errorProductUpdate, successProductUpdate} = useTypedSelector(state => state.productUpdate);
    const {currentProduct} = useTypedSelector(state => state.productCurrent)
    const {flag} = useTypedSelector(state => state.productCreateFlag)
    const {updateProduct, createProduct, productAddToCurrent, productClearFields} = useActions();

    useEffect(() => {
        if ((errorProductCreate && !active) || (errorProductUpdate && !active)) {
            productClearFields()
        }
    })

    useEffect(() => {
        if (successProductCreate || successProductUpdate) {
            setActive(false)
            productClearFields()
        }
    })

    function handleCreate() {
        createProduct({
            name: currentProduct.name,
            desc: currentProduct.desc,
            price: currentProduct.price
        })
    }

    function handleUpdate() {
        updateProduct({...currentProduct})
    }

    return (
        <div className={styles.container}>
            {
                flag
                    ?
                    <h2>Update Product</h2>
                    :
                    <h2>Create Product</h2>
            }
            <label>Product Name</label>
            <Input
                value={currentProduct.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => productAddToCurrent({...currentProduct, name: e.target.value})}
                type="text"
                placeholder="Enter Product Name"
            />

            <label>Product Descriptions</label>
            <Input
                value={currentProduct.desc}
                onChange={(e: ChangeEvent<HTMLInputElement>) => productAddToCurrent({...currentProduct, desc: e.target.value})}
                type="text"
                placeholder="Enter Descriptions"
            />

            <label>Product Price</label>
            <Input
                value={currentProduct.price}
                onChange={(e: ChangeEvent<HTMLInputElement>) => productAddToCurrent({...currentProduct, price: parseInt(e.target.value)})}
                type="text"
                placeholder="Set Price"
            />
            {
                flag
                    ?
                    <Button onClick={handleUpdate}>
                        Update Product
                    </Button>
                    :
                    <Button onClick={handleCreate}>
                        Create Product
                    </Button>
            }
            {!flag && errorProductCreate && <p>{errorProductCreate}</p>}
            {flag && errorProductUpdate && <p>{errorProductUpdate}</p>}
        </div>
    );
};

export default ProductForm;