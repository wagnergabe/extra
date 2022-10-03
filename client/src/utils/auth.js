import decode from 'jwt-decode';

class AuthService {
    //retrieve data save in token
    getProfile(){
        return decode(this.getToken());
    }

    //checking if the user is logged in
    loggedIn(){
        // checking if there is a valid token still active
        const token =this.getToken();
       
        return !!token && !this.isTokenExpired(token);

    }

    //check if token is expired
    isTokenExpired(token) {
        try {
            const decode +decode(token);
            if(decoded.exp < Date.now()/1000){
                return true;
            }
            else{
                return false;
            }
        }
        catch (err) {
            return false;
        }
    }

    //


}