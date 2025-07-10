import react from "react";
import { Card, CardBody } from "reactstrap";

function Header({ name,title })
{
 return(
       <div>
       <Card style={{color:"white", backgroundColor:"black"}}>
            <CardBody>
                <h2 className="text-center my-1 ">Welcome to courses Application</h2>
            </CardBody>
       </Card>
       
       </div>
);
}
export default Header;