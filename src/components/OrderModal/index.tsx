import { Overlay } from "./styles";
interface OrderModalProps {
    visble: boolean;
}
export function OrderModal({ visble }: OrderModalProps) {
    if (!visble) {
        return null;
    }
    return <Overlay />;
}
