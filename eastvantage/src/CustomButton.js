const CustomButton = ({ fetchUserInfo, setLoadingInfo }) => {

    const handleClick = () => {
        setLoadingInfo(true);
        fetchUserInfo();
    }

    return <button className="Fetch-button" type='submit' onClick={handleClick}>Fetch User Info</button>
}

export default CustomButton