import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BreadCrumb.css";

export default function BreadCrumb({ name }) {
  return (
    <div className="mainBreadCrumb">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{name}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
