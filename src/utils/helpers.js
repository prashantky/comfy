export const formatPrice = (number) => {
    const newFormate=Intl.NumberFormat('en-US',{
        style:"currency",
        currency:"USD"

    }).format(number/100)
    return newFormate
}

export const getUniqueValues = () => {}
