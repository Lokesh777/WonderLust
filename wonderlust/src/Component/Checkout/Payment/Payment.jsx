import { Box } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';

const Payment = () =>{

  const navigate=useNavigate()

  const onToken = (token, addresses) => {
            console.log(token, addresses);
            navigate("/")
          };


    return (
        
           <Box backgroundColor="#002631" p={"30"} paddingBottom={"10"} textAlign={"center"}>
            
                <StripeCheckout 
                    stripeKey="pk_test_m9Dp6uaJcynCkZNTNS1nDR8B00AQg2m6vJ"
                    token={onToken}
                    />
          
            </Box>   
            
    
    )
}

export default Payment;