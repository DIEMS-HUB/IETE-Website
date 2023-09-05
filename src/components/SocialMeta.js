import React from 'react';
import { Helmet } from 'react-helmet-async';

function SocialMeta() {
    return (
        <div>
            <Helmet>
                <title>IETE Description</title>
                <meta name="description" content="Description of your IETE page" />
                <meta property="og:title" content="IETE Website Title" />
                <meta property="og:description" content="Description of your IETE website" />
                <meta property="og:image" content="URL to the image you want to display" />
                <meta property="og:url" content="URL of your IETE website" />
                <meta property="og:type" content="website" />
            </Helmet>
            {/* Your IETE page content */}
        </div>
    );
}

export default SocialMeta;
