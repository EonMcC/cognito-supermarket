import React, { useContext, useEffect } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Basket from './Basket';
import { BasketContext, BasketProvider } from '../../context/BasketProvider';
import { Product } from '../product-list/ProductList';


const SetContext: React.FC<{context: Product[]}> = ({context}) => {
  const { setBasket } = useContext(BasketContext); 
  
  useEffect(() => {
    setBasket(context);
  }, [context])

  return (<></>)
}

const products = [
  {
    id: 1,
    name: "Gala Apples (5 lbs)",
    description: "Crisp and delicious apples for a healthy snack.",
    price: 3.49
  },
  {
    id: 2,
    name: "UK-Grade Ground Beef (1 lb)",
    description: "High-quality ground beef for your favorite recipes.",
    price: 5.99
  },
  {
    id: 3,
    name: "Organic Milk (1 gallon)",
    description: "Nutrient-rich organic milk for the family.",
    price: 1.99
  }
]

const onClose = jest.fn()

describe('Basket tests', () => {

  test('renders a primary checkout button', () => {
    render(
      <Basket onClose={onClose}/>
    );
    const el = screen.getByText('Checkout')
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('primary-btn');
  });

  test('renders the correct total', () => {
    render(
      <BasketProvider>
        <SetContext context={products} />
        <Basket onClose={onClose}/>
      </BasketProvider>
    );
    const el = screen.getByText('Total: £11.47')
    expect(el).toBeInTheDocument();
  });

  test('removes a product when trash icon is clicked', () => {
    render(
      <BasketProvider>
        <Basket onClose={onClose}/>
      </BasketProvider>
    );
    const trashBtn = screen.getAllByTestId('trash-btn')[0];
    fireEvent.click(trashBtn);
    const el = screen.queryByText('Gala Apples (5 lbs)');
    expect(el).not.toBeInTheDocument();
  });

  test('updates total after a product is removed', () => {
    render(
      <BasketProvider>
        <Basket onClose={onClose}/>
      </BasketProvider>
    );
    const el = screen.getByText('Total: £7.98')
    expect(el).toBeInTheDocument();
  });

})
