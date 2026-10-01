import Catalog from './components/Catalog'

export default function App () {
  const productsData = [
    {
      id:1,
      name: 'Bread',
      price: 100,
      discount: 5,
      desc: 'Just Bread.',
      img: '/images/images.jpeg'
    },
    {
      id:2,
      name: 'Milk',
      price: 80,
      discount: 1,
      desc: 'Just Milk.',
      img: 'images/260807_MALK_38_Kitchen_Warm_Milk_PEDENMUNK_6689_V1.webp'
    },
    {
      id:3,
      name: 'Apple',
      price: 160,
      discount: 10,
      desc: 'Just Apple.',
      img: 'images/istockphoto-1439436349-612x612.jpg'
    },
    {
      id:4,
      name: 'Banans',
      price: 120,
      discount: 0,
      desc: 'Just Banana.',
      img: '/images/images(1).jpeg'
    },
  ]
  return (
    <div>
      <Catalog products={productsData} />
    </div>
  )
}