interface Props {
    img?:string;
    name:string;
    price: number;
    quantity:number;
};  

const OrderItem: React.FC<Props> = ({img, name, price, quantity}) => {
    return (
        // <div className="w-5/6 h-3/18 m-auto bg-tertiary-orange p-1 mb-4 rounded-lg">
        //     <div className="flex items-center justify-between w-full h-full bg-white rounded-lg overflow-hidden">
        //       <img src={img} className="h-full" />
        //       <div>Burger wołowy z bekonem</div>
        //       <div>39,99 zł</div>
        //       <div>2 szt</div>
        //       <div className="pr-4 text-red-400 font-bold text-2xl pb-2">x</div>
        //     </div>
        //   </div>

        //   <div className="relative w-5/6 h-3/18 m-auto mb-4  p-1 z-10">
        //     <div className="absolute top-0 left-0 w-12 h-12 bg-tertiary-orange rounded-lg" />
        //     <div className="absolute bottom-0 right-0 w-12 h-12 bg-tertiary-orange rounded-lg" />
        //     <div className="relative flex items-center justify-between w-full h-full bg-white rounded-lg z-10 border border-primary-gray overflow-hidden">
        //       <img src={img} className="h-full" />
        //       <div>Burger wołowy z bekonem</div>
        //       <div>39,99 zł</div>
        //       <div>2 szt</div>
        //       <div className="pr-4 text-red-400 font-bold text-2xl pb-2">x</div>
        //     </div>
        //   </div>

          <div className="relative w-5/6 h-3/18 m-auto mb-4  p-1 z-10">
            <div className="absolute top-0 left-0 w-64 h-12 bg-tertiary-orange rounded-lg" />
            <div className="absolute bottom-0 right-0 w-64 h-12 bg-tertiary-orange rounded-lg" />
            <div className="relative flex items-center justify-between w-full h-full bg-white rounded-lg z-10 overflow-hidden">
              <img src={img} className="h-full" />
              <div className="w-1/3 text-center">{name}</div>
              <div className="font-bold">{price} zł</div>
              <div>{quantity} szt</div>
              <div className="pr-4 text-red-400 font-bold text-2xl pb-2">x</div>
            </div>
          </div>
    )
}
export default OrderItem;