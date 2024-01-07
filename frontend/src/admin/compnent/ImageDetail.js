const ImageDetail = ({image}) =>{
    console.log(image);
    const imageData = image;
    return (
        <div>
            {
                imageData.map((data,index)=>{
                  return <img src={'http://localhost:11000/upload/'+data} key={index} height="100" width="100"/>
                })
            }
        </div>
      )
    }
export default ImageDetail;