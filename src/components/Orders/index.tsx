import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles ";
const orders: Order[] = [
    {
        _id: "6376ccc14a4548c88481469c",
        table: "1",
        status: "WAITING",
        products: [
            {
                product: {
                    name: "Duplo Smash",
                    imagePath: "1668729126897-burger-molho-especial.png",
                    price: 15,
                },
                quantity: 2,
                _id: "6376ccc14a4548c88481469d",
            },
            {
                product: {
                    name: "Coca-Cola",
                    imagePath: "1668717252629-coca-cola.png",
                    price: 5,
                },
                quantity: 2,
                _id: "6376ccc14a4548c88481469e",
            },
        ],
    },
];
export function Orders() {
    return (
        <Container>
            <OrdersBoard icon="🕛" title="Fila de espera" orders={orders} />
            <OrdersBoard icon="🍳" title="Empreparação" orders={[]} />
            <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
        </Container>
    );
}
