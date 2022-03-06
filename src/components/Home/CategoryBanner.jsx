import "./CategoryBanner.css";
import bannerImg1 from "../../images/prodCategoryBanner1.jpg";
import bannerImg2 from "../../images/prodCategoryBanner2.jpg";

export default function CategoryBanner() {
  return (
    <div className="categoryBanner">
      <div className="container-fluid">
        <div className="row">
          <Category img={bannerImg1} alt={"cosmetic sets banner"} name={"Cosmetic Sets"} title={"cosmetic sets"} spanText={"30% off"} />
          <Category img={bannerImg2} alt={"electronics banner"} name={"Electronic"} title={"best seller"} />
        </div>
      </div>
    </div>
  );
}

function Category({ img, alt, name, title, spanText }) {
  return (
    <div className="col">
      <div className="bannerWrapper">
        <figure>
          <img src={img} alt={alt} />
        </figure>
        <div className="categoryText">
          <h2>{name}</h2>
          <h4>{title} {spanText && <span>{spanText}</span>}</h4>
          <hr />
          <h6>
            shop now
            <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: "0.2rem" }} />
          </h6>
        </div>
      </div>
    </div>
  );
}