import React from 'react'
import { data } from './Data'
import { useParams } from 'react-router-dom'

function Details() {
    let {id}=useParams()
    let ss=data.find(a=>a.id==id)
  return (
    <>
    <div className="py-4">
    <div className="container">
        <h2 className='fw-bold'>Details of {ss.category}</h2>
        <div className="shadow p-4 mb-3 bg-body rounded">
        <h3 className='fw-bold bg-primary text-center p-2 rounded'>{ss.country}</h3>
        <img className='w-100' src={ss.image_url} alt="" />
        <div className='d-flex justify-content-between py-2'>
            <p className='fw-bold bg-primary p-2 rounded'>Duration:  {ss.duration}</p>
            <p className='fw-bold bg-primary p-2 rounded'>Ratind:  {ss.rating}</p>
        </div>
        <hr />
        
        <h5 className='text-center py-3 fw-bold'>{ss.description}</h5>
        <p>{ss.about}</p>
        </div>
        <div className='d-flex justify-content-center py-2'>
        <button className='btn btn-danger '>BOOK NOW</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Details