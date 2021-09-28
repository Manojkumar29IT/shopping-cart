import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId =
    '713100788835-kutdjmmb48vhkpgm7li7kev41rrlo8a3.apps.googleusercontent.com';

export interface OAuthLoginProps {
    isOnDashboard: CallableFunction
}

const OAuthLogin: React.FC<OAuthLoginProps> = ({ isOnDashboard }) => {
    const onSuccess = (res: any) => {
        isOnDashboard();
        refreshTokenSetup(res);
    };

    const onFailure = (res: any) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login`
        );
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default OAuthLogin;