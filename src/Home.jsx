import React from 'react'
import { category, data } from './Data'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <>
<section>
    <div className="container">
        <div className="  bg-primary-subtle p-2 rounded">
        <ul className=' d-flex justify-content-end gap-4'>
        {category.map(a=>(

            <li className='fw-bold list-style-none'key={a}>
                <Link to={`/category/${a}`} className='text-decoration-none text-dark'>{a}</Link>
            </li>
            
        ))}
        </ul>
        </div>
    </div>
</section>

   <section className='my-5'>
   <div className="container">
    <div className="row">
        <div className="col-lg-6">
<img className='w-100 rounded' src="https://travel.com/wp-content/uploads/2025/04/Lusaka-Zambia-Best-Things-to-Do-Top-Picks-400x250.webp" alt="" />
        </div>
        <div className="col-lg-6">
            <h1>Welcome to our website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ad doloribus ut facere aut reprehenderit amet adipisci iste, rem quas, nostrum dolor excepturi aliquid vero delectus molestias aliquam ea sunt?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae possimus cupiditate exercitationem, ex recusandae natus. Ex officiis sint numquam modi labore, odit accusantium quasi ipsum accusamus! Doloremque quos beatae possimus provident! A, neque perspiciatis nesciunt dolorum magni incidunt non quibusdam nobis voluptas laudantium voluptatum fuga assumenda quae eaque, temporibus labore?</p>
            <Link to="/category"  className='text-decoration-none text-dark'><button className="btn btn-primary">Get Started</button></Link>
            
            
        </div>
    </div>
   </div>
   </section>

<section className='py-5'>
    <div className="container p-2">
        <div className="shadow bg-body rounded p-3 mb-5 bg-body rounded">
            <h2 className='fw-bold text-center'>About TRAVEL.COM®</h2>
            <hr />
            <p className='py-2'>Welcome to TRAVEL.COM®, your ultimate travel companion. Our mission is to make travel planning seamless and enjoyable, offering a wide range of services from flights and hotels to exciting tours and cruises. Whether you’re a seasoned traveler or planning your first trip, our platform provides the tools and inspiration you need to explore the globe with confidence and ease.</p>
            <p>Embark on a journey to unforgettable destinations with our comprehensive travel services. From booking flights to finding the perfect hotel, TRAVEL.COM® is your gateway to the world.</p>
        </div>
    </div>
</section>


<section>
    <div className="container">
        <div className="py-4">
        <h4 className='fw-bold'>Flights</h4>
        <p>Find the best deals on flights to destinations worldwide. Our platform makes it easy to compare prices and book your tickets effortlessly.</p>
        </div>
        <div className="py-4">
        <h4 className='fw-bold'>Hotels</h4>
        <p>Discover accommodations that suit your style and budget. From luxury resorts to cozy inns, we help you find the perfect place to stay.</p>
        </div>
        <div className="py-4">
        <h4 className='fw-bold'>Tours & Activities</h4>
        <p>Enhance your travel experience with curated tours and activities. Explore local culture, history, and adventure tailored to your interests.</p>
        </div>
        <div className="py-4">
        <h4 className='fw-bold'>Cruises</h4>
        <p>We love cruises and hope that you will, too. Choose from many destinations worldwide — whether it be an ocean voyage to exotic locations or a leisurely river cruise along some of the great rivers of the world!

</p>
        </div>
    </div>
</section>
<section className='my-5'>
    <div className="container">
        <div className="shadow p-2 mb-3 bg-body rounded">
    <h1 className='fw-bold text-center bg-primary rounded p-2'>Escape the Ordinary — Discover the Extraordinary 🌍</h1>
<p className='text-center p-2'>Pack your bags and let the world show you wonders you've only dreamed of. Your adventure starts here!</p>
<div className='align-items-center d-flex justify-content-center p-2'>
<button className='btn btn-danger'>Book Your Journey</button>
</div>
</div>

    </div>
</section>


<section className='my-5'>
    <div className="container">
        <div className="shadow">
        <img className='w-100 rounded' src="https://images.unsplash.com/photo-1544091441-9cca7fbe8923?ixid=M3w1ODkyNzF8MHwxfHNlYXJjaHw0fHxmYW1pbHklMjB0cmF2ZWxpbmd8ZW58MHwwfHx8MTc0MjU5MjI4OHww&ixlib=rb-4.0.3&fm=webp&fit=crop&crop=entropy&w=1080&h=600&q=20&dpr=2" alt="" />
        </div>
        <div className="row py-4">
            <div className="col-lg-6">
                <h2 className='fw-bold'>Embark on Your Next Adventure with TRAVEL.COM®</h2>
            </div>
            <div className="col-lg-6">
                <h4>Discover the world with ease and excitement. Start planning your dream getaway today with our comprehensive travel services.</h4>
                <button className='btn btn-primary'>Plan your toure now</button>
            </div>
        </div>
    </div>
</section>


   <section className='my-5'>
    <div className="container">
        <h2 className='bg-info-subtle text-center p-2 rounded'>place you want to visit</h2>
     <div className="row">
        {data.map(a=>(
 <div className="col-lg-3 py-4" key={a.id}>
 <div className="shadow p-3 mb-3 bg-body rounded nn">
<Link to={`/details/${a.id}`} className='text-decoration-none text-dark'>
<img className='w-100' src={a.image_url} alt="" />
<p>{a.title}</p>
<p>Country: {a.country}</p>
<p>Price: {a.price}</p>
<p>Destination: {a.destination}</p>
</Link>
<div className='d-flex  p-2'>
<button className='btn btn-1 bg-primary'>BOOK NOW</button>
</div>
</div>
</div>
        ))}
       
          </div>
          </div>
   </section>
   </>
  )
}

export default Home