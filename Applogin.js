module.exports = Applogin;
function Applogin(user, pwd)
{
    
    
    if (user=="admin" && pwd=="admin")
    {
       login_Status = true;
       
    }
    else if (user!="admin" && pwd!="admin") 
    { 
        login_Status = false;
    }

    return login_Status;

}
