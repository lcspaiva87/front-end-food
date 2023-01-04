import { ModalBody, OrderDetails, Overlay } from "./styles";
import closeModal from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrent";
interface OrderModalProps {
    visble: boolean;
    order: Order | null;
}
export function OrderModal({ visble = true, order }: OrderModalProps) {

    if (!visble || !order) {
        return null;
    }
    const priceFormat = new Intl.NumberFormat("pt-br",{style:"currency",currency:"BRL"}).format;
    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Mesa</strong>
                    <button type="button">
                        <img src={closeModal} alt="Close Modal" />
                    </button>
                </header>
                <div className="status-conatiner">
                    <small>Status do Pedido</small>
                    <div>
                        <span>
                            {order.status === "WAITING" && "⏲"}
                            {order.status === "IN_PRODUCTION" && "👨‍🍳"}
                            {order.status === "WAITING" && "✅ "}
                        </span>
                        <strong>
                            {order.status === "WAITING" && "Fila de espera"}
                            {order.status === "IN_PRODUCTION" && "Em produção"}
                            {order.status === "WAITING" && "Pronto!"}
                        </strong>
                    </div>
                </div>
                <OrderDetails>
                    <strong>Itens</strong>
                    <div className="order-items">
                        {order.products.map(({_id,product,quantity}:any)=>(
                            <div className="item" key={_id}>
                                <img
                                    src={product.imagePath}
                                    alt={product.name}
                                    width="56"
                                    height="28.51"
                                />
                                <span className="quantity">{quantity}x</span>
                                <div className="product-details">
                                    <span>{product.name}</span>
                                    <span>{formatCurrency(product.price)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </OrderDetails>
            </ModalBody>
        </Overlay>
    );
}
