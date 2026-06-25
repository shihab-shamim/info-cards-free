import Card from "./Card";

const Theme6 = ({setAttributes,attributes,isBacked,premiumProps}) => {
    const {productsInfo}=attributes;
    

    
    return (
        <div className="productInfoCards">
           

            {/* {productsInfo.map(((item)) => {
                 <Card />
                
            })} */}
            {
                productsInfo.map((item,index)=><Card key={index} item={item} index={index} attributes={attributes} setAttributes={setAttributes} isBacked={isBacked} premiumProps={premiumProps} />)
            }

           
            
        </div>
    );
};

export default Theme6;