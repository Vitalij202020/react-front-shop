import $api from "../http";
import {IProductCreate, IProductUpdate} from "../redux/types/productTypes";
import {ProductApi} from "../constants/productApi";

export default class ProductService {

    static create(body: IProductCreate) {
        return $api.post('/product', body)
    }

    static update(body: IProductUpdate) {
        return $api.patch('/product', body)
    }

    static getOne(id: number) {
        return $api.get(`/product/${id}`)
    }

    static getAllWithDetails() {
        return $api.get('/product/statistics')
    }

    static getAll(indicator: string, param?: string) {
        switch (indicator) {
            case ProductApi.PRODUCT_LIST:
                return $api.get('/product')
            case ProductApi.PRODUCT_LIST_BY_BIG_PRICE:
                return $api.get('/product/sort?price=0')
            case ProductApi.PRODUCT_LIST_BY_SMALL_PRICE:
                return $api.get('/product/sort?price=1')
            case ProductApi.PRODUCT_LIST_BY_SEARCH:
                return $api.get(`/product/search?name=${param}`)
            default:
                return $api.get('/product')
        }
    }

    static addLike(id: number) {
        return $api.patch(`/product/${id}`)
    }

    static addToFavorite(id: number) {
        return $api.patch(`/product/favorite/${id}`)
    }

    static addToCart(id: number) {
        return $api.patch(`/user/cart/${id}`)
    }
}