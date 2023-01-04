import styled from "styled-components";
export const Overlay = styled.div`
    left: 0;
    top: 0px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(4.5px);
    width: 100%;
    height: 100%;
    position: fixed;
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const ModalBody = styled.div`
    background:#fff;
    width:480px;
    padding:32px;
    border-radius:8px;
  header{
    display:flex;
    align-items:center;
    justify-content:space-between;
    strong{
        font-size:24px;

    }
    button{
        line-height:0;
        border:0;
        background:transparent
    }
  }
  .status-conatiner{
    margin-top:32px;
     small{
        font-size:14px;
        opacity:0.8;
     }
     div{
        display:flex;
        align-items:center;
        gap:8px;
        margin-top:8px
     }
  }
`;

export const OrderDetails = styled.div`
    margin-top:32px;
    > strong{
        font-weight:500;
        font-size:14px;
        opacity:0.8;
    }
.order-items{
     margin-top:16px;
     & + .item {
        margin-top:16px;
     }
     .item{
        display:flex;
        img{
            border-radius:6px;
        }
        .quantity{
            font-size:14px;
            color:#666;
            display:block;
            min-width:20px;
            margin-left:12px;
        }
        .product-details{
            margin-left:4px;
           strong{
            display:block;
            margin-bottom:4px;
           }
           span{
            font-size:14px;
            color:#666;
           }

        }
     }
}
`;
