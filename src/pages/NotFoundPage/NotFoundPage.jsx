import { Link } from "react-router-dom";
import "./NotFoundPage.scss"

function NotFoundPage() {
    return (
      <div className="notfound">
        <h1 className="notfound-num">404</h1>
        <h1 className="notfound__error-msg">Page Not Found 😪 </h1>
        <Link to='/' className="notfound-btn">Back to Home</Link>
      </div>
    );
  }

export default NotFoundPage;