export interface IBasket {
    order: BasketOrder[];
}

export interface BasketOrder {
    durum: boolean;
    mesaj: string;
}
