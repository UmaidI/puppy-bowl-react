const PuppiesDetails = ({userDetails, setShowList}) => {
  return (
    <>
    <img src={userDetails.imageUrl} alt='a cute doggo'
    height="250" 
    width="250"  />
    <h2>{userDetails.name}</h2>
    <h3>{userDetails.teamId}</h3>
    <button onClick={() => {setShowList(true)}}>Back</button>
    </>
  )
}
export default PuppiesDetails