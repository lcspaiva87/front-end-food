import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";
interface OrdersBoardProps {
    icon: string;
    title: string;
    orders?: Order[];
}
export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedeOrder,setSelectedeOrder] = useState<null|Order>(null);
    function handleOpenModal(order:Order) {
        setIsModalVisible(true);
        setSelectedeOrder(order);
    }
    return (
        <Board>
            <OrderModal
                visble={isModalVisible}
                order={selectedeOrder}
            />;
            <header>
                <span>{icon}</span>
                <strong>{title}</strong>
                <span>{orders?.length} </span>
            </header>
            {orders?.length > 0 && (
                <OrdersContainer>
                    {orders?.map((orders: Order) => (
                        <button
                            type="button"
                            key={orders._id}
                            onClick={() => handleOpenModal(orders)}
                        >
                            <strong>Mesa {orders.table}</strong>
                            <span>{orders.products.length}</span>
                        </button>
                    ))}
                </OrdersContainer>
            )}
        </Board>
    );
}
