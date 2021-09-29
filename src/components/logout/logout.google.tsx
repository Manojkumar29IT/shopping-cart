import { GoogleLogout } from 'react-google-login';

const clientId =
    '713100788835-kutdjmmb48vhkpgm7li7kev41rrlo8a3.apps.googleusercontent.com';

export interface OAuthLogoutProps {
    isOnDashboard: CallableFunction
    setLoginType: CallableFunction
}

const OAuthLogout: React.FC<OAuthLogoutProps> = ({ isOnDashboard, setLoginType }) => {
    const onSuccess = () => {
        console.log('Logout made successfully');
        setLoginType('');
        isOnDashboard(false);
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}

export default OAuthLogout;