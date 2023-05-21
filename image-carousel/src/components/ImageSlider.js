import ImageData from "./ImageData"
import './ImageSlider.css'

const ImageSlider = () => {
    console.log(ImageData)
    
    return(
        <section className='slider'>
            
            {ImageData.map((data,index)=>{
                return(
                    <div className='slide' key={index} >
                        <div>
                            <img alt={data.title} src={data.image}></img>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider