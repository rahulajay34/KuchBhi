import React, { useEffect, useState } from 'react'
import "./linkValidator.css"
import avatarOne from '../../assets/avatarOne.webp'
import bannerImg from "../../assets/bannerImg.png"


const LinkValidator = () => {

    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleString('en-US', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()} at ${currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;

    const [url, setUrl] = useState('https://www.seohorizon.com/design/font-identifier/');
    const [metadata, setMetadata] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setUrl(e.target.value);
    };

    const handleFetchMetadata = async () => {
        setLoading(true);

        try {
            const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const twitterTitle = doc.querySelector('meta[name="twitter:title"]');
            const twitterDescription = doc.querySelector('meta[name="twitter:description"]');
            const twitterImage = doc.querySelector('meta[name="twitter:image"]');

            if (twitterTitle && twitterDescription && twitterImage) {
                setMetadata({
                    title: twitterTitle.getAttribute('content'),
                    description: twitterDescription.getAttribute('content'),
                    image: twitterImage.getAttribute('content')
                });
            } else {
                throw new Error('Twitter metadata not found');
            }
        } catch (error) {
            console.error('Error fetching metadata:', error);
            handleFetchLinkPreview();
        } finally {
            setLoading(false);
        }
    };

    const handleFetchLinkPreview = () => {
        setLoading(true);

        fetch(`http://api.linkpreview.net/?key=5efd7289b504146d46797c0552172fe6&q=${encodeURIComponent(url)}`)
            .then((response) => response.json())
            .then((data) => setMetadata({
                title: data.title,
                description: data.description,
                image: data.image
            }))
            .catch((error) => console.error('Error fetching link preview:', error))
            .finally(() => setLoading(false));
    };


    useEffect(()=>{
        handleFetchMetadata()
    },[])

    const handleClear = () => {
        setUrl('')
    }


    return (
        <div className='secondSection'>
            <div className="inputDiv">
                <input type="text" value={url} onChange={handleInputChange} placeholder='Enter URL' />
                <div className='buttonDiv'>
                    <button className='checkButton' onClick={handleFetchMetadata}>Check</button>
                    <button className='clearButton' onClick={handleClear}>Clear</button>
                </div>
            </div>

            {/* Twitter card  */}

            <div className='twitterCard'>
                <div className='avatarCard'>
                    <img src={avatarOne} alt="" />
                    <div>
                        <p className='userName'>User Name</p>
                        <p>@username</p>
                    </div>
                </div>

                <p className='textContent'>Just sharing this</p>

                {loading && <p>Loading...</p>}

                {!loading && metadata && (
                    <div className="linkCard">
                        <img src={metadata.image} alt="" />
                        <div className="linkContent">
                            <h4>{metadata.title}</h4>
                            <p>{metadata.description}</p>
                        </div>
                    </div>
                )}
                <p className='date'>{formattedDate}</p>

                <div className="bottomSection">
                    <div className="iconSection comment">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                        </svg>
                        2,555
                    </div>
                    <div className="iconSection repost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                        </svg>
                        10.5K
                    </div>
                    <div className="iconSection like">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        44.6k
                    </div>
                    <div className="iconSection view">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                        </svg>
                        1.4M
                    </div>
                    <div className="iconSection share">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkValidator