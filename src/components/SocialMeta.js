import { Helmet } from 'react-helmet-async';

function SocialMeta() {
    return (
        <div>
            <Helmet>
                <title>Social Meta</title>
                <meta name="description" content="The official website of IETE." />
                <meta property="og:title" content="IETE DIEMS Student Forum" />
                <meta property="og:description" content="The official website of IETE." />
                <meta property="og:image" content="./websitelogo.png" />
                <meta property="og:url" content="https://ietediems.in/" />
                <meta property="og:type" content="website" />
            </Helmet>
            {/* Your page content */}
        </div>
    );
}

export default SocialMeta;