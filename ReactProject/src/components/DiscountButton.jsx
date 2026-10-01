export default function DiscountButton({ generalDiscount, setGeneralDiscount }) {
    const handleClick = () => {
        setGeneralDiscount(generalDiscount + 1)
    }
    return (
        <button onClick={handleClick}>
            Increase Discout for 1%
        </button>
    )
}