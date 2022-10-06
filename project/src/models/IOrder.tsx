export interface IOrder {
    orderList: OrderList[] | boolean;
}

export interface OrderList {
    id:              string;
    sirket_id:       string;
    must_id:         string;
    urun_id:         string;
    siparis_bilgisi: string;
    eklenme_tarihi:  Date;
    id_sirket:       string;
    id_category:     string;
    urun_adi:        string;
    kisa_aciklama:   string;
    aciklama:        string;
    tarih:           Date;
    fiyat:           string;
    satis_tipi:      string;
    kampanya:        string;
    kampanya_baslik: string;
    kampanya_detay:  string;
    adi:             string;
    normal:          string;
    thumb:           string;
}
