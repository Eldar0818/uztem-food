import React, { useEffect } from 'react'
import {
    PayPalButtons,
    usePayPalScriptReducer
  } from "@paypal/react-paypal-js";

const ButtonWrapper = ({ currency, showSpinner, makeAnOrder, style, amount, productDetails }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (detail) {
                        console.log(detail);
                        const shipping = detail.purchase_units[0].shipping
                        makeAnOrder({
                            customer: shipping.name.full_name,
                            address: shipping.address.address_line_1,
                            total: amount,
                            productInfo: productDetails,
                            status: 0,
                            method: 1
                          })
                    });
                }}
            />
        </>
    );
}

export default ButtonWrapper