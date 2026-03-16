import { usePizzaOfTheDay } from './usePizzaOfTheDay';

const intl = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
});

const PizzaOfTheDay = () => {
  const pizzaOfTheDay = usePizzaOfTheDay();

  if (!pizzaOfTheDay) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pizza-of-the-day">
      <h2>Pizza of the Day</h2>
      <div className="pizza-of-the-day">
        <h3>{pizzaOfTheDay.name}</h3>
        <p> {pizzaOfTheDay.description}</p>
        <p> {intl.format(pizzaOfTheDay.sizes.S)}</p>
      </div>
      <img className="pizza-of-the-day-image" src={pizzaOfTheDay.image} alt={pizzaOfTheDay.name} />
    </div>
  );
};

export default PizzaOfTheDay;
