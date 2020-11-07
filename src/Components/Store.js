import React from 'react';
import Products from './Product';
import  "./Store.css"
import { useStateValue } from './StateProvider';

export default function Store() {
    const [{basket},dispatch]=useStateValue();
    return (
         <div className="store">
      <div className="store__container">
        <div className="store__row">
          <Products
            id="1"
            title="Maggi Combo Packs"
            price={29.99}
            image="https://st1.bgr.in/wp-content/uploads/2015/11/maggi-noodles-stock-image.jpg"
            rating={3}
          />
          <Products
            id="2"
            title="India Gate Basmati Rice Dubar 5 Kg - Buy Online"
            price={29.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstorage.googleapis.com%2Fzopnow-static%2Fimages%2Fproducts%2F320%2Findia-gate-basmati-rice-dubar-v-5-kg.png&f=1&nofb=1.png"
            rating={4}
          />
          <Products
            id="6"
            title="Fresh veggi Basket"
            price={19.99}
            image="https://www.telegraph.co.uk/content/dam/food-and-drink/2018/06/20/Veg_trans_NvBQzQNjv4Bqul3YgLXf2lEf3afmzmy4CHMT9HEIQzXrohIUnOkGrQA.jpg?imwidth=450.jpg"
            rating={4}
          />
        </div>
        <hr/>
        <div className="store__row">
          <Products
            id="3"
            title="Tamato Ketchup"
            price={76.00}
            image="https://pngimg.com/uploads/ketchup/ketchup_PNG48.png"
            rating={5}
          />
          <Products
            id="4"
            title="Dare RealFruit Gummies Medley"
            price={180}
            image="https://i5.walmartimages.ca/images/Enlarge/830/_r2/0005565321830_R2.jpg"
            rating={4}
          />
          <Products
            id="5"
            title="Real Fruit Power Mixed Fruit, 1L"
            price={99}
            image="https://5.imimg.com/data5/OI/VQ/GLADMIN-34566127/real-fruit-power-mixed-fruit-500x500.png"
            rating={1}
          />
          
        </div>
        <hr/>
        <div className="store__row">
          <Products
            id="6"
            title="1.2 Litre Thumbs Up, Juices, Soups & Soft Drinks"
            price={79}
            image="https://5.imimg.com/data5/CA/HQ/MY-10892830/1-litre-thumbs-up-500x500.jpg"
            rating={4}
          />
          <Products
            id="6"
            title="Tata Salt :: tata salt lite | Salt, Health, Food"
            price={29.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F09%2F79%2Fb1%2F0979b1fc9803e2ee173ed16883135a6a.png&f=1&nofb=1.png"
            rating={4}
          />
          <Products
            id="6"
            title="Eating Cheaper: Peanut Butter Time!"
            price={110}
            image="http://2.bp.blogspot.com/-8aXXJLg5lR8/T_8stAcntOI/AAAAAAAAAFs/hkJ_P1RyotA/s1600/peanut+butter.JPG"
            rating={4}
          />
         
        </div>
        <div className="store__row">
             <Products
            id="6"
            title="Brinjal Health Benefits & Cooking Methods - Ayurveda"
            price={29.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.astrogle.com%2Fimages%2F2015%2F01%2Fbrinjal.jpg&f=1&nofb=1.jpg"
            rating={4}
          />
          <Products
            id="6"
            title="Vegetable of the month: Cauliflower - Harvard Health"
            price={29.99}
            image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic6.businessinsider.com%2Fimage%2F52c585f16bb3f7264ad842b6-800-%2Fcauliflower-3.jpg&f=1&nofb=1.jpg"
            rating={4}
          />
            <Products
            id="6"
            title="Mesra Grocery Store in India"
            price={29.99}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fasiangrocery.nl%2Fwp-content%2Fuploads%2F2019%2F03%2Floki_icon.jpg&f=1&nofb=1.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
    )
}
