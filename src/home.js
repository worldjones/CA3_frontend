const Home = () => {
    return (
        <div>
            <h2>Welcome to worldjones.dk - This is how i set up my site </h2>
            <ul>
                <li>
                    First i changed the URL in settings.js to match my website
                </li>
                <li>
                    I added an address entityclass and gave it an id, housenumber and streatname,
                    then added a matching DTO.      
                </li>
                <li>
                    I fetched the address in apiFacade and made some technical / visual changes.
                </li>
                <div class="lineHorizontal__container">
                    <div class="lineHorizontal"></div>
                </div>
                </ul>
        </div>
    )
};

export default Home;