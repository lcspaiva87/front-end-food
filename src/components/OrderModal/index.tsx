import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";
import closeModal from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrent";
import { useEffect } from "react";
interface OrderModalProps {
    visble: boolean;
    order: Order | null;
    onClose: () => void;
}
export function OrderModal({ visble, order, onClose }: OrderModalProps) {
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }
        }
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    if (!visble || !order) {
        return null;
    }
    const totalPrice = order.products.reduce((total, { product, quantity }) => {
        return total + product.price * quantity;
    }, 0);
    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Mesa {order.table}</strong>
                    <button type="button" onClick={onClose}>
                        <img src={closeModal} alt="Icon to close" />
                    </button>
                </header>

                <div className="status-container">
                    <small>Status do Pedido</small>
                    <div>
                        <span>
                            {order.status === "WAITING" && "🕓"}
                            {order.status === "IN_PRODUCTION" && "👩‍🍳"}
                            {order.status === "DONE" && "✔"}
                        </span>
                        <strong>
                            {order.status === "WAITING" && "Fila de Espera"}
                            {order.status === "IN_PRODUCTION" &&
                                "Em Preparação"}
                            {order.status === "DONE" && "Pronto"}
                        </strong>
                    </div>
                </div>
                <OrderDetails>
                    <div className="order-items">
                        <strong>Itens</strong>
                        {order.products.map(({ _id, product, quantity }) => (
                            <div className="item" key={_id}>
                                <img
                                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                                    alt={product.name}
                                    width="56"
                                    height="30"
                                />

                                <span className="quantity">{quantity}x</span>

                                <div className="product-details">
                                    <strong>{product.name}</strong>
                                    <span>{formatCurrency(product.price)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="total">
                        <span>Total</span>
                        <strong>{formatCurrency(totalPrice)}</strong>
                    </div>
                </OrderDetails>
                <Actions>
                    <button type="button" className="primary">
                        <span>👩‍🍳</span>
                        <span>Iniciar Produção</span>
                    </button>
                    <button type="button" className="secundary">
                        Cancelar Pedido
                    </button>
                </Actions>
            </ModalBody>
        </Overlay>
    );
}
