"use client"

import useproduct from "src/hook/useproduct";

const ProdutsPageDetails = ({productId}:{productId: string}) => {

    const { data, isLoading, isError } = useproduct(productId);

    return (
        <div>
            
        </div>
    );
};

export default ProdutsPageDetails;