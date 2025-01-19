
function Avatar({image, isNew}) {
  return (
    <div className="avatar">
      <img className="photo" src={image} alt="avartar"/>
        {isNew && (<span className="newTag">new</span>)}
    </div>
  )
}

export default Avatar
